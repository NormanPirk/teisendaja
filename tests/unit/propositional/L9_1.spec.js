import convert from "@/js/Converter.js";

describe("L9_1 tests", () => {
  test("Converts ¬0 to 1", () => {
    const input = "¬0";
    expect(convert(input, "L9_1")).toBe("1");
  });

  test("Converts ¬1 to 0", () => {
    const input = "¬1";
    expect(convert(input, "L9_1")).toBe("0");
  });

  test("Returns null with 1", () => {
    const input = "1";
    expect(convert(input, "L9_1")).toBe(null);
  });

  test("Returns null with ¬F", () => {
    const input = "¬F";
    expect(convert(input, "L9_1")).toBe(null);
  });
});
