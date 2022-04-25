import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L20_2 tests", () => {
  test("creates disjunction with contradiction of F and G", () => {
    const input = "F";
    const newFormula = "G";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨G∧¬G");
  });

  test("creates disjunction with contradiction of F and ¬G", () => {
    const input = "F";
    const newFormula = "¬G";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨¬G∧¬¬G");
  });

  test("creates disjunction with contradiction of F and G∧H", () => {
    const input = "F";
    const newFormula = "G∧H";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨G∧H∧¬(G∧H)");
  });

  test("creates disjunction with contradiction of F and G∨H", () => {
    const input = "F";
    const newFormula = "G∨H";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨(G∨H)∧¬(G∨H)");
  });

  test("creates disjunction with contradiction of F and ∀xF(x)⇒H", () => {
    const input = "F";
    const newFormula = "∀xF(x)⇒H";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨(∀xF(x)⇒H)∧¬(∀xF(x)⇒H)");
  });

  test("creates disjunction with contradiction of F and ∃xF(x)⇔H", () => {
    const input = "F";
    const newFormula = "∃xF(x)⇔H";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe("F∨(∃xF(x)⇔H)∧¬(∃xF(x)⇔H)");
  });

  test("creates disjunction with contradiction of F and ∃xF(x)⇔∀yG(y)∧H(x,f(z))", () => {
    const input = "F";
    const newFormula = "∃xF(x)⇔∀yG(y)∧H(x,f(z))";
    let result = convert(input, "L20_2");
    result = handleNewFormula("L20_2", newFormula, result);
    expect(result).toBe(
      "F∨(∃xF(x)⇔∀yG(y)∧H(x,f(z)))∧¬(∃xF(x)⇔∀yG(y)∧H(x,f(z)))"
    );
  });
});
