const index = require("./index");

it("capitalize first character of string", () => {
  expect(index.capitalize("terrible day for rain")).toBe(
    "Terrible day for rain"
  );
});

it("reverse string", () => {
  expect(index.reverseString("terrible day for rain")).toBe(
    "niar rof yad elbirret"
  );
});

it("calculator - add", () => {
  expect(index.calculator.add(1, 2)).toBe(3);
});

it("shift each character of string", () => {
  expect(index.caesarCipher("hi there", 4)).toBe("lm xlivi");
});

it("caesar shift - do not shift punctuation", () => {
  expect(index.caesarCipher("hi! how are you?", 2)).toBe("jk! jqy ctg aqw?");
});

it("caesar shift - keep case after shift", () => {
  expect(index.caesarCipher("Hi David!", 3)).toBe("Kl Gdylg!");
});

it("caesar shift - do not shift punctuation", () => {
  expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
