import convert from "@/js/Converter.js";

describe("P12_2 tests", () => {
  
    test("moves quantifier out from the parentheses F⇒∃xG(x)", () => {
    const input = "F⇒∃xG(x)";
    expect(convert(input, "P12_2")).toBe("∃x(F⇒G(x))");
  });

  test("moves quantifier out from the parentheses (A(y)⇔B(z))⇒∃xG(x)", () => {
    const input = "(A(y)⇔B(z))⇒∃xG(x)";
    expect(convert(input, "P12_2")).toBe("∃x((A(y)⇔B(z))⇒G(x))");
  });

  test("returns null if individual variable is not in the implication ∃x(A(y)⇔B(z))⇒G", () => {
    const input = "∃x(A(y)⇔B(z))⇒G";
    expect(convert(input, "P12_2")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the implication ∃x(A(x,y)⇔B(z))⇒G", () => {
    const input = "∃x(A(x,y)⇔B(z))⇒G";
    expect(convert(input, "P12_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃xF⇒G(x)", () => {
    const input = "∃xF∨G(x)";
    expect(convert(input, "P12_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃xF⇒G(x)", () => {
    const input = "∃x(F⇒G(x))";
    expect(convert(input, "P12_2")).toBe(null);
  });

});