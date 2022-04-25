import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L6_2 tests", () => {
  test("creates disjunction of F and G", () => {
    const input = "F";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("F∨F∧G");
  });

  test("creates disjunction of ¬F and G", () => {
    const input = "¬F";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("¬F∨¬F∧G");
  });

  test("creates disjunction of F∧H and G", () => {
    const input = "F∧H";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("F∧H∨F∧H∧G");
  });

  test("creates disjunction of F∨H and G", () => {
    const input = "F∨H";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("F∨H∨(F∨H)∧G");
  });

  test("creates disjunction of ∀xF(x)⇒H and G", () => {
    const input = "∀xF(x)⇒H";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("(∀xF(x)⇒H)∨(∀xF(x)⇒H)∧G");
  });

  test("creates disjunction of ∃xF(x)⇔H and G", () => {
    const input = "∃xF(x)⇔H";
    const newFormula = "G";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("(∃xF(x)⇔H)∨(∃xF(x)⇔H)∧G");
  });

  test("creates disjunction of G and H⇔∃xF(x)", () => {
    const input = "G";
    const newFormula = "H⇔∃xF(x)";
    let result = convert(input, "L6_2");
    result = handleNewFormula("L6_2", newFormula, result);
    expect(result).toBe("G∨G∧(H⇔∃xF(x))");
  });
});
