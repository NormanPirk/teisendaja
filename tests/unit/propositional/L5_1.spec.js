import convert from "@/js/Converter.js";

describe("L5_1 tests", () => {

  test("simplifies (G∨F)∧F", () => {
    const input = "(G∨F)∧F";
    expect(convert(input, "L5_1")).toBe("F");
  });

  test("simplifies (G∨F)∧G", () => {
    const input = "(G∨F)∧G";
    expect(convert(input, "L5_1")).toBe("G");
  });

  test("simplifies A(x)∧(A(x)∨B(y))", () => {
    const input = "A(x)∧(A(x)∨B(y))";
    expect(convert(input, "L5_1")).toBe("A(x)");
  });

  test("simplifies ¬A(x)∧(¬A(x)∨B(y))", () => {
    const input = "¬A(x)∧(¬A(x)∨B(y))";
    expect(convert(input, "L5_1")).toBe("¬A(x)");
  });

  test("simplifies (A∨B)∧((A∨B)∨D)", () => {
    const input = "(A∨B)∧((A∨B)∨D)";
    expect(convert(input, "L5_1")).toBe("(A∨B)");
  });

  test("simplifies (A∨B)∧((A∨B)∨D)", () => {
    const input = "(A∨B)∧((A∨B)∨D)";
    expect(convert(input, "L5_1")).toBe("(A∨B)");
  });

  test("simplifies (∀xA(x)⇒D(y))∧((∀xA(x)⇒D(y))∨B(y))", () => {
    const input = "(∀xA(x)⇒D(y))∧((∀xA(x)⇒D(y))∨B(y))";
    expect(convert(input, "L5_1")).toBe("(∀xA(x)⇒D(y))");
  });

  test("simplifies (A⇔B)∧((A⇔B)∨D)", () => {
    const input = "(A⇔B)∧((A⇔B)∨D)";
    expect(convert(input, "L5_1")).toBe("(A⇔B)");
  });

  test("simplifies (∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧((∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∨D)", () => {
    const input =
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧((∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∨D)";
    expect(convert(input, "L5_1")).toBe(
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))"
    );
  });

  test("returns null if input is not in the form of F∧(F∨G)", () => {
    const input = "(A⇔B)∨((A⇔B)∨D)";
    expect(convert(input, "L5_1")).toBe(null);
  });

  test("returns null if input is not in the form of F∧(F∨G)", () => {
    const input = "F∧(F∧G)";
    expect(convert(input, "L5_1")).toBe(null);
  });

  test("considers with commutation rule with F∧(G∨F)", () => {
    const input = "F∧(G∨F)";
    expect(convert(input, "L5_1")).toBe("F");
  });

  test("returns null with F∧(G∨H)", () => {
    const input = "F∧(G∨H)";
    expect(convert(input, "L5_1")).toBe(null);
  });

  test("return null with (G∧F)∧F", () => {
    const input = "(G∧F)∧F";
    expect(convert(input, "L5_1")).toBe(null);
  });

  test("return null with (G∨H)∧F", () => {
    const input = "(G∨H)∧F";
    expect(convert(input, "L5_1")).toBe(null);
  });

});
