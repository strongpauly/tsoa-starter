import * as express from "express";
import expressServer from "../../src/config/express";

describe("Express", () => {
    it("can configure the production server", async () => {
        const app: express.Express = expressServer(false);
        expect(app).not.toBeNull();
    });

    it("can configure the development server", async () => {
        const app: express.Express = expressServer();
        expect(app).not.toBeNull();
    });
});
