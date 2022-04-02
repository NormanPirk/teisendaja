import convert from "@/js/Converter.js";

describe("L27_1 tests", () => {
  test("Converts ¬1 to 0", () => {
    const input = "¬1";
    expect(convert(input, "L27_1")).toBe("0");
  });

  test("Returns null if input is not ¬1", () => {
    const input = "A(x)";
    expect(convert(input, "L27_1")).toBe(null);
  });
});
