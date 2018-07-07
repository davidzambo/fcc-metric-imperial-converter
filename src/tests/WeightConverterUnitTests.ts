import { assert } from "chai";
import "mocha";
import { WeightConverter } from "../libs/converter/weightconverter";


describe("WeightConverter", () => {
    describe("WeightConverter(2, 'lbs') converts lbs to kilograms as number", () => {
        it("should return 0.90718", () => {
            const converter = new WeightConverter(2, "lbs");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 0.90718, "Fails at conversion math");
        });
    });

    describe("WeightConverter(2, 'lbs') converts lbs to kilograms as string", () => {
        it("should return '2 lbs converts to 0.90718 kg'", () => {
            const converter = new WeightConverter(2, "lbs");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 lbs converts to 0.90718 kg", "Fails at conversion string");
        });
    });

    describe("WeightConverter(2, 'kg') converted kilograms to lbs", () => {
        it("should return 4.40925", () => {
            const converter = new WeightConverter(2, "kg");
            const result = converter.getConvertResult();
            assert.equal(result.returnNum, 4.40925, "Fails at conversion math");
        });
    });

    describe("WeightConverter(2, 'kg') converted kilograms to lbs as string", () => {
        it("should return '2 kg converts to 4.40925 lbs'", () => {
            const converter = new WeightConverter(2, "kg");
            const result = converter.getConvertResult();
            assert.equal(result.string, "2 kg converts to 4.40925 lbs", "Fails at conversion string");
        });
    });

    describe("WeightConverter(2, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new WeightConverter(2, "any");
            }, "invalid unit");
        });
    });

    describe("WeightConverter(-3, 'kg')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new WeightConverter(-3, "any");
            }, "invalid number");
        });
    });

    describe("WeightConverter(-3, 'error')", () => {
        it(" should throw an error", () => {
            assert.throws(() => {
                return new WeightConverter(-3, "any");
            }, "invalid number and unit");
        });
    });
});
