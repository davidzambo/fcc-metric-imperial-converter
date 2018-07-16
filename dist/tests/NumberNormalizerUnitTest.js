"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const numbernormalizer_1 = require("../libs/numbernormalizer");
describe("NumberNormalizer", () => {
    describe("Simple Integer", () => {
        it("should return 1", () => {
            const result = numbernormalizer_1.NumberNormalizer.normalize(1);
            chai_1.assert.equal(result, 1, "'1' !== 1");
        });
    });
    describe("NumberNormalizer.normalize('1/2')", () => {
        it("should return 0.5", () => {
            const result = numbernormalizer_1.NumberNormalizer.normalize("1/2");
            chai_1.assert.equal(result, 0.5, "Fraction handling failed");
        });
    });
    describe("NumberNormalizer.normalize('1/2/3')", () => {
        it("should return invalid number", () => {
            chai_1.assert.throws(() => {
                return numbernormalizer_1.NumberNormalizer.normalize("1/2/3");
            }, "invalid number");
        });
    });
    describe("NumberNormalizer.normalize('1,2')", () => {
        it("should return 1.2", () => {
            const result = numbernormalizer_1.NumberNormalizer.normalize("1,2");
            chai_1.assert.equal(result, 1.2, "Replace ',' handling failed");
        });
    });
    describe("NumberNormalizer.normalize('1.2')", () => {
        it("should return 1.2", () => {
            const result = numbernormalizer_1.NumberNormalizer.normalize("1.2");
            chai_1.assert.equal(result, 1.2, "Normalizing failed");
        });
    });
    describe("NumberNormalizer.normalize()", () => {
        it("should return 1", () => {
            const result = numbernormalizer_1.NumberNormalizer.normalize();
            chai_1.assert.equal(result, 1, "Function call without parameter failse");
        });
    });
});
//# sourceMappingURL=NumberNormalizerUnitTest.js.map