import convert from "@/js/Converter.js";

describe("L25_1 tests", () => {
  test("simplifies F∧0", () => {
    const input = "F∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies ¬F(x)∧0", () => {
    const input = "¬F(x)∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies ¬F(x)∧G(y)∧0", () => {
    const input = "¬F(x)∧G(y)∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies (F(x)∨G(y))∧0", () => {
    const input = "(F(x)∨G(y))∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies (F(x)⇒G(y))∧0", () => {
    const input = "(F(x)⇒G(y))∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies (F(x)⇔G(y))∧0", () => {
    const input = "(F(x)⇔G(y))∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies ∀xF(x)∧0", () => {
    const input = "∀xF(x)∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies ∃xF(x)∧0", () => {
    const input = "∃xF(x)∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∧0", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∧0";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("simplifies F∧0", () => {
    const input = "0∧F";
    expect(convert(input, "L25_1")).toBe("0");
  });

  test("returns null if input is not in the form of F∧0", () => {
    const input = "0∨F";
    expect(convert(input, "L25_1")).toBe(null);
  });
});
