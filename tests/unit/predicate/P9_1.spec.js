import convert from "@/js/Converter.js";

describe("P9_1 tests", () => {
  test("moves quantifier into the parentheses ∀x(F⇒G(x))", () => {
    const input = "∀x(F⇒G(x))";
    expect(convert(input, "P9_1")).toBe("F⇒∀xG(x)");
  });

  test("moves quantifier into the parentheses ∀x((A(y)⇔B(z))⇒G(x))", () => {
    const input = "∀x((A(y)⇔B(z))⇒G(x))";
    expect(convert(input, "P9_1")).toBe("(A(y)⇔B(z))⇒∀xG(x)");
  });

  test("returns null if individual variable is not in the implication ∀x((A(y)⇔B(z))⇒G)", () => {
    const input = "∀x((A(y)⇔B(z))⇒G)";
    expect(convert(input, "P9_1")).toBe(null);
  });

  test("returns null if individual variable is on the wrong side of the implication ∀x((A(y)⇔B(z))⇒G(x))", () => {
    const input = "∀x((A(x,y)⇔B(z))⇒G)";
    expect(convert(input, "P9_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x(F⇒G(x))", () => {
    const input = "∀x(F(x)⇒G(x))";
    expect(convert(input, "P9_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x(F⇒G(x))", () => {
    const input = "F(x)⇒∀xG(x)";
    expect(convert(input, "P9_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x(F⇒G(x))", () => {
    const input = "∀xG(x)";
    expect(convert(input, "P9_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x(F⇒G(x))", () => {
    const input = "∀x(G(x)⇔¬F(x))";
    expect(convert(input, "P9_1")).toBe(null);
  });
});
