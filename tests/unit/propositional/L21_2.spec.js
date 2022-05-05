import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L21_2 tests", () => {
  test("returns tautology of 1 and G", () => {
    const input = "1";
    const newFormula = "G";
    let result = convert(input, "L21_2");
    expect(result).toBe("");
    result = handleNewFormula("L21_2", newFormula, result);
    expect(result).toBe("G∨¬G");
  });

  test("returns null with 0", () => {
    const input = "0";
    expect(convert(input, "L21_2")).toBe(null);
  });
});
