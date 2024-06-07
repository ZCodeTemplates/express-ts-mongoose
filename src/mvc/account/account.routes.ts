import { getAccounts, createAccount } from './account.contoller';
import express from 'express';
import { wrapAsync } from '../../common/middlewares/wrapAsync';

const router = express.Router();

router.get('/', wrapAsync(getAccounts));
router.post('/create', wrapAsync(createAccount));

export default router;
