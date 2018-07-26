import { Controller, Route, Get } from "tsoa";

@Route("/")
export class IndexController extends Controller {
    
    @Get()
    public index(): string {
        return "Hello world"
    }
}