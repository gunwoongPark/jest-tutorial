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

test("2 + 3 = 5", () => {
  expect(testFunction.add(2, 3)).toEqual(5);
});

test("이름과 나이를 받아 객체를 반환", () => {
  expect(testFunction.makeUser("woong", 26)).toEqual({
    name: "woong",
    age: 26,
  });
});

test("이름과 나이를 받아 객체를 반환", () => {
  expect(testFunction.makeUser("woong", 26)).toStrictEqual({
    name: "woong",
    age: 26,
  });
});

test("null is null", () => {
  expect(null).toBeNull();
});

test("0 is falsy", () => {
  expect(testFunction.add(1, -1)).toBeFalsy();
});

test("string is truthy", () => {
  expect("Hello World").toBeTruthy();
});

test("ID는 10자 이하여야 합니다.", () => {
  const id = "123456789";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("0.1 + 0.2 = 0.3", () => {
  expect(testFunction.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("a in Hello World", () => {
  expect("Hello World").toMatch(/a/);
});

test("Mike in user list", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("에러 발생?", () => {
  expect(() => testFunction.throwError()).toThrow("ERROR");
});
