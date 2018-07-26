
import * as express from "express";
import { ApiError } from "../models/ApiError";

export function notFoundHandler(req: express.Request, res: express.Response, next: express.NextFunction) {
    next(new ApiError("Not Found", 404, `${req.url} not found`));
}
