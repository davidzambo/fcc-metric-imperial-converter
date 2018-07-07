import { assert } from "chai";
import "mocha";
import { LengthConverter } from "../libs/converter/lengthconverter";


describe("LengthConverter", () => {
    describe("LengthConverter(2, 'mi') converts miles to kilometers as number", () => {
        it("should return 3.21869", () => {
            const converter = new LengthConverter(2, "mi");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 3.21869, "Fails at conversion math");
        });
    });

    describe("LengthConverter(2, 'mi') converts miles to kilometers as string", () => {
        it("should return '2 mi converts to 3.21869 km'", () => {
            const converter = new LengthConverter(2, "mi");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 mi converts to 3.21869 km", "Fails at conversion string");
        });
    });

    describe("LengthConverter(2, 'km') converted kilometers to miles", () => {
        it("should return 1.24274", () => {
            const converter = new LengthConverter(2, "km");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 1.24274, "Fails at conversion math");
        });
    });

    describe("LengthConverter(2, 'km') converted kilometers to miles as string", () => {
        it("should return '2 km converts to 1.24274 mi'", () => {
            const converter = new LengthConverter(2, "km");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 km converts to 1.24274 mi", "Fails at conversion string");
        });
    });

    describe("LengthConverter(2, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new LengthConverter(2, "mx");
            }, "invalid unit");
        });
    });

    describe("LengthConverter(-3, 'km')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new LengthConverter(-3, "mx");
            }, "invalid number");
        });
    });

    describe("LengthConverter(-3, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new LengthConverter(-3, "mx");
            }, "invalid number and unit");
        });
    });
});
