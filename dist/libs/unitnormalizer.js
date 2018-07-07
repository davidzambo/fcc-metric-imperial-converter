"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Prepare user given number to be able handle properly later
 */
class UnitNormalizer {
    constructor(inputUnit) {
        this.returnUnit = 1;
        this.inputUnit = inputUnit;
    }
    /* Calculates the real value depending on the input*/
    getReturnUnit() {
        /*
            Split to input value by "/", but first replace the "," with "." to check it's validity later
        */
        const fraction = this.inputUnit.replace(",", ".").split("/");
        /*
            Checks if it is a fraction
        */
        if (fraction.length === 2) {
            return this.returnUnit = Number(fraction[0]) / Number(fraction[1]);
            /*
                As it's not a fraction, checks if it contains more then one "/"
                and the validation of the given number
            */
        }
        else if (fraction.length > 2 || Number.isNaN(Number(this.inputUnit))) {
            throw new Error("invalid unit");
            /*
                Everything's fine, return the valid given value
            */
        }
        else {
            return this.returnUnit = Number(this.inputUnit);
        }
    }
}
exports.UnitNormalizer = UnitNormalizer;
//# sourceMappingURL=unitnormalizer.js.map