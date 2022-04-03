import convert from "@/js/Converter.js";

describe("L3 tests", () => {
  test("switches sides of A∧B", () => {
    const input = "A∧B";
    expect(convert(input, "L3")).toBe("B∧A");
  });

  test("switches sides of ¬A∧¬B", () => {
    const input = "¬A∧¬B";
    expect(convert(input, "L3")).toBe("¬B∧¬A");
  });

  test("switches sides of (A∧B)∧(C∧D)", () => {
    const input = "(A∧B)∧(C∧D)";
    expect(convert(input, "L3")).toBe("(C∧D)∧(A∧B)");
  });

  test("switches sides of (A∨B)∧(C∨D)", () => {
    const input = "(A∨B)∧(C∨D)";
    expect(convert(input, "L3")).toBe("(C∨D)∧(A∨B)");
  });

  test("switches sides of (A⇒B)∧(C⇒D)", () => {
    const input = "(A⇒B)∧(C⇒D)";
    expect(convert(input, "L3")).toBe("(C⇒D)∧(A⇒B)");
  });

  test("switches sides of (A⇔B)∧(C⇔D)", () => {
    const input = "(A⇔B)∧(C⇔D)";
    expect(convert(input, "L3")).toBe("(C⇔D)∧(A⇔B)");
  });

  test("switches sides of ∀xF(x)∧∀yG(y)", () => {
    const input = "∀xF(x)∧∀yG(y)";
    expect(convert(input, "L3")).toBe("∀yG(y)∧∀xF(x)");
  });

  test("switches sides of ∃xF(x)∧∀yG(y)", () => {
    const input = "∃xF(x)∧∀yG(y)";
    expect(convert(input, "L3")).toBe("∀yG(y)∧∃xF(x)");
  });

  test("switches sides of ∃xF(x)∧∀yG(y)∧H(x,f(z))", () => {
    const input = "∃xF(x)∧∀yG(y)∧H(x,f(z))";
    expect(convert(input, "L3")).toBe("H(x,f(z))∧∃xF(x)∧∀yG(y)");
  });

  test("returns null when input is not conjuction", () => {
    const input = "(A∧B)∨¬(C⇒D)";
    expect(convert(input, "L3")).toBe(null);
  });
});
