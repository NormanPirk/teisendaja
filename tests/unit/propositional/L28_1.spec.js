import convert from "@/js/Converter.js";

describe("L28_1 tests", () => {
  test("adds parentheses to A", () => {
    const input = "A";
    expect(convert(input, "L28_1")).toBe("(A)");
  });

  test("adds parentheses to conjunction", () => {
    const input = "A∧B";
    expect(convert(input, "L28_1")).toBe("(A∧B)");
  });

  test("adds parentheses to disjunction", () => {
    const input = "A∨B";
    expect(convert(input, "L28_1")).toBe("(A∨B)");
  });

  test("adds parentheses to implication", () => {
    const input = "A⇒B";
    expect(convert(input, "L28_1")).toBe("(A⇒B)");
  });

  test("adds parentheses to equivalence", () => {
    const input = "A⇔B";
    expect(convert(input, "L28_1")).toBe("(A⇔B)");
  });

  test("adds parentheses to negation", () => {
    const input = "¬A";
    expect(convert(input, "L28_1")).toBe("(¬A)");
  });

  test("adds parentheses to formula starting with ∀", () => {
    const input = "∀xF(x)";
    expect(convert(input, "L28_1")).toBe("(∀xF(x))");
  });

  test("adds parentheses to formula starting with ∃", () => {
    const input = "∃xF(x)";
    expect(convert(input, "L28_1")).toBe("(∃xF(x))");
  });

  test("adds second set of parentheses to (A⇒B)", () => {
    const input = "(A⇒B)";
    expect(convert(input, "L28_1")).toBe("((A⇒B))");
  });

  test("adds parentheses to complex expression", () => {
    const input = "(∀x∃yA(x)∧B(y))⇔C(z)∧D(f(x),g(z))";
    expect(convert(input, "L28_1")).toBe("((∀x∃yA(x)∧B(y))⇔C(z)∧D(f(x),g(z)))");
  });

  test("throws error on extra parentheses in the end", () => {
    const input = "A)";
    expect(() => convert(input, "L28_1")).toThrow();
  });

  test("throws error on extra parentheses in the beginning", () => {
    const input = "(A";
    expect(() => convert(input, "L28_1")).toThrow();
  });

  test("throws error on expression with faulty token", () => {
    const input = "A \\vee B";
    expect(() => convert(input, "L28_1")).toThrow();
  });
});
