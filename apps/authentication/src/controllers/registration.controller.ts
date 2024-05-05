import { BaseRequestModel, BaseResponseModel } from '@dreamhive-lib/base';
import { baseErrorResponse, baseResponse } from '@dreamhive-lib/function';
import { RegistrationRequest } from '@dreamhive-lib/request';

// prisma client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const registrationController = async (
  req: BaseRequestModel<RegistrationRequest>,
  res: BaseResponseModel<RegistrationRequest>
) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = await prisma.dreamer.create({
      data: {
        appUser: {
          create: {
            email: email,
            password: password,
            person: {
              create: {
                firstName: firstName,
                lastName: lastName,
              },
            },
          },
        },
      },
    });

    if (newUser) {
      return res.send(
        baseResponse({} as RegistrationRequest, 'HTTP_STATUS_OK')
      );
    }
  } catch (err) {
    return res
      .status(500)
      .json(
        baseErrorResponse(
          { message: 'Error' },
          'HTTP_STATUS_INTERNAL_SERVER_ERROR'
        )
      );
  }
};
