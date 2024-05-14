import { BaseRequestModel, BaseResponseModel } from '@dreamhive-lib/base';
import { LoginRequest } from '@dreamhive-lib/request';
import { baseErrorResponse, baseResponse, getValueFromToken } from '@dreamhive-lib/function/index';
import { TOKEN_SECRET } from '@dreamhive-lib/constant/index';
import argon from 'argon2';

// prisma client
import { PrismaClient } from '@prisma/client';
import { generateJwtToken } from '@dreamhive-lib/function/jwt.function';
import { getCurrentUTCDateTime } from '@dreamhive-lib/function/date.function';

const prisma = new PrismaClient();

export const loginController = async (
  req: BaseRequestModel<LoginRequest>,
  res: BaseResponseModel<{token: string}>
) => {
  try {
    const { email, password } = req.body;

    const secretKey = getValueFromToken(TOKEN_SECRET);

    if (!secretKey) {
      baseErrorResponse(res, 'HTTP_STATUS_INTERNAL_SERVER_ERROR', { message: 'No secret key provided' });
    }

    const appUser = await prisma.appUserCollection.findUnique({ where: { email } });

    if (!appUser) {
      return baseErrorResponse(res, 'HTTP_STATUS_NOT_FOUND', { message: `No any account found associated with ${email}` });
    }

    const isVerified = await argon.verify(appUser.password, password);

    if (!isVerified) {
      return baseErrorResponse(res, 'HTTP_STATUS_UNAUTHORIZED', { message: `Invalid credentials. Please double-check your username and password and try again. ` });
    }

    const token = generateJwtToken({ appUserId: appUser.id, appUserRole: appUser.role }, secretKey);

    return baseResponse(res, 'HTTP_STATUS_OK', {token});
  } catch (err) {
    return baseErrorResponse(res, "HTTP_STATUS_INTERNAL_SERVER_ERROR", err)
  }
};
