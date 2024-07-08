import { loginController } from '../controllers/login.controller';
import { Router } from 'express';
import { schemaValidatorMiddleware } from '@dreamhive-lib/function';
import { LoginSchemaValidator } from '../data/schemaValidator/login.schema-validator';

const router = Router();

router.post(
  '/login',
  schemaValidatorMiddleware(LoginSchemaValidator),
  loginController
);

module.exports = router;
