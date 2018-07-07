import { Converter } from "./converter";

export class CubicConverter extends Converter {

    constructor(quantity: number, unit: string) {
        super(quantity, unit);
        this.initConverter("gal", "l", 3.78541);
    }
}
