import { constants } from 'http2';
import {
  BaseResponseModel,
  IErrorResponse,
  type IPaginatedResponse,
  type ResponseHttp,
  type StatusCodeTypes,
} from '../../base';

export function baseResponse<T>(
  res: BaseResponseModel<T>,
  data: T,
  statusCode: StatusCodeTypes,
  message?: string
): BaseResponseModel<T> {
  return res.status(constants[statusCode] as number).send({
    data,
    message,
    statusCode: constants[statusCode] as number,
  });
}

export function basePaginatedResponse<T>(
  res: BaseResponseModel<IPaginatedResponse<T>>,
  paginatedData: IPaginatedResponse<T>,
  statusCode: StatusCodeTypes,
  message?: string
): BaseResponseModel<IPaginatedResponse<T>> {
  return baseResponse(res, paginatedData, statusCode, message);
}

export function baseErrorResponse<T>(
  res: BaseResponseModel<null>,
  statusCode: StatusCodeTypes,
  errors: IErrorResponse,
  message = ''
) {
  return res.status(constants[statusCode] as number).send({
    data: null,
    statusCode: constants[statusCode] as number,
    errors,
    message: message,
  });
}
