const testFunction = require("./function");

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("2 + 3 = 5", () => {
  expect(testFunction.add(2, 3)).toBe(5);
});

test("3 + 3 != 5", () => {
  expect(testFunction.add(3, 3)).not.toBe(5);
});
