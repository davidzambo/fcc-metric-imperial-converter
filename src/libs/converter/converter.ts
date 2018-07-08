import { ConverterInterface } from "./converterinterface";

export abstract class Converter implements ConverterInterface {
    public baseUnit = "";
    public changeUnit = "";
    public convertRatio = 1;
    public initQuantity = 0;
    public initUnit = "";
    public string = "";
    public returnNum = 1;
    public returnUnit = "";

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

    public setConvertResult() {
        if (this.initUnit === this.baseUnit) {
            this.returnUnit = this.changeUnit;
            this.returnNum = this.convertRatio * this.initQuantity;
        } else {
            this.returnUnit = this.baseUnit;
            this.returnNum = this.initQuantity / this.convertRatio;
        }
        this.string = `${this.initQuantity} ${this.initUnit} converts to`
            + ` ${this.returnNum.toFixed(5)} ${this.returnUnit}`;
    }

    public getConvertResult() {
        return {
            initNum: this.initQuantity,
            initUnit: this.initUnit,
            returnNum: Number(this.returnNum.toFixed(5)),
            returnUnit: this.returnUnit,
            string: this.string,
        };
    }
}
