import { constants } from 'http2';

export interface ResponseHttp<T = Record<string, never>> {
  data: T;
  statusCode: number;
  message?: string;
  errors?: IErrorResponse;
}

export interface IPaginatedResponse<T> extends IPagination {
  items: Array<T>;
}

export interface IPagination {
  totalCount?: number;
  currentItemsCount?: number;
  pageIndex?: number;
  lastPage?: number;
}

export type StatusCodeTypes = keyof typeof constants;

export interface IErrorResponse {
  message?: string;
  validationErrors?: { [field: string]: string };
  subErrors?: ISubErrorReponse[];
}

export interface ISubErrorReponse {
  message: string;
  code?: string;
}
