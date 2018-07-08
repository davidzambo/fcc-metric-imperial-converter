import { Converter } from "./converter/converter";
import { CubicConverter } from "./converter/cubicconverter";
import { LengthConverter } from "./converter/lengthconverter";
import { WeightConverter } from "./converter/weightconverter";
import { NumberNormalizer } from "./numbernormalizer";


export class ConversionHandler {
    public baseUnit: string;
    public baseNumber: number;
    public converter: Converter;
    public result: any;

    public constructor(input: string) {
        if (input ===  undefined) {
            throw new Error("Invalid input");
        }
        /*
            Search for the index where the unit starts
        */
        const firstAlphaIndex = input.search(/[a-zA-Z]/);
        let numberError = false;
        this.baseUnit = input.slice(firstAlphaIndex, input.length);
        try {
            this.baseNumber = NumberNormalizer.normalize(input.slice(0, firstAlphaIndex));
        } catch (e) {
            numberError = true;
        }

        switch (this.baseUnit) {
            case "kg":
            case "lbs":
                this.converter = new WeightConverter(this.baseNumber, this.baseUnit);
                break;
            case "km":
            case "mi":
                this.converter = new LengthConverter(this.baseNumber, this.baseUnit);
                break;
            case "gal":
            case "l":
                this.converter = new CubicConverter(this.baseNumber, this.baseUnit);
                break;
            default:
                if (numberError) {
                    throw new Error("invalid number and unit");
                } else {
                    throw new Error("invalid unit");
                }
        }
        //tslint:disable
        console.log("hiba", firstAlphaIndex, this.baseNumber, this.baseUnit);

        this.result = this.converter.getConvertResult();
    }
}
