import convert from "@/js/Converter.js";

describe("L21_1 tests", () => {
  test("returns 1 with tautology G∨¬G", () => {
    const input = "G∨¬G";
    expect(convert(input, "L21_1")).toBe("1");
  });

  test("considers commutation rule with ¬G∨G", () => {
    const input = "¬G∨G";
    expect(convert(input, "L21_1")).toBe("1");
  });

  test("returns null with ¬G∧G", () => {
    const input = "¬G∧G";
    expect(convert(input, "L21_1")).toBe(null);
  });

  test("returns null with ¬F∨G", () => {
    const input = "¬F∨G";
    expect(convert(input, "L21_1")).toBe(null);
  });
});
