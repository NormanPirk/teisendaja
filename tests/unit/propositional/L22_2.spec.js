import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L22_2 tests", () => {
  test("returns contradiction of 0 and G", () => {
    const input = "0";
    const newFormula = "G";
    let result = convert(input, "L22_2");
    result = handleNewFormula("L22_2", newFormula, result);
    expect(result).toBe("G∧¬G");
  });

  test("returns null with 1", () => {
    const input = "1";
    expect(convert(input, "L22_2")).toBe(null);
  });
});
