import { ZodTypeAny } from 'zod';

export type TestTypeEnumType<T> = {
  [P in keyof T]: ZodTypeAny
}
