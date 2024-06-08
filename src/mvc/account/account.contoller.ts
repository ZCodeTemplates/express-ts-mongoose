import AccountModel from './account.model';
import { ReqBody } from '../../common/types/express.types';

export const getAccounts = async () => {
    return AccountModel.findOne({});
};

export const createAccount = async (req: ReqBody<{ email: string; name: string }>) => {
    const {
        body: { name, email }
    } = req;
    return AccountModel.create({ name, email });
};
