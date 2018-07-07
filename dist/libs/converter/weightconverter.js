"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
class WeightConverter extends converter_1.Converter {
    constructor(quantity, unit) {
        super(quantity, unit);
        this.initConverter("lbs", "kg", 0.453592);
    }
}
exports.WeightConverter = WeightConverter;
//# sourceMappingURL=weightconverter.js.map