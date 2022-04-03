import convert from "@/js/Converter.js";

describe("L23_1 tests", () => {
  test("simplifies F∧1", () => {
    const input = "F∧1";
    expect(convert(input, "L23_1")).toBe("F");
  });

  test("simplifies ¬F(x)∧1", () => {
    const input = "¬F(x)∧1";
    expect(convert(input, "L23_1")).toBe("¬F(x)");
  });

  test("simplifies ¬F(x)∧G(y)∧1", () => {
    const input = "¬F(x)∧G(y)∧1";
    expect(convert(input, "L23_1")).toBe("¬F(x)∧G(y)");
  });

  test("simplifies (F(x)∨G(y))∧1", () => {
    const input = "(F(x)∨G(y))∧1";
    expect(convert(input, "L23_1")).toBe("(F(x)∨G(y))");
  });

  test("simplifies (F(x)⇒G(y))∧1", () => {
    const input = "(F(x)⇒G(y))∧1";
    expect(convert(input, "L23_1")).toBe("(F(x)⇒G(y))");
  });

  test("simplifies (F(x)⇔G(y))∧1", () => {
    const input = "(F(x)⇔G(y))∧1";
    expect(convert(input, "L23_1")).toBe("(F(x)⇔G(y))");
  });

  test("simplifies ∀xF(x)∧1", () => {
    const input = "∀xF(x)∧1";
    expect(convert(input, "L23_1")).toBe("∀xF(x)");
  });

  test("simplifies ∃xF(x)∧1", () => {
    const input = "∃xF(x)∧1";
    expect(convert(input, "L23_1")).toBe("∃xF(x)");
  });

  test("simplifies ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∧1", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∧1";
    expect(convert(input, "L23_1")).toBe("∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))");
  });

  test("returns null if input is not in the form of F∧1", () => {
    const input = "1∧F";
    expect(convert(input, "L23_1")).toBe(null);
  });
});
