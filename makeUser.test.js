const { makeUser } = require("./makeUser");

test("이름과 나이를 받아서 객체를 반환한다.", () => {
  expect(makeUser("juny", 18)).toEqual({
    name: "juny",
    age: 18,
  });
});
