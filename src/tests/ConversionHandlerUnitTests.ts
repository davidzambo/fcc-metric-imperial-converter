import { assert } from "chai";
import "mocha";
import { ConversionHandler } from "../libs/conversionhandler";

describe("ConversionHandler", () => {
    describe("ConversionHandler('2gal') conversion check", () => {
        it("should return 7.57082", () => {
            const converter = new ConversionHandler("2gal");
            assert.equal(converter.result.returnNum, 7.57082, "Converted number failed");
        });
    });

    describe("ConversionHandler('2ga') conversion check", () => {
        it("should throw error on invalid unit", () => {
            assert.throws(() => {
                return new ConversionHandler("2ga");
            }, "invalid unit");
        });
    });

    describe("ConversionHandler('-2ga') conversion check", () => {
        it("should throw error on invalid number and unit", () => {
            assert.throws(() => {
                return new ConversionHandler("-2ga");
            }, "invalid number and unit");
        });
    });

    describe("ConversionHandler('gal') conversion check without initNumber", () => {
        it("should return 3.78541", () => {
            const converter = new ConversionHandler("gal");
            assert.equal(converter.result.returnNum, 3.78541, "Can't properly handle without initNumber");
        });
    });

});
