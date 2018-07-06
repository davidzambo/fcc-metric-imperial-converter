interface ConverterInterface {
    baseUnit: string;
    changeUnit: string;
    convertedQuantity: number;
    convertedUnit: string;
    initUnit: string;
    initQuantity: number;
    convertRatio: number;
    resultString: string;
}

// export default class Converter {
//     public baseUnit: number;
//
//     public constructor(input: string) {
//         const firstAlphaIndex = input.search(/[a-zA-Z]/);
//         const baseUnit = input.slice();
//     }
// }

class LengthConverter implements ConverterInterface {
    public baseUnit = "mi";
    public changeUnit = "km";
    public convertRatio = 1.609344;
    public initQuantity = 0;
    public initUnit = "mi";
    public resultString = "";
    public convertedQuantity = 0;
    public convertedUnit = "km";

    public constructor(quantity: number, unit: string) :void{
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
        } else {
            this.convertedUnit = this.baseUnit;
            this.convertedQuantity = this.initQuantity / this.convertRatio;
        }
        this.resultString = `${this.initQuantity} ${this.initUnit} converts to
            ${this.convertedQuantity.toFixed(2)} ${this.convertedUnit}`;
    }

    public getConvertResult() {
        return {
            initQuantity: this.initQuantity,
            initUnit: this.initUnit,
            convertedQuantity: this.convertedQuantity,
            convertedUnit: this.convertedUnit,
            result: this.resultString,
        };
    }
}