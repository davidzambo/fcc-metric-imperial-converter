"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversionhandler_1 = require("../libs/conversionhandler");
class ConvertController {
    static convert(req, res) {
        const { input } = req.query;
        if (!input) {
            return res.json({ error: "undefined input" });
        }
        const converter = new conversionhandler_1.ConversionHandler(input);
        return res.json({
            result: converter.result,
        });
    }
}
exports.ConvertController = ConvertController;
//# sourceMappingURL=ConvertController.js.map