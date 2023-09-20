import { Router } from 'express';
import prediction from './prediction';

const router = Router();

router.use('/prediction', prediction);

export default router;
