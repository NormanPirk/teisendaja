import convert from "@/js/Converter.js";

describe("P3_2 tests", () => {
  test("moves quantifier out from the parentheses ∀xF(x)∧∀xG(x)", () => {
    const input = "∀xF(x)∧∀xG(x)";
    expect(convert(input, "P3_2")).toBe("∀x(F(x)∧G(x))");
  });

  test("moves quantifier out from the parentheses ∀x(A(x,y)⇔B(z))∧∀xG(x)", () => {
    const input = "∀x(A(x,y)⇔B(z))∧∀xG(x)";
    expect(convert(input, "P3_2")).toBe("∀x((A(x,y)⇔B(z))∧G(x))");
  });

  test("returns null if individual variable is not on both sides of the conjuction ∀x(A(y)⇔B(z))∧∀xG(x)", () => {
    const input = "∀x(A(y)⇔B(z))∧∀xG(x)";
    expect(convert(input, "P3_2")).toBe(null);
  });

  test("returns null if individual variable is not on both sides of the conjuction ∀x(A(x,y)⇔B(z))∧∀xG(z)", () => {
    const input = "∀x(A(x,y)⇔B(z))∧∀xG(z)";
    expect(convert(input, "P3_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀xF(x)∧∀xG(x)", () => {
    const input = "∃xF(x)∧∀xG(x)";
    expect(convert(input, "P3_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀xF(x)∧∀xG(x)", () => {
    const input = "∀x(F(x)∧G(x))";
    expect(convert(input, "P3_2")).toBe(null);
  });
});
