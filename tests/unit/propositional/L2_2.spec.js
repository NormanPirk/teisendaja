import convert from "@/js/Converter.js";

describe("L2_2 tests", () => {
  test("Creates disjunction of A", () => {
    const input = "A";
    expect(convert(input, "L2_2")).toBe("A∨A");
  });

  test("Creates disjunction of ¬A", () => {
    const input = "¬A";
    expect(convert(input, "L2_2")).toBe("¬A∨¬A");
  });

  test("Creates disjunction of A∧B", () => {
    const input = "A∧B";
    expect(convert(input, "L2_2")).toBe("A∧B∨A∧B");
  });

  test("Creates disjunction of A∨B", () => {
    const input = "A∨B";
    expect(convert(input, "L2_2")).toBe("A∨B∨A∨B");
  });

  test("Creates disjunction of A⇒B", () => {
    const input = "A⇒B";
    expect(convert(input, "L2_2")).toBe("(A⇒B)∨(A⇒B)");
  });

  test("Creates disjunction of A⇔B", () => {
    const input = "A⇔B";
    expect(convert(input, "L2_2")).toBe("(A⇔B)∨(A⇔B)");
  });

  test("Creates disjunction of ∀xF(x,y)", () => {
    const input = "∀xF(x,y)";
    expect(convert(input, "L2_2")).toBe("∀xF(x,y)∨∀xF(x,y)");
  });

  test("Creates disjunction of ∃xF(x,y)", () => {
    const input = "∃xF(x,y)";
    expect(convert(input, "L2_2")).toBe("∃xF(x,y)∨∃xF(x,y)");
  });

  test("Creates disjunction of complex expression", () => {
    const input = "∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))";
    expect(convert(input, "L2_2")).toBe(
      "∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))∨∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))"
    );
  });
});
