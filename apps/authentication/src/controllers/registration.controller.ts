import { BaseRequestModel, BaseResponseModel } from '@dreamhive-lib/base';
import { baseErrorResponse, baseResponse } from '@dreamhive-lib/function/index';
import { RegistrationRequest } from '@dreamhive-lib/request';

// prisma client
import { PrismaClient, USER_ROLE } from '@prisma/client';

const prisma = new PrismaClient();

export const registrationController = async (
  req: BaseRequestModel<RegistrationRequest>,
  res: BaseResponseModel<null>
) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const isExist = await prisma.appUserCollection.findUnique({
      where: {
        email,
      },
    });

    if (isExist) {
      return baseErrorResponse(res, 'HTTP_STATUS_UNPROCESSABLE_ENTITY', {
        message: 'Email is already exist.',
      });
    }

    const newUser = await prisma.appUserCollection.create({
      data: {
        isSuperAdmin: role === USER_ROLE.USER_ROLE_ADMIN,
        email,
        password,
        person: {
          create: {
            firstName,
            lastName,
          },
        },
        role,
      },
    });

    if (newUser) {
      return baseResponse(res, 'HTTP_STATUS_CREATED', null);
    }
  } catch (err) {
    return baseErrorResponse(res, 'HTTP_STATUS_INTERNAL_SERVER_ERROR', err);
  }
};
