"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversionhandler_1 = require("../libs/conversionhandler");
class ConvertController {
    static convert(req, res) {
        const { input } = req.query;
        // if (!input) {
        //     return res.json({error: "undefined input"});
        // }
        const data = {};
        try {
            const converter = new conversionhandler_1.ConversionHandler(input);
            data.result = converter.getResult();
        }
        catch (e) {
            data.result = e.message;
        }
        finally {
            res.render("index", data);
        }
    }
}
exports.ConvertController = ConvertController;
//# sourceMappingURL=ConvertController.js.map