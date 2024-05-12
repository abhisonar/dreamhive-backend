import { constants } from 'http2';
import { BaseResponseModel, ErrorResponseHttp, IPaginatedResponse, StatusCodeTypes } from '../../base';

export function baseResponse<T>(
  res: BaseResponseModel<T>,
  statusCode: StatusCodeTypes,
  data: T,
  message?: string
): BaseResponseModel<T> {
  return res.status(constants[statusCode] as number).send({
    data,
    message,
    statusCode: constants[statusCode] as number
  });
}

export function basePaginatedResponse<T>(
  res: BaseResponseModel<IPaginatedResponse<T>>,
  statusCode: StatusCodeTypes,
  paginatedData: IPaginatedResponse<T>,
  message?: string
): BaseResponseModel<IPaginatedResponse<T>> {
  return baseResponse(res, statusCode, paginatedData, message);
}

export function baseErrorResponse<T>(
  res: BaseResponseModel<null>,
  statusCode: StatusCodeTypes,
  error?: ErrorResponseHttp,
  message = ''
) {
  return res.status(constants[statusCode] as number).send({
    data: null,
    statusCode: constants[statusCode] as number,
    error,
    message: message
  });
}
