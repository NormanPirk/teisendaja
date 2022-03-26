import convert from "@/js/Converter.js";

describe("L26_2 tests", () => {
  test("Converts 1 to ¬0", () => {
    const input = "1";
    expect(convert(input, "L26_2")).toBe("¬0");
  });

  test("Returns null if input is A", () => {
    const input = "A";
    expect(convert(input, "L26_2")).toBe(null);
  });
});
