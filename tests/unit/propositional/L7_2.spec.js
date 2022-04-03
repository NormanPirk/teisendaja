import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L7_2 tests", () => {
  test("creates conjunction of F and G", () => {
    const input = "F";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("F∧(F∨G)");
  });

  test("creates conjunction of ¬F and G", () => {
    const input = "¬F";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("¬F∧(¬F∨G)");
  });

  test("creates conjunction of F∧H and G", () => {
    const input = "F∧H";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("F∧H∧(F∧H∨G)");
  });

  test("creates conjunction of F∨H and G", () => {
    const input = "F∨H";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("(F∨H)∧(F∨H∨G)");
  });

  test("creates conjunction of ∀xF(x)⇒H and G", () => {
    const input = "∀xF(x)⇒H";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("(∀xF(x)⇒H)∧((∀xF(x)⇒H)∨G)");
  });

  test("creates conjunction of ∃xF(x)⇔H and G", () => {
    const input = "∃xF(x)⇔H";
    const newFormula = "G";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("(∃xF(x)⇔H)∧((∃xF(x)⇔H)∨G)");
  });

  test("creates conjunction of G and ∃xF(x)⇔H", () => {
    const input = "G";
    const newFormula = "∃xF(x)⇔H";
    let result = convert(input, "L7_2");
    result = handleNewFormula("L7_2", newFormula, result);
    expect(result).toBe("G∧(G∨(∃xF(x)⇔H))");
  });
});
