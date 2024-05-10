import { USER_ROLE } from '@prisma/client';

export interface RegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: USER_ROLE;
}
