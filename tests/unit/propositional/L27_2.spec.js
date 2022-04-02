import convert from "@/js/Converter.js";

describe("L27_2 tests", () => {
  test("Converts 0 to ¬1", () => {
    const input = "0";
    expect(convert(input, "L27_2")).toBe("¬1");
  });

  test("Returns null if input is not 0", () => {
    const input = "¬1";
    expect(convert(input, "L27_2")).toBe(null);
  });
});
