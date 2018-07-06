import * as express from "express";

export class HomeController {
    public static show(req: express.Request, res: express.Response) {
        return res.render("index");
    }
}
