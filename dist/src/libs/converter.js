"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Converter {
    constructor(input) {
        // search for the index where the unit starts
        this.firstAlphaIndex = input.search(/[a-zA-Z]/);
        this.baseUnit = input.slice(this.firstAlphaIndex, input.length);
        const baseQuantity = input.slice(0, this.firstAlphaIndex).replace(",", ".");
        // checks if is there a fraction in the baseQuantity
        if (baseQuantity.search(/\//) === -1) {
            this.baseQuantity = baseQuantity;
        }
        else {
            const fraction = baseQuantity.split("/");
        }
    }
}
exports.default = Converter;
class LengthConverter {
    constructor(quantity, unit) {
        this.baseUnit = "mi";
        this.changeUnit = "km";
        this.convertRatio = 1.609344;
        this.initQuantity = 0;
        this.initUnit = "mi";
        this.resultString = "";
        this.convertedQuantity = 0;
        this.convertedUnit = "km";
        if (quantity < 0) {
            throw new Error("Invalid quantity amount!");
        }
        if (unit !== this.baseUnit && unit !== this.changeUnit) {
            throw new Error("Invalid given unit!");
        }
        this.initQuantity = quantity;
        this.initUnit = unit;
        if (this.initUnit === this.baseUnit) {
            this.convertedUnit = this.changeUnit;
            this.convertedQuantity = this.convertRatio * this.initQuantity;
        }
        else {
            this.convertedUnit = this.baseUnit;
            this.convertedQuantity = this.initQuantity / this.convertRatio;
        }
        this.resultString = `${this.initQuantity} ${this.initUnit} converts to
            ${this.convertedQuantity.toFixed(2)} ${this.convertedUnit}`;
    }
    getConvertResult() {
        return {
            initQuantity: this.initQuantity,
            initUnit: this.initUnit,
            convertedQuantity: this.convertedQuantity,
            convertedUnit: this.convertedUnit,
            result: this.resultString,
        };
    }
}
//# sourceMappingURL=converter.js.map