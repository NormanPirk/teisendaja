import convert from "@/js/Converter.js";

describe("L25_2 tests", () => {
  test("Converts 0 to ¬1", () => {
    const input = "0";
    expect(convert(input, "L25_2")).toBe("¬1");
  });

  test("Returns null if input is A", () => {
    const input = "A";
    expect(convert(input, "L25_2")).toBe(null);
  });
});
