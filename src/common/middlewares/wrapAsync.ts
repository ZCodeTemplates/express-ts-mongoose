import type { Request, Response, NextFunction } from 'express';
import { STATUS_CODES } from '../consts/statusCodes.consts';

export const wrapAsync = <R1>(fn: (...args: [Request<R1>, Response, NextFunction]) => unknown) => {
    return async (req: Request<R1>, res: Response, next: NextFunction) => {
        try {
            const result = await fn(req, res, next);
            res.status(STATUS_CODES.OK).send(result);
        } catch (error) {
            next(error);
        }
    };
};
