import { assert } from "chai";
import "mocha";
import { CubicConverter } from "../libs/converter/cubicconverter";


describe("CubicConverter", () => {
    describe("CubicConverter(2, 'gal') converts gals to liters as number", () => {
        it("should return 7.57082", () => {
            const converter = new CubicConverter(2, "gal");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 7.57082, "Fails at conversion math");
        });
    });

    describe("CubicConverter(2, 'gal') converts gals to liters as string", () => {
        it("should return '2 gal converts to 7.57082 l'", () => {
            const converter = new CubicConverter(2, "gal");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 gal converts to 7.57082 l", "Fails at conversion string");
        });
    });

    describe("CubicConverter(2, 'l') converted liters to gals", () => {
        it("should return 0.52834", () => {
            const converter = new CubicConverter(2, "l");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 0.52834, "Fails at conversion math");
        });
    });

    describe("CubicConverter(2, 'l') converted liters to gals as string", () => {
        it("should return '2 l converts to 0.52834 gals'", () => {
            const converter = new CubicConverter(2, "l");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 l converts to 0.52834 gal", "Fails at conversion string");
        });
    });

    describe("CubicConverter(2, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new CubicConverter(2, "error");
            }, "invalid unit");
        });
    });

    describe("CubicConverter(-3, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new CubicConverter(-3, "error");
            }, "invalid unit");
        });
    });

});
