import { BaseRequestModel, BaseResponseModel } from '@dreamhive-lib/base';
import { RegistrationRequest } from '@dreamhive-lib/request';
import { baseResponse } from '@dreamhive-lib/function/index';

export const loginController = (
  req: BaseRequestModel<RegistrationRequest>,
  res: BaseResponseModel<null>
) => {
  return baseResponse(res, null, 'HTTP_STATUS_OK');
};
