"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
class LengthConverter extends converter_1.Converter {
    constructor(quantity, unit) {
        super(quantity, unit);
        this.initConverter("mi", "km", 1.609344);
    }
}
exports.LengthConverter = LengthConverter;
//# sourceMappingURL=lengthconverter.js.map