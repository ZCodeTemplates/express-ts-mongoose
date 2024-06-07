export const wrapAsync = (fn: any) => {
    return async (req: any, res: any, next: any) => {
        try {
            const result = await fn(req, res, next);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    };
};
