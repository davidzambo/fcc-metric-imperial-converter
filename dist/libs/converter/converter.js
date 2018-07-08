"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Converter {
    constructor(quantity, unit) {
        this.baseUnit = "";
        this.changeUnit = "";
        this.convertRatio = 1;
        this.initQuantity = 0;
        this.initUnit = "";
        this.string = "";
        this.returnNum = 1;
        this.returnUnit = "";
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
        if (Number.isNaN(Number(this.initQuantity)) && (this.initUnit !== this.baseUnit && this.initUnit !== this.changeUnit)) {
            throw new Error("invalid number and unit");
        }
        if (Number.isNaN(Number(this.initQuantity))) {
            throw new Error("invalid number");
        }
        if (this.initUnit !== this.baseUnit && this.initUnit !== this.changeUnit) {
            throw new Error("invalid unit!");
        }
        return true;
    }
    setConvertResult() {
        if (this.initUnit === this.baseUnit) {
            this.returnUnit = this.changeUnit;
            this.returnNum = this.convertRatio * this.initQuantity;
        }
        else {
            this.returnUnit = this.baseUnit;
            this.returnNum = this.initQuantity / this.convertRatio;
        }
        this.string = `${this.initQuantity} ${this.initUnit} converts to`
            + ` ${this.returnNum.toFixed(5)} ${this.returnUnit}`;
    }
    getConvertResult() {
        return {
            initNum: this.initQuantity,
            initUnit: this.initUnit,
            returnNum: Number(this.returnNum.toFixed(5)),
            returnUnit: this.returnUnit,
            string: this.string,
        };
    }
}
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map