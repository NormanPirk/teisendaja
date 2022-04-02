import convert from "@/js/Converter.js";

describe("L29_2 tests", () => {
  
  test("adds two negations in front of the formula  F", () => {
    const input = "F";
    expect(convert(input, "L29_2")).toBe("¬¬F");
  });

  test("adds two negations in front of the formula  ¬F(x)", () => {
    const input = "¬F(x)";
    expect(convert(input, "L29_2")).toBe("¬¬¬F(x)");
  });

  test("adds two negations in front of the formula  ¬F(x)∧G(y)", () => {
    const input = "¬F(x)∧G(y)";
    expect(convert(input, "L29_2")).toBe("¬¬(¬F(x)∧G(y))");
  });

  test("adds two negations in front of the formula  F(x)∨G(y)", () => {
    const input = "F(x)∨G(y)";
    expect(convert(input, "L29_2")).toBe("¬¬(F(x)∨G(y))");
  });

  test("adds two negations in front of the formula  F(x)⇒G(y)", () => {
    const input = "F(x)⇒G(y)";
    expect(convert(input, "L29_2")).toBe("¬¬(F(x)⇒G(y))");
  });

  test("adds two negations in front of the formula  F(x)⇔G(y)", () => {
    const input = "F(x)⇔G(y)";
    expect(convert(input, "L29_2")).toBe("¬¬(F(x)⇔G(y))");
  });

  test("adds two negations in front of the formula  ∀xF(x)", () => {
    const input = "∀xF(x)";
    expect(convert(input, "L29_2")).toBe("¬¬∀xF(x)");
  });

  test("adds two negations in front of the formula  ∃xF(x)", () => {
    const input = "∃xF(x)";
    expect(convert(input, "L29_2")).toBe("¬¬∃xF(x)");
  });

  test("adds two negations in front of the formula  ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))";
    expect(convert(input, "L29_2")).toBe("¬¬∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))");
  });

});