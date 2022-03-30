import convert from "@/js/Converter.js";

describe("L26_1 tests", () => {
  test("Converts ¬0 to 1", () => {
    const input = "¬0";
    expect(convert(input, "L26_1")).toBe("1");
  });

  test("Returns null if input is not ¬0", () => {
    const input = "1";
    expect(convert(input, "L26_1")).toBe(null);
  });
});
