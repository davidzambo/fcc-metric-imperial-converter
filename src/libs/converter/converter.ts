import { ConverterInterface } from "./converterinterface";

export abstract class Converter implements ConverterInterface {
    public baseUnit = "";
    public changeUnit = "";
    public convertRatio = 1;
    public initQuantity = 0;
    public initUnit = "";
    public resultString = "";
    public convertedQuantity = 1;
    public convertedUnit = "";

    public constructor(quantity: number, unit: string) {
        this.initQuantity = quantity;
        this.initUnit = unit;
    }

    public initConverter(baseUnit: string, changeUnit: string, convertRatio: number) {
        this.baseUnit = baseUnit;
        this.changeUnit = changeUnit;
        this.convertRatio = convertRatio;
        if (this.checkInputs()) {
            this.setConvertResult();
        }
    }

    public checkInputs() {
        if (this.initQuantity < 0 && (this.initUnit !== this.baseUnit && this.initUnit !== this.changeUnit)) {
            throw new Error("invalid number and unit");
        }
        if (this.initQuantity < 0) {
            throw new Error("invalid number!");
        }

        if (this.initUnit !== this.baseUnit && this.initUnit !== this.changeUnit) {
            throw new Error("invalid unit!");
        }

        return true;
    }

    public setConvertResult() {
        if (this.initUnit === this.baseUnit) {
            this.convertedUnit = this.changeUnit;
            this.convertedQuantity = this.convertRatio * this.initQuantity;
        } else {
            this.convertedUnit = this.baseUnit;
            this.convertedQuantity = this.initQuantity / this.convertRatio;
        }
        this.resultString = `${this.initQuantity} ${this.initUnit} converts to`
            + ` ${this.convertedQuantity.toFixed(5)} ${this.convertedUnit}`;
    }

    public getConvertResult() {
        return {
            initNum: this.initQuantity,
            initUnit: this.initUnit,
            returnNum: Number(this.convertedQuantity.toFixed(5)),
            returnUnit: this.convertedUnit,
            string: this.resultString,
        };
    }
}
