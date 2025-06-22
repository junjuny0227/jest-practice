import checkIsPassedDate from "@/utils/checkIsPassedDate";

describe("checkIsPassedDate", () => {
  test("과거 날짜는 true를 반환해야 함", () => {
    const pastDate = new Date("2024-01-01");
    expect(checkIsPassedDate(pastDate)).toBe(true);
  });

  test("미래 날짜는 false를 반환해야 함", () => {
    const futureDate = new Date("2030-12-31");
    expect(checkIsPassedDate(futureDate)).toBe(false);
  });

  test("현재 날짜는 true를 반환해야 함", () => {
    const now = new Date();
    expect(checkIsPassedDate(now)).toBe(true);
  });
});
