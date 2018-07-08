import * as express from "express";
import { ConversionHandler } from "../libs/conversionhandler";

export class ConvertController {
    public static convert(req: express.Request, res: express.Response) {
        const { input } = req.query;
        if (!input) {
            return res.json({error: "undefined input"});
        }
        const converter = new ConversionHandler(input);
        return res.json({
            result: converter.result,
        });
    }
}
