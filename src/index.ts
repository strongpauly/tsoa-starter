import * as http from "http";
import config from "./config/config";

// Need to import all controllers so tsoa can build routes.ts
import * as Controllers from "./controllers";

import Server from "./config/express";
import { logger } from "./logging/logging";

// Init the express application
const app = Server();
const server: http.Server = http.createServer(app);
server.listen(config.port);

server.on("error", (e: Error) => {
  logger.error("Error starting server", e);
});

server.on("listening", () => {
  logger.info(`Server started on port ${config.port}`);
});
