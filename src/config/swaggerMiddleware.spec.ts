import { swaggerMiddleware } from "../../src/config/swaggerMiddleware";
import { mockRes, mockReq } from "../utils/testing";

describe("swaggerMiddleware", () => {
    it("will send swagger.json", async () => {
        const res = mockRes();
        swaggerMiddleware(mockReq(), res);
        expect(res.sendFile).toHaveBeenCalled();
    });
});
