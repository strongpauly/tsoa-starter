import { IndexController } from './index.controller';

describe('IndexController', () => {
    it('will get hello woLrd', () => {
        const controller = new IndexController();
        expect(controller.index()).toEqual("Hello world");
    })
})