import { Request, Response } from "express";

export type ReqBody<T> = Request<any, any, T>;
export type ReqParams<T> = Request<T>;
export type ResJson<T> = Response<T>;
