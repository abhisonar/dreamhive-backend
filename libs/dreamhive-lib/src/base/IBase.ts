import { Request, Response } from 'express';
import { IPaginatedResponse, ResponseHttp } from './IResponse';

// Reponse: Reference of reponse object related to request
export type BaseRequestModel<
  ReqBody,
  ReqParams = unknown,
  ReqQueryParams = unknown,
  ReqResponse = unknown
> = Request<ReqParams, ReqResponse, ReqBody, ReqQueryParams>;

export type BaseResponseModel<ResData> = Response<ResponseHttp<ResData>>;

export type BasePaginatedResponseModel<ResData> = Response<
  IPaginatedResponse<ResData>
>;
