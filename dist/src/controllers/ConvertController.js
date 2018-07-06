"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertController {
    static convert(req, res) {
        const { input } = req.query;
        return res.json({
            message: "In ConvertController",
        });
    }
}
exports.ConvertController = ConvertController;
//# sourceMappingURL=ConvertController.js.map