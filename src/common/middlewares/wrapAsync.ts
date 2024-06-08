import type { Request, Response, NextFunction } from 'express';

const STATUS_CODE_OK = 200;

export const wrapAsync = (fn: (...args: [Request, Response, NextFunction]) => unknown) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await fn(req, res, next);
            res.status(STATUS_CODE_OK).send(result);
        } catch (error) {
            next(error);
        }
    };
};
