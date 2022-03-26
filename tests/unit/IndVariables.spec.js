import getNewVariable, { getFreeIndVars } from "@/js/IndVariables";
import getParseTree from "@/ANTLR/leftAssocGrammar/ParseTree.js";

describe("New variables tests", () => {
  test("Gets new variable for a formula with the quantifier ∀", () => {
    const input = "∀xF(x)";
    expect(getNewVariable(input)).toBe("y");
  });

  test("Gets new variable for a formula with the quantifier ∃", () => {
    const input = "∃xF(x)";
    expect(getNewVariable(input)).toBe("y");
  });

  test("Gets new variable for a formula with both quantifiers with ∀ first", () => {
    const input = "∀x∃yF(x,y)";
    expect(getNewVariable(input)).toBe("z");
  });

  test("Gets new variable for a formula with both quantifiers with ∃ first", () => {
    const input = "∃x∀yF(x,y)";
    expect(getNewVariable(input)).toBe("z");
  });

  test("Gets new variable for a formula with both quantifiers and an existing free variable", () => {
    const input = "∀x∃yF(x,y,z)";
    expect(getNewVariable(input)).toBe("u");
  });
});

describe("Free variables tests", () => {
  test("Recognises a single free variable in a formula with the quantifier ∀", () => {
    const input = getParseTree("∀xF(x,y)");
    expect(getFreeIndVars(input)).toEqual(new Set("y"));
  });

  test("Recognises a single free variable in a formula with the quantifier ∃", () => {
    const input = getParseTree("∃xF(x,y)");
    expect(getFreeIndVars(input)).toEqual(new Set("y"));
  });

  test("Recognises several free variables in a formula with the quantifier ∀", () => {
    const input = getParseTree("∀xF(x,y,z,t)");
    const result = getFreeIndVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });

  test("Recognises several free variables in a formula with the quantifier ∃", () => {
    const input = getParseTree("∃xF(x,y,z,t)");
    const result = getFreeIndVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });

  test("Returns empty set when no free variables exist", () => {
    const input = getParseTree("∃x∃yF(x,y)");
    expect(getFreeIndVars(input)).toEqual(new Set());
  });

  test("Recognises all variables as free from a predicate without a quantifier", () => {
    const input = getParseTree("F(x,y,z)");
    const result = getFreeIndVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("x")).toBeTruthy();
  });

  test("Returns empty set when the same variable is used as the variable for nested quantifiers", () => {
    const input = getParseTree("∃x(F(x)∧∀xG(x))");
    expect(getFreeIndVars(input)).toEqual(new Set());
  });

  test("Recognises a free variable if it is out of bound of the quantifier", () => {
    const input = getParseTree("(∃xF(x))∧G(x)");
    expect(getFreeIndVars(input)).toEqual(new Set("x"));
  });

  test("Recognises several free variables in a formula containg a term in a form of a function", () => {
    const input = getParseTree("∀xF(x,f(y),z,t)");
    const result = getFreeIndVars(input);
    expect(result.has("y")).toBeTruthy();
    expect(result.has("z")).toBeTruthy();
    expect(result.has("t")).toBeTruthy();
    expect(result.has("x")).toBeFalsy();
  });
});
