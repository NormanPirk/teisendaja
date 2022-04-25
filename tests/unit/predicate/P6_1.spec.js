import convert from "@/js/Converter.js";

describe("P6_1 tests", () => {
  test("moves quantifier into the parentheses ∃x(F(x)∧G)", () => {
    const input = "∃x(F(x)∧G)";
    expect(convert(input, "P6_1")).toBe("∃xF(x)∧G");
  });

  test("moves quantifier into the parentheses ∃x((A(x,y)⇔B(z))∧G)", () => {
    const input = "∃x((A(x,y)⇔B(z))∧G)";
    expect(convert(input, "P6_1")).toBe("∃x(A(x,y)⇔B(z))∧G");
  });

  test("returns null if individual variable is not in the conjunction ∃x((A(y)⇔B(z))∧G)", () => {
    const input = "∃x((A(y)⇔B(z))∧G)";
    expect(convert(input, "P6_1")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the conjunction ∃x((A(y)⇔B(z))∧G(x))", () => {
    const input = "∃x((A(y)⇔B(z))∧G(x))";
    expect(convert(input, "P6_1")).toBe("(A(y)⇔B(z))∧∃xG(x)");
  });

  test("returns null if the input is not in the form of ∃x(F(x)∧G)", () => {
    const input = "∃x(F(x)∧G(x))";
    expect(convert(input, "P6_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)∧G)", () => {
    const input = "∃xF(x)∧G";
    expect(convert(input, "P6_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)∧G)", () => {
    const input = "∃xG(x)";
    expect(convert(input, "P6_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∃x(F(x)∧G)", () => {
    const input = "∃x(F(x)⇒G)";
    expect(convert(input, "P6_1")).toBe(null);
  });
});
