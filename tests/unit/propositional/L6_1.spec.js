import convert from "@/js/Converter.js";

describe("L6_1 tests", () => {
  test("simplifies A(x)∨A(x)∧B(y)", () => {
    const input = "A(x)∨A(x)∧B(y)";
    expect(convert(input, "L6_1")).toBe("A(x)");
  });

  test("simplifies ¬A(x)∨¬A(x)∧B(y)", () => {
    const input = "¬A(x)∨¬A(x)∧B(y)";
    expect(convert(input, "L6_1")).toBe("¬A(x)");
  });

  test("simplifies A∧B∨A∧B∧B", () => {
    const input = "A∧B∨A∧B∧B";
    expect(convert(input, "L6_1")).toBe("A∧B");
  });

  test("simplifies (A∨B)∨(A∨B)∧C", () => {
    const input = "(A∨B)∨(A∨B)∧C";
    expect(convert(input, "L6_1")).toBe("(A∨B)");
  });

  test("simplifies (∀xF(x)⇒H)∨(∀xF(x)⇒H)∧C", () => {
    const input = "(∀xF(x)⇒H)∨(∀xF(x)⇒H)∧C";
    expect(convert(input, "L6_1")).toBe("(∀xF(x)⇒H)");
  });

  test("simplifies (∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∨(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧C", () => {
    const input =
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∨(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))∧C";
    expect(convert(input, "L6_1")).toBe(
      "(∃xF(x)∨((∃xF(x)∨∀yG(y)∨H(x,f(z)))∨C))"
    );
  });

  test("returns null if input is not in the form of F∨F∧G", () => {
    const input = "F∨F∧G∧C";
    expect(convert(input, "L6_1")).toBe(null);
  });

  test("returns null if input is not in the form of F∨F∧G", () => {
    const input = "F∧F∧G";
    expect(convert(input, "L6_1")).toBe(null);
  });

  test("considers commutation rule in F∨G∧F", () => {
    const input = "F∨G∧F";
    expect(convert(input, "L6_1")).toBe("F");
  });

  test("considers commutation rule in G∧F∨F", () => {
    const input = "G∧F∨F";
    expect(convert(input, "L6_1")).toBe("F");
  });

  test("considers commutation rule in G∧F∨G", () => {
    const input = "G∧F∨G";
    expect(convert(input, "L6_1")).toBe("G");
  });

  test("returns null with F∧H∨G", () => {
    const input = "F∧H∨G";
    expect(convert(input, "L6_1")).toBe(null);
  });
});
