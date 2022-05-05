import convert from "@/js/Converter.js";

describe("L22_1 tests", () => {
  test("returns 0 with contradiction G∧¬G", () => {
    const input = "G∧¬G";
    expect(convert(input, "L22_1")).toBe("0");
  });

  test("considers commutation rule with ¬G∧G", () => {
    const input = "¬G∧G";
    expect(convert(input, "L22_1")).toBe("0");
  });

  test("returns null with ¬G∨G", () => {
    const input = "¬G∨G";
    expect(convert(input, "L22_1")).toBe(null);
  });

  test("returns null with ¬F∧G", () => {
    const input = "¬F∧G";
    expect(convert(input, "L22_1")).toBe(null);
  });
});
