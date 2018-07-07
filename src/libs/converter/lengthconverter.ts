import { Converter } from "./converter";

export class LengthConverter extends Converter {

    public constructor(quantity: number, unit: string) {
        super(quantity, unit);
        this.initConverter("mi", "km", 1.609344);
    }
}
