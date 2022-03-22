import convert from "../../src/js/Converter.js";

describe("LS1_2 tests", () => {
  test("Creates conjunction of A", () => {
    const input = "A";
    expect(convert(input, "LS1_2")).toBe("A∧A");
  });

  test("Creates conjunction of ¬A", () => {
    const input = "¬A";
    expect(convert(input, "LS1_2")).toBe("¬A∧¬A");
  });

  test("Creates conjunction of A∧B", () => {
    const input = "A∧B";
    expect(convert(input, "LS1_2")).toBe("A∧B∧A∧B");
  });

  test("Creates conjunction of A∨B", () => {
    const input = "A∨B";
    expect(convert(input, "LS1_2")).toBe("(A∨B)∧(A∨B)");
  });

  test("Creates conjunction of A⇒B", () => {
    const input = "A⇒B";
    expect(convert(input, "LS1_2")).toBe("(A⇒B)∧(A⇒B)");
  });

  test("Creates conjunction of A⇔B", () => {
    const input = "A⇔B";
    expect(convert(input, "LS1_2")).toBe("(A⇔B)∧(A⇔B)");
  });

  test("Creates conjunction of ∀xF(x,y)", () => {
    const input = "∀xF(x,y)";
    expect(convert(input, "LS1_2")).toBe("∀xF(x,y)∧∀xF(x,y)");
  });

  test("Creates conjunction of ∃xF(x,y)", () => {
    const input = "∃xF(x,y)";
    expect(convert(input, "LS1_2")).toBe("∃xF(x,y)∧∃xF(x,y)");
  });

  test("Creates conjunction of complex expression", () => {
    const input = "∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))";
    expect(convert(input, "LS1_2")).toBe(
      "∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))∧∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))"
    );
  });
});
