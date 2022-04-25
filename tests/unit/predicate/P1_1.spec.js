import convert from "@/js/Converter.js";

describe("P1_1 tests", () => {
  test("moves negation under quantifier and changes the quantifier ¬∀xF(x)", () => {
    const input = "¬∀xF(x)";
    expect(convert(input, "P1_1")).toBe("∃x¬F(x)");
  });

  test("moves negation under quantifier and changes the quantifier ¬∀x(A(x)∧B(y,z))", () => {
    const input = "¬∀x(A(x)∧B(y,z))";
    expect(convert(input, "P1_1")).toBe("∃x¬(A(x)∧B(y,z))");
  });

  test("moves negation under quantifier and changes the quantifier ¬∀x∀yF(x,y,g(z))", () => {
    const input = "¬∀x∀yF(x,y,g(z))";
    expect(convert(input, "P1_1")).toBe("∃x¬∀yF(x,y,g(z))");
  });

  test("moves negation under quantifier and changes the quantifier ¬∀x∃yF(x,y,g(z))", () => {
    const input = "¬∀x∃yF(x,y,g(z))";
    expect(convert(input, "P1_1")).toBe("∃x¬∃yF(x,y,g(z))");
  });

  test("returns null if the input is not in the form of ¬∀xF(x)", () => {
    const input = "¬∀xF(x)∧G(y)";
    expect(convert(input, "P1_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ¬∀xF(x)", () => {
    const input = "∃x¬F(x)";
    expect(convert(input, "P1_1")).toBe(null);
  });

  test("returns null if the input is not in the form of ¬∀xF(x)", () => {
    const input = "¬(F(x)⇒D(a))";
    expect(convert(input, "P1_1")).toBe(null);
  });
});
