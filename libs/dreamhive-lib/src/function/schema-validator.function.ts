import { ZodError, ZodObject } from 'zod';
import { SchemaValidatorType } from '../type';
import { BaseRequestModel, BaseResponseModel } from '../base/base.http';
import { NextFunction } from 'express';
import { baseErrorResponse } from './base/reponse.function';

export function schemaValidatorMiddleware<Z, Q, S>(schema: ZodObject<SchemaValidatorType<Z>>) {
  return (req: BaseRequestModel<Q>, res: BaseResponseModel<S>, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        baseErrorResponse(res, 'HTTP_STATUS_UNPROCESSABLE_ENTITY', error);
      } else {
        baseErrorResponse(res, 'HTTP_STATUS_INTERNAL_SERVER_ERROR', error);
      }
    }
  };
}
