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

// try {
//     const { email, password } = req.body;
//
//     const emailExist = await getUserByEmail(email);
//
//     if (emailExist) {
//         throw createHttpError.BadRequest('Email already exist.');
//     }
//
//     const hashedPassword = await bcrypt.hash(password.trim(), 12);
//
//     const newUser = await createUser(email, hashedPassword);
//
//     res.status(201).json({ message: 'UserModels created successfully' });
// } catch (error) {
//     next(error);
// }
