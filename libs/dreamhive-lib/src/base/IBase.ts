import { Request, Response } from 'express';
import { IPaginatedResponse, IResponse } from './IResponse';

// Reponse: Reference of reponse object related to request
export interface BaseRequestModel<ReqBody, ReqParams = {}, ReqQueryParams = {}, ReqResponse = {}>
  extends Request<ReqParams, ReqResponse, ReqBody, ReqQueryParams> {}

export interface BaseResponseModel<ResData> extends Response<IResponse<ResData>> {}

export interface BasePaginatedResponseModel<ResData>
  extends Response<IPaginatedResponse<ResData>> {}
