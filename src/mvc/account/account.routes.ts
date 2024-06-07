import { getAccounts, createAccount } from './account.contoller';
import express from 'express';
import { wrapAsync } from '../../common/middlewares/wrapAsync';

const router = express.Router();

router.get('/', getAccounts);
router.post('/create', wrapAsync(createAccount));

export default router;

// router.patch(
//   "/change-password",
//   changePasswordValidation,
//   checkValidations,
//   checkAuth, // @ts-expect-error
//   changePassword
// ); // @ts-expect-error
