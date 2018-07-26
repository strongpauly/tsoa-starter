import { notFoundHandler } from "../../src/config/notFoundHandler";
import { mockReq, mockRes } from "../utils/testing";
import { ApiError } from "../models/ApiError";

describe("notFoundHandler", () => {
    it("will send an ApiError to next", async () => {
        let called = false;
        notFoundHandler(mockReq(), mockRes(), (arg) => {
            called = true;
            expect(arg).toBeInstanceOf(ApiError);
            expect(arg.statusCode).toEqual(404);
        });
        expect(called).toEqual(true);
    });
});
