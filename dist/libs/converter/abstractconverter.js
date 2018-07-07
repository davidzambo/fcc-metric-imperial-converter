"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Converter {
    constructor(quantity, unit) {
        this.baseUnit = "";
        this.changeUnit = "";
        this.convertRatio = 1;
        this.initQuantity = 0;
        this.initUnit = "";
        this.resultString = "";
        this.convertedQuantity = 1;
        this.convertedUnit = "";
        this.initQuantity = quantity;
        this.initUnit = unit;
    }
    initConverter(baseUnit, changeUnit, convertRatio) {
        this.baseUnit = baseUnit;
        this.changeUnit = changeUnit;
        this.convertRatio = convertRatio;
        if (this.checkInputs()) {
            this.setConvertResult();
        }
    }
    checkInputs() {
        if (this.initQuantity < 0) {
            throw new Error("Invalid given quantity!");
        }
        if (this.initUnit !== this.baseUnit && this.initUnit !== this.changeUnit) {
            throw new Error("Invalid given unit!");
        }
        return true;
    }
    setConvertResult() {
        if (this.initUnit === this.baseUnit) {
            this.convertedUnit = this.changeUnit;
            this.convertedQuantity = this.convertRatio * this.initQuantity;
        }
        else {
            this.convertedUnit = this.baseUnit;
            this.convertedQuantity = this.initQuantity / this.convertRatio;
        }
        this.resultString = `${this.initQuantity} ${this.initUnit} converts to`
            + ` ${this.convertedQuantity.toFixed(3)} ${this.convertedUnit}`;
    }
    getConvertResult() {
        return {
            convertedQuantity: Number(this.convertedQuantity.toFixed(3)),
            convertedUnit: this.convertedUnit,
            initQuantity: this.initQuantity,
            initUnit: this.initUnit,
            resultString: this.resultString,
        };
    }
}
exports.Converter = Converter;
//# sourceMappingURL=abstractconverter.js.map