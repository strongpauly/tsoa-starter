import * as express from "express";
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';

export function mockReq(): express.Request {
    return new Request() as any;
}

export function mockRes(): express.Response{
    return new Response() as any;
}