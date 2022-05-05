import conversionAllowed from "@/js/ConversionValidator.js";
import matchInput from "@/js/InputMatcher.js";

describe("Tests regarding allowing conversions", () => {
  test("allows conversion L18_1", () => {
    const formula = "A∧(B∧C)∧D";
    const subFormula = "(B∧C)";
    const origStart = 2;
    const origEnd = 7;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "A∧¬(∀xB(x))∧D";
    const subFormula = "(∀xB(x))";
    const origStart = 3;
    const origEnd = 11;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "A∨(B∧C)";
    const subFormula = "(B∧C)";
    const origStart = 2;
    const origEnd = 7;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "(B∨C)⇒A";
    const subFormula = "(B∨C)";
    const origStart = 0;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "A∧¬(B∧C)∧D";
    const subFormula = "(B∧C)";
    const origStart = 3;
    const origEnd = 8;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "(B⇒C)∨D";
    const subFormula = "(B⇒C)";
    const origStart = 0;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "A∧(B⇒C)∧D";
    const subFormula = "(B⇒C)";
    const origStart = 2;
    const origEnd = 7;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "(B⇔C)⇒D";
    const subFormula = "(B⇔C)";
    const origStart = 0;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "∀x(F(x)⇔G(y))";
    const subFormula = "(F(x)⇔G(y))";
    const origStart = 2;
    const origEnd = 13;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("does not allow conversion L18_1", () => {
    const formula = "∃x(F(x)∨G(y))";
    const subFormula = "(F(x)∨G(y))";
    const origStart = 2;
    const origEnd = 13;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeFalsy();
  });

  test("allows conversion L18_1", () => {
    const formula = "∃x(F(x))";
    const subFormula = "(F(x))";
    const origStart = 2;
    const origEnd = 8;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "(∃x(F(x)))";
    const subFormula = "(∃x(F(x)))";
    const origStart = 0;
    const origEnd = 10;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "(0)";
    const subFormula = "(0)";
    const origStart = 0;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L18_1", () => {
    const formula = "((A∨B))";
    const subFormula = "(A∨B)";
    const origStart = 1;
    const origEnd = 6;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L18_1")).toBeTruthy();
  });

  test("allows conversion L24_2", () => {
    const formula = "A∧1";
    const subFormula = "1";
    const origStart = 2;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L24_2")).toBeTruthy();
  });

  test("allows conversion L24_2", () => {
    const formula = "1";
    const subFormula = "1";
    const origStart = 0;
    const origEnd = 1;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L24_2")).toBeTruthy();
  });

  test("allows conversion L25_2", () => {
    const formula = "0";
    const subFormula = "0";
    const origStart = 0;
    const origEnd = 1;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L25_2")).toBeTruthy();
  });

  test("allows conversion L25_2", () => {
    const formula = "0⇔F";
    const subFormula = "0";
    const origStart = 0;
    const origEnd = 1;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L25_2")).toBeTruthy();
  });

  test("allows conversion L19", () => {
    const formula = "0⇔F";
    const subFormula = "0⇔F";
    const origStart = 0;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(conversionAllowed(matchingChild, "L19")).toBeTruthy();
  });
});
