import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { STATUS_CODES } from '../consts/statusCodes.consts';

const { UNEXPECTED_ERROR, VALIDATION_ERROR } = STATUS_CODES;

function getErrorData(err: HttpError | ZodError | Error) {
    if (err instanceof HttpError) {
        const { status, message } = err;
        return { status, message };
    }
    if (err instanceof ZodError) {
        const formattedZodError = fromZodError(err).toString();
        return { status: VALIDATION_ERROR, message: formattedZodError };
    }

    const { message } = err;
    return { status: UNEXPECTED_ERROR, message };
}

const errorHandler = (err: HttpError | ZodError | Error, req: Request, res: Response, next: NextFunction) => {
    const error = getErrorData(err);
    const { status } = error;
    res.status(status).send({ error });
};

export default errorHandler;
