
/*
    Prepare user given number to be able handle properly later
 */
export class NumberNormalizer {
    /*
        Calculates the real value depending on the input
    */
    public static normalize(inputUnit: any = 1) {
        /*
            Convert input to string to handle replace function properly,
            replace the "," with "." to check it's validity later
        */
        const stringInputUnit = String(inputUnit || 1).replace(",", ".");
        /*
            Split to input value by "/"
        */
        const fraction = stringInputUnit.split("/");
        /*
            Checks if it is a fraction
        */
        if (fraction.length === 2) {
            return Number(fraction[0]) / Number(fraction[1]);
        /*
            As it's not a fraction, checks if it contains more then one "/"
            and the number validation of the given number
            and the quantity validaton of the given number
        */
        } else if (fraction.length > 2 || Number.isNaN(Number(stringInputUnit))) {
            throw new Error("invalid number");
        /*
            Everything's fine, return the valid given value
        */
        } else {
            return Number(stringInputUnit);
        }
    }
}
