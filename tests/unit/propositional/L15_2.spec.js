import convert from "@/js/Converter.js";

describe("L15_2 tests", () => {
  test("turns negated implication to conjunction ¬(F⇒¬G)", () => {
    const input = "¬(F⇒¬G)";
    expect(convert(input, "L15_2")).toBe("F∧G");
  });

  test("turns negated implication to conjunction ¬(A(x)⇒¬B(y,f(z)))", () => {
    const input = "¬(A(x)⇒¬B(y,f(z)))";
    expect(convert(input, "L15_2")).toBe("A(x)∧B(y,f(z))");
  });

  test("turns negated implication to conjunction ¬(¬A(x)⇒¬¬B(y,f(z)))", () => {
    const input = "¬(¬A(x)⇒¬¬B(y,f(z)))";
    expect(convert(input, "L15_2")).toBe("¬A(x)∧¬B(y,f(z))");
  });

  test("turns negated implication to conjunction ¬(A(x)∧C(t)⇒¬B(y,f(z)))", () => {
    const input = "¬(A(x)∧C(t)⇒¬B(y,f(z)))";
    expect(convert(input, "L15_2")).toBe("A(x)∧C(t)∧B(y,f(z))");
  });

  test("turns negated implication to conjunction ¬((A(x)∨B(y))⇒¬C(z))", () => {
    const input = "¬((A(x)∨B(y))⇒¬C(z))";
    expect(convert(input, "L15_2")).toBe("(A(x)∨B(y))∧C(z)");
  });

  test("turns negated implication to conjunction ¬((∀xA(x)⇒B(y))⇒¬¬C(z))", () => {
    const input = "¬((∀xA(x)⇒B(y))⇒¬¬C(z))";
    expect(convert(input, "L15_2")).toBe("(∀xA(x)⇒B(y))∧¬C(z)");
  });

  test("turns negated implication to conjunction ¬(∀xA(x)⇒¬(∃xB(x)⇔C(y)))", () => {
    const input = "¬(∀xA(x)⇒¬(∃xB(x)⇔C(y)))";
    expect(convert(input, "L15_2")).toBe("∀xA(x)∧(∃xB(x)⇔C(y))");
  });

  test("turns negated implication to conjunction ¬(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒¬∃zA(x,z))", () => {
    const input = "¬(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒¬∃zA(x,z))";
    expect(convert(input, "L15_2")).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)");
  });

  test("returns null if input is not in the form of ¬(F⇒¬G)", () => {
    const input = "¬(F⇒G)";
    expect(convert(input, "L15_2")).toBe(null);
  });

  test("returns null if input is not in the form of ¬(F⇒¬G)", () => {
    const input = "F∧G";
    expect(convert(input, "L15_2")).toBe(null);
  });
});
