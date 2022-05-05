import getParseTreeRight from "@/ANTLR/rightAssocGrammar/ParseTreeRight.js";

describe("creates correctly shaped trees with associative operations", () => {
  test("creates correct conjunction", () => {
    const input = "F(x)∧¬G(y)∧1";
    const tree = getParseTreeRight(input);
    expect(tree.formula().right.getText()).toBe("¬G(y)∧1");
    expect(tree.formula().left.getText()).toBe("F(x)");
  });

  test("creates correct disjunction", () => {
    const input = "0∨G(y)∨H(z)";
    const tree = getParseTreeRight(input);
    expect(tree.formula().right.getText()).toBe("G(y)∨H(z)");
    expect(tree.formula().left.getText()).toBe("0");
  });

  test("creates correct equivalence", () => {
    const input = "F(x)⇔∃yG(a,y)⇔H(z)";
    const tree = getParseTreeRight(input);
    expect(tree.formula().right.getText()).toBe("∃yG(a,y)⇔H(z)");
    expect(tree.formula().left.getText()).toBe("F(x)");
  });

  test("creates correct implication", () => {
    const input = "∀xF(x)⇒G(y,f(t))⇒H(z)";
    const tree = getParseTreeRight(input);
    expect(tree.formula().right.getText()).toBe("H(z)");
    expect(tree.formula().left.getText()).toBe("∀xF(x)⇒G(y,f(t))");
  });
});
