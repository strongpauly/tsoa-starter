import * as express from "express";
import { VError } from "verror";
import { logger } from "../logging/logging";
import isDevelopment from "../utils/isDevelopment";

let getError = (err) => ({});
// Send full error if development.
if (isDevelopment()) {
    getError = (err) => err;
}

function middleware(err: any, req: express.Request, res: express.Response) {
    let forLog = err;
    if (!(forLog instanceof Error)) {
        forLog = new Error(JSON.stringify(err));
        if (err.status || err.statusCode) {
            forLog.status = err.status || err.statusCode;
        }
    }
    logger.error(VError.fullStack(forLog));
    res.status(err.status || err.statusCode || 500).send({
        error: getError(err),
        message: err.message || err.name,
    });
}

export const errorMiddleware: express.ErrorRequestHandler = middleware;
