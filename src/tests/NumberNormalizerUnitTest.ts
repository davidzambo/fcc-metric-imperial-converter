import { assert } from "chai";
import "mocha";
import { NumberNormalizer } from "../libs/numbernormalizer";

describe("NumberNormalizer", () => {
    describe("Simple Integer", () => {
       it("should return 1", () => {
            const result = NumberNormalizer.normalize(1);
            assert.equal(result, 1, "'1' !== 1");
       });
    });

    describe("NumberNormalizer.normalize('1/2')", () => {
        it("should return 0.5", () => {
            const result = NumberNormalizer.normalize("1/2");
            assert.equal(result, 0.5, "Fraction handling failed");
        });
    });

    describe("NumberNormalizer.normalize('1/2/3')", () => {
        it("should return invalid number", () => {
            assert.throws(() => {
                return NumberNormalizer.normalize("1/2/3");
            }, "invalid number");
        });
    });

    describe("NumberNormalizer.normalize('1,2')", () => {
        it("should return 1.2", () => {
            const result = NumberNormalizer.normalize("1,2");
            assert.equal(result, 1.2, "Replace ',' handling failed");
        });
    });

    describe("NumberNormalizer.normalize('1.2')", () => {
        it("should return 1.2", () => {
            const result = NumberNormalizer.normalize("1.2");
            assert.equal(result, 1.2, "Normalizing failed");
        });
    });

    describe("NumberNormalizer.normalize()", () => {
        it("should return 1", () => {
            const result = NumberNormalizer.normalize();
            assert.equal(result, 1, "Function call without parameter failse");
        });
    });

});
