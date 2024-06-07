import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

export default async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw createHttpError.Unauthorized('Authentication failed.');
        }

        const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY!);

        if (typeof decodedToken !== 'object' || !decodedToken.userId) {
            throw createHttpError.BadRequest('Invalid token format.');
        }
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (err) {
        return next(err);
    }
};
