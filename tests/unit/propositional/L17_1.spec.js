import convert from "@/js/Converter.js";

describe("L17_1 tests", () => {
  test("turns equivalence to disjunction of implications F⇔G", () => {
    const input = "F⇔G";
    expect(convert(input, "L17_1")).toBe("(F⇒G)∧(G⇒F)");
  });

  test("turns equivalence to disjunction of implications A(x)⇔B(y,f(z))", () => {
    const input = "A(x)⇔B(y,f(z))";
    expect(convert(input, "L17_1")).toBe("(A(x)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x))");
  });

  test("turns equivalence to disjunction of implications ¬A(x)⇔¬B(y,f(z))", () => {
    const input = "¬A(x)⇔¬B(y,f(z))";
    expect(convert(input, "L17_1")).toBe(
      "(¬A(x)⇒¬B(y,f(z)))∧(¬B(y,f(z))⇒¬A(x))"
    );
  });

  test("turns equivalence to disjunction of implications A(x)∧C(t)⇔B(y,f(z))", () => {
    const input = "A(x)∧C(t)⇔B(y,f(z))";
    expect(convert(input, "L17_1")).toBe(
      "(A(x)∧C(t)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x)∧C(t))"
    );
  });

  test("turns equivalence to disjunction of implications A(x)∨B(y)⇔C(z)", () => {
    const input = "A(x)∨B(y)⇔C(z)";
    expect(convert(input, "L17_1")).toBe("(A(x)∨B(y)⇒C(z))∧(C(z)⇒A(x)∨B(y))");
  });

  test("turns equivalence to disjunction of implications ∀xA(x)⇒B(y)⇔¬C(z)", () => {
    const input = "∀xA(x)⇒B(y)⇔¬C(z)";
    expect(convert(input, "L17_1")).toBe(
      "(∀xA(x)⇒B(y)⇒¬C(z))∧(¬C(z)⇒∀xA(x)⇒B(y))"
    );
  });

  test("turns equivalence to disjunction of implications ∀xA(x)⇔(∃xB(x)⇔C(y))", () => {
    const input = "∀xA(x)⇔(∃xB(x)⇔C(y))";
    expect(convert(input, "L17_1")).toBe(
      "(∀xA(x)⇒(∃xB(x)⇔C(y)))∧((∃xB(x)⇔C(y))⇒∀xA(x))"
    );
  });

  test("turns equivalence to disjunction of implications ¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)", () => {
    const input = "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)";
    expect(convert(input, "L17_1")).toBe(
      "(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒∃zA(x,z))∧(∃zA(x,z)⇒¬∃x∀y(F(x)⇒G(y)∧H(z,g(t))))"
    );
  });

  test("returns null if input is not in the form of F⇔G", () => {
    const input = "F";
    expect(convert(input, "L17_1")).toBe(null);
  });

  test("returns null if input is not in the form of F⇔G", () => {
    const input = "(F⇒G)∧(G⇒F)";
    expect(convert(input, "L17_1")).toBe(null);
  });
});
