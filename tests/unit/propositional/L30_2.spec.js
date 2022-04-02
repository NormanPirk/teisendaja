import convert from "@/js/Converter.js";

describe("L30_1 tests", () => {
  test("removes parentheses from predicate", () => {
    const input = "(A(x,y,z))";
    expect(convert(input, "L30_2")).toBe("A(x,y,z)");
  });

  test("removes parentheses from negation", () => {
    const input = "(¬A)";
    expect(convert(input, "L30_2")).toBe("¬A");
  });

  test("removes parentheses from conjunction", () => {
    const input = "(A∧B)";
    expect(convert(input, "L30_2")).toBe("A∧B");
  });

  test("removes parentheses from disjunction", () => {
    const input = "(A∨B)";
    expect(convert(input, "L30_2")).toBe("A∨B");
  });

  test("removes parentheses from implication", () => {
    const input = "(A⇒B)";
    expect(convert(input, "L30_2")).toBe("A⇒B");
  });

  test("removes parentheses from equivalence", () => {
    const input = "(A⇔B)";
    expect(convert(input, "L30_2")).toBe("A⇔B");
  });

  test("removes parentheses from formula starting with ∀", () => {
    const input = "(∀xF(x))";
    expect(convert(input, "L30_2")).toBe("∀xF(x)");
  });

  test("removes parentheses from formula starting with ∃", () => {
    const input = "(∃xF(x))";
    expect(convert(input, "L30_2")).toBe("∃xF(x)");
  });

  test("removes parentheses from complex expression", () => {
    const input = "(∃x∀y(F(x)⇔G(y))∧∀zH(x,y,z))";
    expect(convert(input, "L30_2")).toBe("∃x∀y(F(x)⇔G(y))∧∀zH(x,y,z)");
  });

  test("returns null on expression that does not have parentheses surrounding it", () => {
    const input = "(A∧¬B)∨C";
    expect(convert(input, "L30_2")).toBe(null);
  });
});
