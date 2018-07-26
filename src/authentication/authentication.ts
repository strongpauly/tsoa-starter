import * as express from "express";

/**
 * @param request
 * @param securityName
 * @param scopes
 */
export async function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
    // Add user authentication here.
    return Promise.resolve({});
}
