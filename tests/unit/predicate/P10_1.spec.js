import convert from "@/js/Converter.js";

describe("P10_1 tests", () => {
  
    test("moves quantifier into the parentheses ∃x(F(x)⇒G)", () => {
    const input = "∃x(F(x)⇒G)";
    expect(convert(input, "P10_1")).toBe("∀xF(x)⇒G");
  });

  test("moves quantifier into the parentheses ∃x((A(x,y)⇔B(z))⇒G)", () => {
    const input = "∃x((A(x,y)⇔B(z))⇒G)";
    expect(convert(input, "P10_1")).toBe("∀x(A(x,y)⇔B(z))⇒G");
  });

  test("returns null if individual variable is not in the conjuction ∃x((A(y)⇔B(z))⇒G)", () => {
    const input = "∃x((A(y)⇔B(z))⇒G)";
    expect(convert(input, "P10_1")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the conjuction ∃x((A(y)⇔B(z))⇒G(x))", () => {
    const input = "∃x((A(y)⇔B(z))⇒G(x))";
    expect(convert(input, "P10_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)⇒G)", () => {
    const input = "∃x(F(x)⇒G(x))";
    expect(convert(input, "P10_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)⇒G)", () => {
    const input = "∀xF(x)⇒G";
    expect(convert(input, "P10_1")).toBe(null);
  });

});