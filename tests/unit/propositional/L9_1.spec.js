import convert from "@/js/Converter.js";

describe("L9_1 tests", () => {
  test("applies the distributive property to A(x)∧(B(x)∨C(y))", () => {
    const input = "A(x)∧(B(x)∨C(y))";
    expect(convert(input, "L9_1")).toBe("A(x)∧B(x)∨A(x)∧C(y)");
  });

  test("applies the distributive property to ¬A(x)∧(¬B(x)∨¬C(y))", () => {
    const input = "¬A(x)∧(¬B(x)∨¬C(y))";
    expect(convert(input, "L9_1")).toBe("¬A(x)∧¬B(x)∨¬A(x)∧¬C(y)");
  });

  test("applies the distributive property to A∧B∧(∀xC(x,g(x))∨∃yD(y))", () => {
    const input = "A∧B∧(∀xC(x,g(x))∨∃yD(y))";
    expect(convert(input, "L9_1")).toBe("A∧B∧∀xC(x,g(x))∨A∧B∧∃yD(y)");
  });

  test("applies the distributive property to (A∨B)∧((A∨B)∨D)", () => {
    const input = "(A∨B)∧((A∨B)∨D)";
    expect(convert(input, "L9_1")).toBe("(A∨B)∧(A∨B)∨(A∨B)∧D");
  });

  test("applies the distributive property to (∀xA(x)⇒D(y))∧(C(x)∨B(y))", () => {
    const input = "(∀xA(x)⇒D(y))∧(C(x)∨B(y))";
    expect(convert(input, "L9_1")).toBe(
      "(∀xA(x)⇒D(y))∧C(x)∨(∀xA(x)⇒D(y))∧B(y)"
    );
  });

  test("applies the distributive property to (A⇔B)∧(C∨D)", () => {
    const input = "(A⇔B)∧(C∨D)";
    expect(convert(input, "L9_1")).toBe("(A⇔B)∧C∨(A⇔B)∧D");
  });

  test("applies the distributive property to (∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧(C∨D)", () => {
    const input = "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧(C∨D)";
    expect(convert(input, "L9_1")).toBe(
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧C∨(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧D"
    );
  });

  test("returns null if input is not in the form of F∧(G∨H)", () => {
    const input = "(A⇔B)∨((A⇔B)∨D)";
    expect(convert(input, "L9_1")).toBe(null);
  });

  test("returns null if input is not in the form of F∧(G∨H)", () => {
    const input = "F∧(F∧G)";
    expect(convert(input, "L9_1")).toBe(null);
  });
});
