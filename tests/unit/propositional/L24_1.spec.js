import convert from "@/js/Converter.js";

describe("L24_1 tests", () => {
  
  test("simplifies F∨1", () => {
    const input = "F∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies ¬F(x)∨1", () => {
    const input = "¬F(x)∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies ¬F(x)∧G(y)∨1", () => {
    const input = "¬F(x)∧G(y)∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies F(x)∨G(y)∨1", () => {
    const input = "F(x)∨G(y)∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies (F(x)⇒G(y))∨1", () => {
    const input = "(F(x)⇒G(y))∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies (F(x)⇔G(y))∨1", () => {
    const input = "(F(x)⇔G(y))∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies ∀xF(x)∨1", () => {
    const input = "∀xF(x)∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies ∃xF(x)∨1", () => {
    const input = "∃xF(x)∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("simplifies ∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∨1", () => {
    const input = "∃x(F(x)⇒∀yG(y)⇔∃zH(z,f(y)))∨1";
    expect(convert(input, "L24_1")).toBe("1");
  });

  test("returns null if input is not in the form of F∨1", () => {
    const input = "1∨F";
    expect(convert(input, "L24_1")).toBe(null);
  });

});