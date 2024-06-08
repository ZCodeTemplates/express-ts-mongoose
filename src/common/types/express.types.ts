import { Request, Response } from 'express';

export type ReqBody<T> = Request<unknown, unknown, T | undefined>;
export type ReqParams<T> = Request<T>;
export type ResJson<T> = Response<T>;
