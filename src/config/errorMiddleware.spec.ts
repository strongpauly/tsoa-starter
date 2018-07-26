import * as express from "express";
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response'
import { errorMiddleware } from "../../src/config/errorMiddleware";
import { ApiError } from "../models/ApiError";

describe("errorMiddleware", () => {

    const nextFn: express.NextFunction = () => ({});

    const newRequest = (): express.Request => {
        return new Request() as any;
    }

    const newResponse = (): express.Response => {
        return new Response() as any;
    }

    it("can handle objects as errors", async () => {
        const req = newRequest();
        const res = newResponse();
        const error = {message: "Error"};
        errorMiddleware(error, req, res, nextFn);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({
            error,
            message: error.message
        });
    });

    it("can handle objects as errors with status set", async () => {
        const req = newRequest();
        const res = newResponse();
        const error = {message: "Error", status: 401};
        errorMiddleware(error, req, res, nextFn);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith({
            error,
            message: error.message
        });
    });

    it("can handle objects as errors with statusCode set", async () => {
        const req = newRequest();
        const res = newResponse();
        const error = {name: "Error message as name", statusCode: 401};
        errorMiddleware(error, req, res, nextFn);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith({
            error,
            message: error.name
        });
    });

    it("can handle ApiError objects and extract statusCode", async () => {
        const req = newRequest();
        const res = newResponse();
        const error = new ApiError("test error", 401);
        errorMiddleware(error, req, res, nextFn);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith({
            error,
            message: error.name
        });
    });
});
