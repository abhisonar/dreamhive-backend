import { z } from 'zod';
import { RegistrationRequest } from '@dreamhive-lib/request';

import { USER_ROLE } from '@prisma/client';
import { SchemaValidatorType } from '@dreamhive-lib/type';


export const RegistrationSchemaValidator = z.object<SchemaValidatorType<RegistrationRequest>>({
  firstName: z.string({ required_error: 'firstName is required' }).min(1, '').max(100),
  lastName: z.string({ required_error: 'lastName is required' }).min(1).max(100),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8).max(20),
  role: z.nativeEnum(USER_ROLE)
});
