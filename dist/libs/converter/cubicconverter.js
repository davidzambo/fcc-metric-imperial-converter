"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
class CubicConverter extends converter_1.Converter {
    constructor(quantity, unit) {
        super(quantity, unit);
        this.initConverter("gal", "l", 3.78541);
    }
}
exports.CubicConverter = CubicConverter;
//# sourceMappingURL=cubicconverter.js.map