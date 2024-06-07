import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createJwtToken = (userId: Types.ObjectId) => {
    const token = jwt.sign({ userId }, process.env.JWT_PRIVATE_KEY!, {
        expiresIn: '3d'
    });
    return token;
};
