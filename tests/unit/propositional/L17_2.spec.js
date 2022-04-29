import convert from "@/js/Converter.js";

describe("L17_2 tests", () => {
  test("turns disjunction of implications to equivalence (F⇒G)∧(G⇒F)", () => {
    const input = "(F⇒G)∧(G⇒F)";
    expect(convert(input, "L17_2")).toBe("F⇔G");
  });

  test("turns disjunction of implications to equivalence (A(x)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x))", () => {
    const input = "(A(x)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x))";
    expect(convert(input, "L17_2")).toBe("A(x)⇔B(y,f(z))");
  });

  test("turns disjunction of implications to equivalence (¬A(x)⇒¬B(y,f(z)))∧(¬B(y,f(z))⇒¬A(x))", () => {
    const input = "(¬A(x)⇒¬B(y,f(z)))∧(¬B(y,f(z))⇒¬A(x))";
    expect(convert(input, "L17_2")).toBe("¬A(x)⇔¬B(y,f(z))");
  });

  test("turns disjunction of implications to equivalence (A(x)∧C(t)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x)∧C(t))", () => {
    const input = "(A(x)∧C(t)⇒B(y,f(z)))∧(B(y,f(z))⇒A(x)∧C(t))";
    expect(convert(input, "L17_2")).toBe("A(x)∧C(t)⇔B(y,f(z))");
  });

  test("turns disjunction of implications to equivalence (A(x)∨B(y)⇒C(z))∧(C(z)⇒A(x)∨B(y))", () => {
    const input = "(A(x)∨B(y)⇒C(z))∧(C(z)⇒A(x)∨B(y))";
    expect(convert(input, "L17_2")).toBe("A(x)∨B(y)⇔C(z)");
  });

  test("turns disjunction of implications to equivalence ((∀xA(x)⇒B(y))⇒¬C(z))∧(¬C(z)⇒(∀xA(x)⇒B(y)))", () => {
    const input = "((∀xA(x)⇒B(y))⇒¬C(z))∧(¬C(z)⇒(∀xA(x)⇒B(y)))";
    expect(convert(input, "L17_2")).toBe("(∀xA(x)⇒B(y))⇔¬C(z)");
  });

  test("turns disjunction of implications to equivalence (∀xA(x)⇒(∃xB(x)⇔C(y)))∧((∃xB(x)⇔C(y))⇒∀xA(x))", () => {
    const input = "(∀xA(x)⇒(∃xB(x)⇔C(y)))∧((∃xB(x)⇔C(y))⇒∀xA(x))";
    expect(convert(input, "L17_2")).toBe("∀xA(x)⇔(∃xB(x)⇔C(y))");
  });

  test("turns disjunction of implications to equivalence (¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒∃zA(x,z))∧(∃zA(x,z)⇒¬∃x∀y(F(x)⇒G(y)∧H(z,g(t))))", () => {
    const input =
      "(¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇒∃zA(x,z))∧(∃zA(x,z)⇒¬∃x∀y(F(x)⇒G(y)∧H(z,g(t))))";
    expect(convert(input, "L17_2")).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))⇔∃zA(x,z)");
  });

  test("returns null if input is not in the form of (F⇒G)∧(G⇒F)", () => {
    const input = "F";
    expect(convert(input, "L17_2")).toBe(null);
  });

  test("returns null if input is not in the form of (F⇒G)∧(G⇒F)", () => {
    const input = "F⇔G";
    expect(convert(input, "L17_2")).toBe(null);
  });

  test("returns null with G∧(G⇒F)", () => {
    const input = "G∧(G⇒F)";
    expect(convert(input, "L17_2")).toBe(null);
  });

  test("returns null with (F⇒G)∧(G∨F)", () => {
    const input = "(F⇒G)∧(G∨F)";
    expect(convert(input, "L17_2")).toBe(null);
  });

  test("returns null with (F⇒G)∧(G⇒H)", () => {
    const input = "(F⇒G)∧(G⇒H)";
    expect(convert(input, "L17_2")).toBe(null);
  });
});
