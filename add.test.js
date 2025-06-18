const { add } = require("./add");

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("1 + 2 = 4", () => {
  expect(add(1, 2)).toBe(4);
});

test("1 + 7 != 7", () => {
  expect(add(1, 7)).not.toBe(7);
});
