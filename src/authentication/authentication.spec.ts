import { Request } from "express";
import { expressAuthentication } from "./authentication";
import { mockReq } from "../utils/testing";

describe("Authentication", () => {
    it("can be called", async () => {
        const req: Request = mockReq();
        const res = await expressAuthentication(req, "user");
        expect(res).not.toBeUndefined();
    });
});
