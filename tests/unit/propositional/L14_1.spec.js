import convert from "@/js/Converter.js";

describe("L14_1 tests", () => {
  test("turns conjunction to negated implication F∧G", () => {
    const input = "F∧G";
    expect(convert(input, "L14_1")).toBe("¬(F⇒¬G)");
  });

  test("turns conjunction to negated implication A(x)∧B(y,f(z))", () => {
    const input = "A(x)∧B(y,f(z))";
    expect(convert(input, "L14_1")).toBe("¬(A(x)⇒¬B(y,f(z)))");
  });

  test("turns conjunction to negated implication ¬A(x)∧¬B(y,f(z))", () => {
    const input = "¬A(x)∧¬B(y,f(z))";
    expect(convert(input, "L14_1")).toBe("¬(¬A(x)⇒¬¬B(y,f(z)))");
  });

  test("turns conjunction to negated implication A(x)∧C(t)∧B(y,f(z))", () => {
    const input = "A(x)∧C(t)∧B(y,f(z))";
    expect(convert(input, "L14_1")).toBe("¬(A(x)∧C(t)⇒¬B(y,f(z)))");
  });

  test("turns conjunction to negated implication (A(x)∨B(y))∧C(z)", () => {
    const input = "(A(x)∨B(y))∧C(z)";
    expect(convert(input, "L14_1")).toBe("¬((A(x)∨B(y))⇒¬C(z))");
  });

  test("turns conjunction to negated implication (∀xA(x)⇒B(y))∧¬C(z)", () => {
    const input = "(∀xA(x)⇒B(y))∧¬C(z)";
    expect(convert(input, "L14_1")).toBe("¬((∀xA(x)⇒B(y))⇒¬¬C(z))");
  });

  test("turns conjunction to negated implication ∀xA(x)∧(∃xB(x)⇔C(y))", () => {
    const input = "∀xA(x)∧(∃xB(x)⇔C(y))";
    expect(convert(input, "L14_1")).toBe("¬(∀xA(x)⇒¬(∃xB(x)⇔C(y)))");
  });

  test("turns conjunction to negated implication ¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)", () => {
    const input = "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)";
    expect(convert(input, "L14_1")).toBe(
      "¬(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒¬∃zA(x,z))"
    );
  });

  test("returns null if input is not in the form of F∧G", () => {
    const input = "F∨G";
    expect(convert(input, "L14_1")).toBe(null);
  });

  test("returns null if input is not in the form of F∧G", () => {
    const input = "¬(F⇒¬G)";
    expect(convert(input, "L14_1")).toBe(null);
  });
});
