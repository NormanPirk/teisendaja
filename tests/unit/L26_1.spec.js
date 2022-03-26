import convert from "@/js/Converter.js";

describe("L26_1 tests", () => {
  test("Converts ¬0 to 1", () => {
    const input = "¬0";
    expect(convert(input, "L26_1")).toBe("1");
  });

  test("Returns null if input is A", () => {
    const input = "A";
    expect(convert(input, "L26_1")).toBe(null);
  });
});
