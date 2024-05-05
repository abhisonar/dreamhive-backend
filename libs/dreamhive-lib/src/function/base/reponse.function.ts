import { constants } from 'http2';
import {
  IErrorResponse,
  type IPaginatedResponse,
  type IResponse,
  type StatusCodeTypes,
} from '../../base';

export function baseResponse<T>(
  data: T,
  statusCode: StatusCodeTypes,
  message?: string
): IResponse<T> {
  return {
    data,
    message,
    statusCode: constants[statusCode] as number,
  };
}

export function basePaginatedResponse<T>(
  paginatedData: IPaginatedResponse<T>,
  statusCode: StatusCodeTypes,
  message?: string
): IResponse<IPaginatedResponse<T>> {
  return baseResponse(paginatedData, statusCode, message);
}

export function baseErrorResponse<T>(
  errors: IErrorResponse,
  statusCode: StatusCodeTypes
): IResponse<T> {
  return {
    data: {} as T,
    statusCode: constants[statusCode] as number,
    errors: errors,
  };
}
