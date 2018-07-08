import * as express from "express";
import { ConvertController } from "./controllers/ConvertController";
import { HomeController } from "./controllers/HomeController";

export class Router {
    public static initializePaths(app: express.Application) {
        console.log('run');
        app.all("/", HomeController.show);
        app.all("/api/convert", ConvertController.convert);
    }
}
