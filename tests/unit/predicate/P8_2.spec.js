import convert from "@/js/Converter.js";

describe("P8_2 tests", () => {
  
    test("moves quantifier out from the parentheses ∃xF(x)∨G", () => {
    const input = "∃xF(x)∨G";
    expect(convert(input, "P8_2")).toBe("∃x(F(x)∨G)");
  });

  test("moves quantifier out from the parentheses ∃x(A(x,y)⇔B(z))∨G", () => {
    const input = "∃x(A(x,y)⇔B(z))∨G";
    expect(convert(input, "P8_2")).toBe("∃x((A(x,y)⇔B(z))∨G)");
  });

  test("returns null if individual variable is not in the disjunction ∃x(A(y)⇔B(z))∨G", () => {
    const input = "∃x(A(y)⇔B(z))∨G";
    expect(convert(input, "P8_2")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the disjunction ∃x(A(y)⇔B(z))∨G(x)", () => {
    const input = "∃x(A(y)⇔B(z))∨G(x)";
    expect(convert(input, "P8_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃xF(x)∨G", () => {
    const input = "∃xF(x)∨G(x)";
    expect(convert(input, "P8_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃xF(x)∨G", () => {
    const input = "∃x(F(x)∨G)";
    expect(convert(input, "P8_2")).toBe(null);
  });

});