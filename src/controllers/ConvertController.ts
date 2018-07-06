import * as express from "express";

export class ConvertController {
    public static convert(req: express.Request, res: express.Response) {
        const { input } = req.query;
        return res.json({
            message: "In ConvertController",
        });
    }
}
