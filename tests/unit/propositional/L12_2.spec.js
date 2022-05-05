import convert from "@/js/Converter.js";

describe("L12_2 tests", () => {
  test("turns negated conjunction to implication  ¬(F∧¬G)", () => {
    const input = "¬(F∧¬G)";
    expect(convert(input, "L12_2")).toBe("F⇒G");
  });

  test("turns negated conjunction to implication  ¬(A(x)∧¬B(y,f(z)))", () => {
    const input = "¬(A(x)∧¬B(y,f(z)))";
    expect(convert(input, "L12_2")).toBe("A(x)⇒B(y,f(z))");
  });

  test("turns negated conjunction to implication  ¬(¬A(x)∧¬¬B(y,f(z)))", () => {
    const input = "¬(¬A(x)∧¬¬B(y,f(z)))";
    expect(convert(input, "L12_2")).toBe("¬A(x)⇒¬B(y,f(z))");
  });

  test("turns negated conjunction to implication  ¬(A(x)∧C(t)∧¬B(y,f(z)))", () => {
    const input = "¬(A(x)∧C(t)∧¬B(y,f(z)))";
    expect(convert(input, "L12_2")).toBe("A(x)∧C(t)⇒B(y,f(z))");
  });

  test("turns negated conjunction to implication  ¬((¬A(x)∨B(y))∧¬C(z))", () => {
    const input = "¬((¬A(x)∨B(y))∧¬C(z))";
    expect(convert(input, "L12_2")).toBe("(¬A(x)∨B(y))⇒C(z)");
  });

  test("turns negated conjunction to implication  ¬((∀xA(x)⇒B(y))∧¬¬C(z))", () => {
    const input = "¬((∀xA(x)⇒B(y))∧¬¬C(z))";
    expect(convert(input, "L12_2")).toBe("(∀xA(x)⇒B(y))⇒¬C(z)");
  });

  test("turns negated conjunction to implication  ¬(∀xA(x)∧¬(∃xB(x)⇔C(y)))", () => {
    const input = "¬(∀xA(x)∧¬(∃xB(x)⇔C(y)))";
    expect(convert(input, "L12_2")).toBe("∀xA(x)⇒(∃xB(x)⇔C(y))");
  });

  test("turns negated conjunction to implication  ¬(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧¬∃zA(x,z))", () => {
    const input = "¬(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧¬∃zA(x,z))";
    expect(convert(input, "L12_2")).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒∃zA(x,z)");
  });

  test("returns null if input is not in the form of ¬(F∧¬G)", () => {
    const input = "¬(F∧G)";
    expect(convert(input, "L12_2")).toBe(null);
  });

  test("returns null if input is not in the form of ¬(F∧¬G)", () => {
    const input = "F∧¬G";
    expect(convert(input, "L12_2")).toBe(null);
  });

  test("returns null if input is not in the form of ¬(F∧¬G)", () => {
    const input = "¬F(x)";
    expect(convert(input, "L12_2")).toBe(null);
  });

  test("returns null if input is not in the form of ¬(F∧¬G)", () => {
    const input = "¬(F⇒¬G)";
    expect(convert(input, "L12_2")).toBe(null);
  });

  test("considers commitation rule with ¬(¬F∧G)", () => {
    const input = "¬(¬F∧G)";
    expect(convert(input, "L12_2")).toBe("G⇒F");
  });
});
