import convert from "@/js/Converter.js";

describe("L10_1 tests", () => {
  test("applies DeMorgan to ¬(F∧G)", () => {
    const input = "¬(F∧G)";
    expect(convert(input, "L10_1")).toBe("¬F∨¬G");
  });

  test("applies DeMorgan to ¬(A(x)∧B(y,f(z)))", () => {
    const input = "¬(A(x)∧B(y,f(z)))";
    expect(convert(input, "L10_1")).toBe("¬A(x)∨¬B(y,f(z))");
  });

  test("applies DeMorgan to ¬(¬A(x)∧B(y,f(z)))", () => {
    const input = "¬(¬A(x)∧B(y,f(z)))";
    expect(convert(input, "L10_1")).toBe("¬¬A(x)∨¬B(y,f(z))");
  });

  test("applies DeMorgan to ¬(A(x)∧C(t)∧B(y,f(z)))", () => {
    const input = "¬(A(x)∧C(t)∧B(y,f(z)))";
    expect(convert(input, "L10_1")).toBe("¬(A(x)∧C(t))∨¬B(y,f(z))");
  });

  test("applies DeMorgan to ¬((A(x)∨B(y))∧C(z))", () => {
    const input = "¬((A(x)∨B(y))∧C(z))";
    expect(convert(input, "L10_1")).toBe("¬(A(x)∨B(y))∨¬C(z)");
  });

  test("applies DeMorgan to ¬((A(x)⇒B(y))∧C(z))", () => {
    const input = "¬((A(x)⇒B(y))∧C(z))";
    expect(convert(input, "L10_1")).toBe("¬(A(x)⇒B(y))∨¬C(z)");
  });

  test("applies DeMorgan to ¬(∀xA(x)∧(∃xB(x)⇔C(y)))", () => {
    const input = "¬(∀xA(x)∧(∃xB(x)⇔C(y)))";
    expect(convert(input, "L10_1")).toBe("¬∀xA(x)∨¬(∃xB(x)⇔C(y))");
  });

  test("applies DeMorgan to ¬(∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z))", () => {
    const input = "¬(∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧∃zA(x,z))";
    expect(convert(input, "L10_1")).toBe(
      "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∨¬∃zA(x,z)"
    );
  });

  test("returns null if input is not in the form of ¬(F∧G)", () => {
    const input = "(F(x)∨B(x))∧(F(x)∧H(y))";
    expect(convert(input, "L10_1")).toBe(null);
  });

  test("returns null if input is not in the form of ¬(F∧G)", () => {
    const input = "F∧(A⇔B)∧G";
    expect(convert(input, "L10_1")).toBe(null);
  });
});
