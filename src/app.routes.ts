import express from 'express';
import accountRoutes from './mvc/account/account.routes';

const router = express.Router();

router.use('/account', accountRoutes);

export default router;
