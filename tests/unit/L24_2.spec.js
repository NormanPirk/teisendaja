import convert from "@/js/Converter.js";

describe("L24_2 tests", () => {
  
  test("turns into disjunction with 0 F", () => {
    const input = "F";
    expect(convert(input, "L24_2")).toBe("F∨0");
  });

  test("turns into disjunction with 0 ¬F(x)", () => {
    const input = "¬F(x)";
    expect(convert(input, "L24_2")).toBe("¬F(x)∨0");
  });

  test("turns into disjunction with 0 ¬F(x)∧G(y)", () => {
    const input = "¬F(x)∧G(y)";
    expect(convert(input, "L24_2")).toBe("¬F(x)∧G(y)∨0");
  });

  test("turns into disjunction with 0 F(x)∨G(y)", () => {
    const input = "F(x)∨G(y)";
    expect(convert(input, "L24_2")).toBe("F(x)∨G(y)∨0");
  });

  test("turns into disjunction with 0 F(x)⇒G(y)", () => {
    const input = "F(x)⇒G(y)";
    expect(convert(input, "L24_2")).toBe("(F(x)⇒G(y))∨0");
  });

  test("turns into disjunction with 0 F(x)⇔G(y)", () => {
    const input = "F(x)⇔G(y)";
    expect(convert(input, "L24_2")).toBe("(F(x)⇔G(y))∨0");
  });

  test("turns into disjunction with 0 ∀xF(x)", () => {
    const input = "∀xF(x)";
    expect(convert(input, "L24_2")).toBe("∀xF(x)∨0");
  });

  test("turns into disjunction with 0 ∃xF(x)", () => {
    const input = "∃xF(x)";
    expect(convert(input, "L24_2")).toBe("∃xF(x)∨0");
  });

  test("turns into disjunction with 0 ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))";
    expect(convert(input, "L24_2")).toBe("∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∨0");
  });

});