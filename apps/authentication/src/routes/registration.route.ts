import { registrationController } from '../controllers/registration.controller';
import { Router } from 'express';

const router = Router();

router.get('/registration', registrationController);

module.exports = router;
