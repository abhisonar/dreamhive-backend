import { ZodTypeAny } from 'zod';

export type SchemaValidatorType<T> = {
  [P in keyof T]: ZodTypeAny
}
