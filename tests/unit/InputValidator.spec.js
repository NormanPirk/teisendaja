import validateInput from "../../src/js/InputValidator";

describe("Input validation tests", () => {
  test("recognises A", () => {
    const input = "A";
    expect(validateInput(input)).toBeTruthy();
  });

  test("does not recognise A x", () => {
    const input = "A x";
    expect(validateInput(input)).toBeFalsy();
  });

  test("recognises conjuction", () => {
    const input = "A∧B";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises disjuction", () => {
    const input = "A∨B";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises implication", () => {
    const input = "A⇒B";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises equivalence", () => {
    const input = "A⇔B";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises predicate", () => {
    const input = "F(x,y,z)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises predicate preceded by ∀", () => {
    const input = "∀xF(x,y,z)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises predicate preceded by ∃", () => {
    const input = "∃xF(x,y,z)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises conjuction with left and right operand being predicates with quantifiers", () => {
    const input = "∃xF(x,y,z)∧∀yG(y,t)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises disjunction with left and right operand being predicates with quantifiers", () => {
    const input = "∃xF(x,y,z)∨∀yG(y,t)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises implication with left and right operand being predicates with quantifiers", () => {
    const input = "∃xF(x,y,z)⇒∀yG(y,t)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises equivalence with left and right operand being predicates with quantifiers", () => {
    const input = "∃xF(x,y,z)⇔∀yG(y,t)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises nested quantifiers", () => {
    const input = "∃x(F(x)∨∀yG(y))";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises negation after quantifier ∃", () => {
    const input = "∃x¬F(x)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises negation after quantifier ∀", () => {
    const input = "∀x¬F(x)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises predicate containing the term f(x)", () => {
    const input = "F(y,z,f(x))";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises truth value 1", () => {
    const input = "1";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises truth value 0", () => {
    const input = "0";
    expect(validateInput(input)).toBeTruthy();
  });

  test("recognises negation", () => {
    const input = "¬F(x)";
    expect(validateInput(input)).toBeTruthy();
  });

  test("does not recognise formula with missing closing parentheses", () => {
    const input = "F(x)∨(G(x)⇒C(x)";
    expect(validateInput(input)).toBeFalsy();
  });

  test("does not recognise formula with missing opening parentheses", () => {
    const input = "F(x)∨G(x)⇒C(x))";
    expect(validateInput(input)).toBeFalsy();
  });

  test("does not recognise negation symbol before binary operation symbol", () => {
    const input = "¬F¬∧G";
    expect(validateInput(input)).toBeFalsy();
  });

  test("recognises negation symbol after binary operation symbol", () => {
    const input = "¬F∧¬G";
    expect(validateInput(input)).toBeTruthy();
  });
});
