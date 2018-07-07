export interface ConverterInterface {
    baseUnit: string;
    changeUnit: string;
    returnNum: number;
    returnUnit: string;
    initUnit: string;
    initQuantity: number;
    convertRatio: number;
    string: string;
    setConvertResult() : any;
    getConvertResult() : any;
    checkInputs() : any;
    initConverter(baseUnit: string, changeUnit: string, convertRatio: number) : void;
}
