import convert from "@/js/Converter.js";

describe("L27_1 tests", () => {
  test("removes negations from ¬¬A", () => {
    const input = "¬¬A";
    expect(convert(input, "L27_1")).toBe("A");
  });

  test("removes negations from ¬¬(A∧B)", () => {
    const input = "¬¬(A∧B)";
    expect(convert(input, "L27_1")).toBe("(A∧B)");
  });

  test("removes negations from ¬¬(A∨B)", () => {
    const input = "¬¬(A∨B)";
    expect(convert(input, "L27_1")).toBe("(A∨B)");
  });

  test("removes negations from ¬¬(A(x)⇒B(y))", () => {
    const input = "¬¬(A(x)⇒B(y))";
    expect(convert(input, "L27_1")).toBe("(A(x)⇒B(y))");
  });

  test("removes negations from ¬¬(A(x)⇔B(y))", () => {
    const input = "¬¬(A(x)⇔B(y))";
    expect(convert(input, "L27_1")).toBe("(A(x)⇔B(y))");
  });

  test("removes negations from ¬¬∀xA(x,y)", () => {
    const input = "¬¬∀xA(x,y)";
    expect(convert(input, "L27_1")).toBe("∀xA(x,y)");
  });

  test("removes negations from ¬¬∃xA(x,y)", () => {
    const input = "¬¬∃xA(x,y)";
    expect(convert(input, "L27_1")).toBe("∃xA(x,y)");
  });

  test("removes negations from ¬¬¬A", () => {
    const input = "¬¬¬A";
    expect(convert(input, "L27_1")).toBe("¬A");
  });

  test("returns null when input is not double negation", () => {
    const input = "¬¬A⇒¬B";
    expect(convert(input, "L27_1")).toBe(null);
  });

  test("returns null with ¬A", () => {
    const input = "¬A";
    expect(convert(input, "L27_1")).toBe(null);
  });
});
