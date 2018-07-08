"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cubicconverter_1 = require("./converter/cubicconverter");
const lengthconverter_1 = require("./converter/lengthconverter");
const weightconverter_1 = require("./converter/weightconverter");
const numbernormalizer_1 = require("./numbernormalizer");
class ConversionHandler {
    constructor(input) {
        if (input === undefined) {
            throw new Error("Invalid input");
        }
        /*
            Search for the index where the unit starts
        */
        const firstAlphaIndex = input.search(/[a-zA-Z]/);
        let numberError = false;
        this.baseUnit = input.slice(firstAlphaIndex, input.length);
        try {
            this.baseNumber = numbernormalizer_1.NumberNormalizer.normalize(input.slice(0, firstAlphaIndex));
        }
        catch (e) {
            numberError = true;
        }
        switch (this.baseUnit) {
            case "kg":
            case "lbs":
                this.converter = new weightconverter_1.WeightConverter(this.baseNumber, this.baseUnit);
                break;
            case "km":
            case "mi":
                this.converter = new lengthconverter_1.LengthConverter(this.baseNumber, this.baseUnit);
                break;
            case "gal":
            case "l":
                this.converter = new cubicconverter_1.CubicConverter(this.baseNumber, this.baseUnit);
                break;
            default:
                if (numberError) {
                    throw new Error("invalid number and unit");
                }
                else {
                    throw new Error("invalid unit");
                }
        }
        //tslint:disable
        console.log("hiba", firstAlphaIndex, this.baseNumber, this.baseUnit);
        this.result = this.converter.getConvertResult();
    }
}
exports.ConversionHandler = ConversionHandler;
//# sourceMappingURL=conversionhandler.js.map