import { z } from 'zod';
import { SchemaValidatorType } from '@dreamhive-lib/type';
import { LoginRequest } from '@dreamhive-lib/request';


export const LoginSchemaValidator = z.object<SchemaValidatorType<LoginRequest>>({
  email: z.string({required_error: 'username is required'}),
  password: z.string({required_error: 'password is required'})
})
