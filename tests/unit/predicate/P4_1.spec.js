import convert from "@/js/Converter.js";

describe("P4_1 tests", () => {
  
    test("moves quantifier out from the parentheses ∃x(F(x)∨G(x))", () => {
    const input = "∃x(F(x)∨G(x))";
    expect(convert(input, "P4_1")).toBe("∃xF(x)∨∃xG(x)");
  });

  test("moves quantifier out from the parentheses ∃x((A(x,y)⇔B(z))∨G(x))", () => {
    const input = "∃x((A(x,y)⇔B(z))∨G(x))";
    expect(convert(input, "P4_1")).toBe("∃x(A(x,y)⇔B(z))∨∃xG(x)");
  });

  test("returns null if individual variable is not on both sides of the disjuction ∃x((A(x,y)⇔B(z))∨G(y))", () => {
    const input = "∃x((A(x,y)⇔B(z))∨G(y))";
    expect(convert(input, "P4_1")).toBe(null);
  });

  test("returns null if individual variable is not on both sides of the disjuction ∃x((A(y)⇔B(z))∨G(x))", () => {
    const input = "∃x((A(y)⇔B(z))∨G(x))";
    expect(convert(input, "P4_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)∨G(x))", () => {
    const input = "∀x(F(x)∨G(x))";
    expect(convert(input, "P4_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)∨G(x))", () => {
    const input = "∃xF(x)∨∃xG(x)";
    expect(convert(input, "P4_1")).toBe(null);
  });

});