"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const lengthconverter_1 = require("../libs/converter/lengthconverter");
describe("LengthConverter", () => {
    describe("LengthConverter(2, 'mi') converts miles to kilometers as number", () => {
        it("should return 3.219", () => {
            const converter = new lengthconverter_1.LengthConverter(2, "mi");
            const result = converter.getConvertResult();
            chai_1.assert.equal(result.convertedQuantity, 3.219, "Fails at conversion math");
        });
    });
    describe("LengthConverter(2, 'mi') converts miles to kilometers as string", () => {
        it("should return '2 mi converts to 3.219 km'", () => {
            const converter = new lengthconverter_1.LengthConverter(2, "mi");
            const result = converter.getConvertResult();
            chai_1.assert.equal(result.resultString, "2 mi converts to 3.219 km", "Fails at conversion string");
        });
    });
    describe("LengthConverter(2, 'km') converted kilometers to miles", () => {
        it("should return 1.243", () => {
            const converter = new lengthconverter_1.LengthConverter(2, "km");
            const result = converter.getConvertResult();
            chai_1.assert.equal(result.convertedQuantity, 1.243, "Fails at conversion math");
        });
    });
    describe("LengthConverter(2, 'km') converted kilometers to miles as string", () => {
        it("should return '2 km converts to 1.243 mi'", () => {
            const converter = new lengthconverter_1.LengthConverter(2, "km");
            const result = converter.getConvertResult();
            chai_1.assert.equal(result.resultString, "2 km converts to 1.243 mi", "Fails at conversion string");
        });
    });
    describe("LengthConverter(2, 'km') converted quantity", () => {
        it("should return 3.219", () => {
            const converter = new lengthconverter_1.LengthConverter(2, "mi");
            const result = converter.getConvertResult();
            chai_1.assert.equal(result.convertedQuantity, 3.219, "Fails at conversion math");
        });
    });
    describe("LengthConverter(2, 'mx')", () => {
        it(" should throw an error", () => {
            chai_1.assert.throws(() => {
                new lengthconverter_1.LengthConverter(2, "mx");
            }, "Invalid given unit");
        });
    });
    describe("LengthConverter(-3, 'mx')", () => {
        it(" should throw an error", () => {
            chai_1.assert.throws(() => {
                new lengthconverter_1.LengthConverter(-3, "mx");
            }, "Invalid given quantity");
        });
    });
});
describe("CubicConverter", () => {
    describe("CubicConverter(1, 'gal')", () => {
        it("should return 3.78541 L", () => {
        });
    });
});
//# sourceMappingURL=serverTest.js.map