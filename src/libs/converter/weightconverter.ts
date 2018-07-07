import { Converter } from "./converter";

export class WeightConverter extends Converter {
    public constructor(quantity: number, unit: string) {
        super(quantity, unit);
        this.initConverter("lbs", "kg", 0.453592);
    }
}
