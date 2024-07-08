import { registrationController } from '../controllers/registration.controller';
import { Router } from 'express';
import { RegistrationSchemaValidator } from '../data/schemaValidator/registration.schema-validator';
import { schemaValidatorMiddleware } from '@dreamhive-lib/function';

const router = Router();

router.post(
  '/registration',
  schemaValidatorMiddleware(RegistrationSchemaValidator),
  registrationController
);

module.exports = router;
