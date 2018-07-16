"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const conversionhandler_1 = require("../libs/conversionhandler");
describe("ConversionHandler", () => {
    describe("ConversionHandler('2gal') conversion check", () => {
        it("should return 7.57082", () => {
            const converter = new conversionhandler_1.ConversionHandler("2gal");
            chai_1.assert.equal(converter.result.returnNum, 7.57082, "Converted number failed");
        });
    });
    describe("ConversionHandler('2ga') conversion check", () => {
        it("should throw error on invalid unit", () => {
            chai_1.assert.throws(() => {
                return new conversionhandler_1.ConversionHandler("2ga");
            }, "invalid unit");
        });
    });
    describe("ConversionHandler('-2ga') conversion check", () => {
        it("should throw error on invalid number and unit", () => {
            chai_1.assert.throws(() => {
                return new conversionhandler_1.ConversionHandler("-2ga");
            }, "invalid unit");
        });
    });
    describe("ConversionHandler('gal') conversion check without initNumber", () => {
        it("should return 3.78541", () => {
            const converter = new conversionhandler_1.ConversionHandler("gal");
            chai_1.assert.equal(converter.result.returnNum, 3.78541, "Can't properly handle without initNumber");
        });
    });
});
//# sourceMappingURL=ConversionHandlerUnitTests.js.map