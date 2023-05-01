const { expect } = require("chai");
const { add, multiply } = require("../utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Adds 2 of the same number", () => {
      const result = add(1, 1);
      expect(result).to.equal(2);
    });

    it("Adds 2 different numbers", () => {
      const result = add(1, 2);
      expect(result).to.equal(3);
    });

    it("Adds a positive and a negative number", () => {
      const result = add(1, -1);
      expect(result).to.equal(0);
    });

    it("Adds 2 negative numbers", () => {
      const result = add(-1, -1);
      expect(result).to.equal(-2);
    });
  });

  describe("Multiply", () => {
    it("Multiplies 2 of the same positive number", () => {
      expect(multiply(2, 2)).to.equal(4);
    });
    it("Multiplies 2 different positive numbers", () => {
      expect(multiply(2, 1)).to.equal(2);
    });
    it("Multiplies 2 of the same negative number", () => {
      expect(multiply(-2, -2)).to.equal(4);
    });
    it("Multiplies 2 different negative numbers", () => {
      expect(multiply(-2, -3)).to.equal(6);
    });
    it("Multiplies one positive number with one negative number", () => {
      expect(multiply(-4, 5)).to.equal(-20);
    });
  });
});
