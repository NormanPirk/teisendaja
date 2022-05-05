import { getFreeVars } from "@/js/IndVariables";
import getParseTree from "@/ANTLR/leftAssocGrammar/ParseTree.js";

describe("Free variables tests", () => {
  test("Recognises a single free variable in a formula with the quantifier ∀", () => {
    const input = getParseTree("∀xF(x,y)");
    expect(getFreeVars(input)).toEqual(new Set("y"));
  });

  test("Recognises a single free variable in a formula with the quantifier ∃", () => {
    const input = getParseTree("∃xF(x,y)");
    expect(getFreeVars(input)).toEqual(new Set("y"));
  });

  test("Recognises several free variables in a formula with the quantifier ∀", () => {
    const input = getParseTree("∀xF(x,y,z,t)");
    const result = getFreeVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });

  test("Recognises several free variables in a formula with the quantifier ∃", () => {
    const input = getParseTree("∃xF(x,y,z,t)");
    const result = getFreeVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });

  test("Returns empty set when no free variables exist", () => {
    const input = getParseTree("∃x∃yF(x,y)");
    expect(getFreeVars(input)).toEqual(new Set());
  });

  test("Recognises all variables as free from a predicate without a quantifier", () => {
    const input = getParseTree("F(x,y,z)");
    const result = getFreeVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("x")).toBeTruthy();
  });

  test("Returns empty set when the same variable is used as the variable for nested quantifiers", () => {
    const input = getParseTree("∃x(F(x)∧∀xG(x))");
    expect(getFreeVars(input)).toEqual(new Set());
  });

  test("Recognises a free variable if it is out of bound of the quantifier", () => {
    const input = getParseTree("(∃xF(x))∧G(x)");
    expect(getFreeVars(input)).toEqual(new Set("x"));
  });

  test("Recognises several free variables in a formula containg a term in a form of a function", () => {
    const input = getParseTree("∀xF(x,f(y),z,t)");
    const result = getFreeVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });

  test("Recognises a free variable after a negation", () => {
    const input = getParseTree("¬F(x)");
    expect(getFreeVars(input)).toEqual(new Set("x"));
  });

  test("Recognises free variables from an implication", () => {
    const input = getParseTree("¬F(x)⇒H(y)");
    const result = getFreeVars(input);
    expect(result.has("x")).toBeTruthy();
    expect(result.has("y")).toBeTruthy();
  });

  test("Recognises free variables from a disjunction", () => {
    const input = getParseTree("R(t)∨U(u)");
    const result = getFreeVars(input);
    expect(result.has("t")).toBeTruthy();
    expect(result.has("u")).toBeTruthy();
  });

  test("Recognises no free variables from a truth value 1", () => {
    const input = getParseTree("1");
    expect(getFreeVars(input)).toEqual(new Set());
  });

  test("Recognises no free variables from a truth value 0", () => {
    const input = getParseTree("0");
    expect(getFreeVars(input)).toEqual(new Set());
  });
});
