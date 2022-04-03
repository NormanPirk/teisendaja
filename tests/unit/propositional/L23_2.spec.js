import convert from "@/js/Converter.js";

describe("L23_2 tests", () => {
  test("turns into conjunction with 1 F", () => {
    const input = "F";
    expect(convert(input, "L23_2")).toBe("F∧1");
  });

  test("turns into conjunction with 1 ¬F(x)", () => {
    const input = "¬F(x)";
    expect(convert(input, "L23_2")).toBe("¬F(x)∧1");
  });

  test("turns into conjunction with 1 ¬F(x)∧G(y)", () => {
    const input = "¬F(x)∧G(y)";
    expect(convert(input, "L23_2")).toBe("¬F(x)∧G(y)∧1");
  });

  test("turns into conjunction with 1 F(x)∨G(y)", () => {
    const input = "F(x)∨G(y)";
    expect(convert(input, "L23_2")).toBe("(F(x)∨G(y))∧1");
  });

  test("turns into conjunction with 1 F(x)⇒G(y)", () => {
    const input = "F(x)⇒G(y)";
    expect(convert(input, "L23_2")).toBe("(F(x)⇒G(y))∧1");
  });

  test("turns into conjunction with 1 F(x)⇔G(y)", () => {
    const input = "F(x)⇔G(y)";
    expect(convert(input, "L23_2")).toBe("(F(x)⇔G(y))∧1");
  });

  test("turns into conjunction with 1 ∀xF(x)", () => {
    const input = "∀xF(x)";
    expect(convert(input, "L23_2")).toBe("∀xF(x)∧1");
  });

  test("turns into conjunction with 1 ∃xF(x)", () => {
    const input = "∃xF(x)";
    expect(convert(input, "L23_2")).toBe("∃xF(x)∧1");
  });

  test("turns into conjunction with 1 ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))";
    expect(convert(input, "L23_2")).toBe("∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∧1");
  });
});
