
import * as path from "path";

export function swaggerMiddleware(req, res) {
    const swagger = path.resolve(__dirname + "/../swagger.json");
    res.sendFile(swagger);
}
