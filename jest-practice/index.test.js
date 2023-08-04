const index = require("./index");

// CAPITALIZE STRING
it("capitalize first character of string", () => {
  expect(index.capitalize("terrible day for rain")).toBe(
    "Terrible day for rain"
  );
});

// REVERSE STRING
it("reverse string", () => {
  expect(index.reverseString("terrible day for rain")).toBe(
    "niar rof yad elbirret"
  );
});

// CALCULATOR
it("calculator - add", () => {
  expect(index.calculator(1, 2).add()).toBe(3);
});

it("calculator - add number strings", () => {
  expect(index.calculator("1", "2").add()).toBe(3);
});

it("calculator - subtract", () => {
  expect(index.calculator(1, 2).subtract()).toBe(-1);
});

it("calculator - divide", () => {
  expect(index.calculator(1, 2).divide()).toBe(0.5);
});

it("calculator - multiply", () => {
  expect(index.calculator(1, 2).multiply()).toBe(2);
});

// CAESAR SHIFT
it("shift each character of string", () => {
  expect(index.caesarCipher("hi there", 4)).toBe("lm xlivi");
});

it("caesar shift - do not shift punctuation", () => {
  expect(index.caesarCipher("hi! how are you?", 2)).toBe("jk! jqy ctg aqw?");
});

it("caesar shift - keep case after shift", () => {
  expect(index.caesarCipher("Hi David!", 3)).toBe("Kl Gdylg!");
});

// ANALYSE ARRAY
it("analyze array", () => {
  expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("analyze array 2", () => {
  expect(index.analyzeArray([-8, 6, 2, 21])).toEqual({
    average: 5.25,
    min: -8,
    max: 21,
    length: 4,
  });
});
