import addParentheses, { addParensMiddle } from "@/js/Parentheses.js";
import matchInput from "@/js/InputMatcher.js";

describe("Tests regarding adding parentheses", () => {
  
  test("adds parentheses to the middle of several consecutive associative operations", () => {
    const formula = "A∨B∨C∨D"
    const subFormula = "B∨C";
    const origStart = 2;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "¬B⇒C"
    expect(addParensMiddle(matchingChild, result)).toBe("(¬B⇒C)");
  });

  test("does not add parentheses to the middle of several consecutive wquivalences", () => {
    const formula = "A⇔B⇔C⇔D"
    const subFormula = "B⇔C";
    const origStart = 2;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "B∧C∨¬B∧¬C"
    expect(addParensMiddle(matchingChild, result)).toBe("B∧C∨¬B∧¬C");
  });

  test("add parentheses when parent operation will be negation", () => {
    const formula = "¬A";
    const subFormula = "A";
    const origStart = 1;
    const origEnd = 2;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "A∧A"
    expect(addParentheses(matchingChild, result)).toBe("(A∧A)");
  });

  test("add parentheses when parent operation will be disjunction", () => {
    const formula = "A∨B(x)∨C";
    const subFormula = "B(x)∨C";
    const origStart = 2;
    const origEnd = 8;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "¬B(x)⇒C"
    expect(addParentheses(matchingChild, result)).toBe("(¬B(x)⇒C)");
  });

  test("add parentheses when parent operation will be implication", () => {
    const formula = "A⇒B∧C∨¬B∧¬C";
    const subFormula = "B∧C∨¬B∧¬C";
    const origStart = 2;
    const origEnd = 11;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "B⇔C"
    expect(addParentheses(matchingChild, result)).toBe("(B⇔C)");
  });

  test("add parentheses when parent operation will be a quantifier", () => {
    const formula = "∀xF(x)";
    const subFormula = "F(x)";
    const origStart = 2;
    const origEnd = 6;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "F(x)∨F(x)"
    expect(addParentheses(matchingChild, result)).toBe("(F(x)∨F(x))");
  });

  test("add parentheses when parent operation will be a quantifier", () => {
    const formula = "∃xF(x)";
    const subFormula = "F(x)";
    const origStart = 2;
    const origEnd = 6;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "F(x)∨F(x)"
    expect(addParentheses(matchingChild, result)).toBe("(F(x)∨F(x))");
  });

  test("add parentheses when parent operation will be a quantifier", () => {
    const formula = "∃xF(x)";
    const subFormula = "F(x)";
    const origStart = 2;
    const origEnd = 6;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "¬¬F(x)"
    expect(addParentheses(matchingChild, result)).toBe("¬¬F(x)");
  });

  test("does not add parentheses if parentheses are already around the formula", () => {
    const formula = "∃x(F(x)∨G(x))";
    const subFormula = "F(x)∨G(x)";
    const origStart = 3;
    const origEnd = 12;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "G(x)∨F(x)"
    expect(addParentheses(matchingChild, result)).toBe("G(x)∨F(x)");
  });

  test("does not add parentheses to entire formula", () => {
    const formula = "(A)";
    const subFormula = "(A)";
    const origStart = 0;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const result = "(A)"
    expect(addParentheses(matchingChild, result)).toBe("(A)");
  });

});