import convert from "@/js/Converter.js";

describe("L4_1 tests", () => {
  test("moves the parentheses to the right in (A∧B)∧C", () => {
    const input = "(A∧B)∧C";
    expect(convert(input, "L4_1")).toBe("A∧(B∧C)");
  });

  test("moves the parentheses to the right in (¬A∧B)∧C", () => {
    const input = "(¬A∧B)∧C";
    expect(convert(input, "L4_1")).toBe("¬A∧(B∧C)");
  });

  test("moves the parentheses to the right in ((A∨D)∧B)∧C", () => {
    const input = "((A∨D)∧B)∧C";
    expect(convert(input, "L4_1")).toBe("(A∨D)∧(B∧C)");
  });

  test("moves the parentheses to the right in ((A⇒D)∧B)∧C", () => {
    const input = "((A⇒D)∧B)∧C";
    expect(convert(input, "L4_1")).toBe("(A⇒D)∧(B∧C)");
  });

  test("moves the parentheses to the right in ((A⇔D)∧B)∧C", () => {
    const input = "((A⇔D)∧B)∧C";
    expect(convert(input, "L4_1")).toBe("(A⇔D)∧(B∧C)");
  });

  test("moves the parentheses to the right in (∀xF(x)∧B)∧C", () => {
    const input = "(∀xF(x)∧B)∧C";
    expect(convert(input, "L4_1")).toBe("∀xF(x)∧(B∧C)");
  });

  test("moves the parentheses to the right in (∃xF(x)∧B)∧C", () => {
    const input = "(∃xF(x)∧B)∧C";
    expect(convert(input, "L4_1")).toBe("∃xF(x)∧(B∧C)");
  });

  test("moves the parentheses to the right in (∃xF(x)∧B)∧∀xH(x,f(z))", () => {
    const input = "(∃xF(x)∧B)∧∀xH(x,f(z))";
    expect(convert(input, "L4_1")).toBe("∃xF(x)∧(B∧∀xH(x,f(z)))");
  });

  test("Returns null if the input is not in the form of (F∧G)∧H", () => {
    const input = "(F∧G)⇔H";
    expect(convert(input, "L4_1")).toBe(null);
  });

  test("Returns null if the input is not in the form of (F∧G)∧H", () => {
    const input = "(F⇔G)∧H";
    expect(convert(input, "L4_1")).toBe(null);
  });

  test("Returns null with (F∧G)⇒H", () => {
    const input = "(F∧G)⇒H";
    expect(convert(input, "L4_1")).toBe(null);
  });

  test("Returns null with F∧G", () => {
    const input = "F∧G";
    expect(convert(input, "L4_1")).toBe(null);
  });


});
