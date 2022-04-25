import convert from "@/js/Converter.js";

describe("L16_1 tests", () => {
  test("turns equivalence to disjunction of conjunctions F⇔G", () => {
    const input = "F⇔G";
    expect(convert(input, "L16_1")).toBe("F∧G∨¬F∧¬G");
  });

  test("turns equivalence to disjunction of conjunctions A(x)⇔B(y,f(z))", () => {
    const input = "A(x)⇔B(y,f(z))";
    expect(convert(input, "L16_1")).toBe("A(x)∧B(y,f(z))∨¬A(x)∧¬B(y,f(z))");
  });

  test("turns equivalence to disjunction of conjunctions ¬A(x)⇔¬B(y,f(z))", () => {
    const input = "¬A(x)⇔¬B(y,f(z))";
    expect(convert(input, "L16_1")).toBe("¬A(x)∧¬B(y,f(z))∨¬¬A(x)∧¬¬B(y,f(z))");
  });

  test("turns equivalence to disjunction of conjunctions A(x)∧C(t)⇔B(y,f(z))", () => {
    const input = "A(x)∧C(t)⇔B(y,f(z))";
    expect(convert(input, "L16_1")).toBe(
      "A(x)∧C(t)∧B(y,f(z))∨¬(A(x)∧C(t))∧¬B(y,f(z))"
    );
  });

  test("turns equivalence to disjunction of conjunctions A(x)∨B(y)⇔C(z)", () => {
    const input = "A(x)∨B(y)⇔C(z)";
    expect(convert(input, "L16_1")).toBe("(A(x)∨B(y))∧C(z)∨¬(A(x)∨B(y))∧¬C(z)");
  });

  test("turns equivalence to disjunction of conjunctions ∀xA(x)⇒B(y)⇔¬C(z)", () => {
    const input = "∀xA(x)⇒B(y)⇔¬C(z)";
    expect(convert(input, "L16_1")).toBe(
      "(∀xA(x)⇒B(y))∧¬C(z)∨¬(∀xA(x)⇒B(y))∧¬¬C(z)"
    );
  });

  test("turns equivalence to disjunction of conjunctions ∀xA(x)⇔(∃xB(x)⇔C(y))", () => {
    const input = "∀xA(x)⇔(∃xB(x)⇔C(y))";
    expect(convert(input, "L16_1")).toBe(
      "∀xA(x)∧(∃xB(x)⇔C(y))∨¬∀xA(x)∧¬(∃xB(x)⇔C(y))"
    );
  });

  test("turns equivalence to disjunction of conjunctions ¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)", () => {
    const input = "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)";
    expect(convert(input, "L16_1")).toBe(
      "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z)∨¬¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧¬∃zA(x,z)"
    );
  });

  test("returns null if input is not in the form of F⇔G", () => {
    const input = "F";
    expect(convert(input, "L16_1")).toBe(null);
  });

  test("returns null if input is not in the form of F⇔G", () => {
    const input = "F∧G∨¬F∧¬G";
    expect(convert(input, "L16_1")).toBe(null);
  });
});
