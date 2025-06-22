import { minutesToMs } from "@/utils";

describe("minutesToMs", () => {
  test("분 -> 밀리초 변환(1분)", () => {
    expect(minutesToMs(1)).toBe(60000);
  });

  test("분 -> 밀리초 변환(0분)", () => {
    expect(minutesToMs(0)).toBe(0);
  });
});
