import matchInput from "@/js/InputMatcher.js";

describe("Tests regarding input matching", () => {
  
  test("does not match input from incorrect subformula", () => {
    const formula = "A∧(B∧C)∧D"
    const subFormula = "B∧C)";
    const origStart = 3;
    const origEnd = 7;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(matchingChild).toBeFalsy();
  });

  test("does not match input from subformula that is not in the tree", () => {
    const formula = "A∧B⇒C∧D"
    const subFormula = "B⇒C";
    const origStart = 2;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(matchingChild).toBeFalsy();
  });

  test("matches correct input if the same subformula exists more than once in the tree", () => {
    const formula = "A∧B⇒A∧B"
    const subFormula = "A∧B";
    const origStart = 4;
    const origEnd = 7;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    expect(matchingChild).toBeTruthy();
  });

});