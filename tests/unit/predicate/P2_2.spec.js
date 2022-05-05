import convert from "@/js/Converter.js";

describe("P2_2 tests", () => {
  test("moves negation in front of the quantifier and changes the quantifier ∀x¬F(x)", () => {
    const input = "∀x¬F(x)";
    expect(convert(input, "P2_2")).toBe("¬∃xF(x)");
  });

  test("moves negation in front of the quantifier and changes the quantifier ∀x¬(A(x)∧B(y,z))", () => {
    const input = "∀x¬(A(x)∧B(y,z))";
    expect(convert(input, "P2_2")).toBe("¬∃x(A(x)∧B(y,z))");
  });

  test("moves negation in front of the quantifier and changes the quantifier ∀x¬∀yF(x,y,g(z))", () => {
    const input = "∀x¬∀yF(x,y,g(z))";
    expect(convert(input, "P2_2")).toBe("¬∃x∀yF(x,y,g(z))");
  });

  test("moves negation in front of the quantifier and changes the quantifier ∀x¬∃yF(x,y,g(z))", () => {
    const input = "∀x¬∃yF(x,y,g(z))";
    expect(convert(input, "P2_2")).toBe("¬∃x∃yF(x,y,g(z))");
  });

  test("returns null if the input is not in the form of ∀x¬F(x)", () => {
    const input = "∃x¬F(x)∧G(y)";
    expect(convert(input, "P2_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x¬F(x)", () => {
    const input = "∀xF(x)";
    expect(convert(input, "P2_2")).toBe(null);
  });

  test("returns null if the input is not in the form of ∀x¬F(x)", () => {
    const input = "∃x(F(x)∧¬G(y))";
    expect(convert(input, "P2_2")).toBe(null);
  });
});
