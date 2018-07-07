/*
    Prepare user given number to be able handle properly later
 */
export class NumberNormalizer {
    /* Calculates the real value depending on the input*/
    public static normalize(inputUnit: any) {
        /*
            Split to input value by "/", but first replace the "," with "." to check it's validity later
        */
        const fraction = inputUnit.replace(",", ".").split("/");
        /*
            Checks if it is a fraction
        */
        if (fraction.length === 2) {
            return Number(fraction[0]) / Number(fraction[1]);
        /*
            As it's not a fraction, checks if it contains more then one "/"
            and the validation of the given number
        */
        } else if (fraction.length > 2 || Number.isNaN(Number(inputUnit))) {
            throw new Error("invalid number");
        /*
            Everything's fine, return the valid given value
        */
        } else {
            return Number(inputUnit);
        }
    }
}
