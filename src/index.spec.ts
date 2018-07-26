import Config from "./config/config";

describe('Server', () => {
    it('can be configured', () => {
        const http = require('http');
        const server = {
            on: jest.fn((evt, cb) => {cb()}),
            listen: jest.fn(() => {})
        };
        http.createServer = jest.fn(() => server);
        const index = require('.');
        expect(http.createServer).toBeCalled();
        expect(server.on).toBeCalled();
        expect(server.listen).toBeCalledWith(Config.port);
    });
});