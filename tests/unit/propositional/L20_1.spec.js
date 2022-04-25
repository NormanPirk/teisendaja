import convert from "@/js/Converter.js";

describe("L20_1 tests", () => {
  test("removes contradiction from disjunction F∨G∧¬G", () => {
    const input = "F∨G∧¬G";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction F∨¬G∧¬¬G", () => {
    const input = "F∨¬G∧¬¬G";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction F∨(G∧H)∧¬(G∧H)", () => {
    const input = "F∨(G∧H)∧¬(G∧H)";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction (G∨H)∧¬(G∨H)∨F", () => {
    const input = "(G∨H)∧¬(G∨H)∨F";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction F∨(∀xF(x)⇒H)∧¬(∀xF(x)⇒H)", () => {
    const input = "F∨(∀xF(x)⇒H)∧¬(∀xF(x)⇒H)";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction F∨(∃xF(x)⇔H)∧¬(∃xF(x)⇔H)", () => {
    const input = "F∨(∃xF(x)⇔H)∧¬(∃xF(x)⇔H)";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("removes contradiction from disjunction F∨(∃xF(x)⇔∀yG(y)∧H(x,f(z)))∧¬(∃xF(x)⇔∀yG(y)∧H(x,f(z)))", () => {
    const input = "F∨(∃xF(x)⇔∀yG(y)∧H(x,f(z)))∧¬(∃xF(x)⇔∀yG(y)∧H(x,f(z)))";
    expect(convert(input, "L20_1")).toBe("F");
  });

  test("returns null if there is no contradiction F∨G∧¬H", () => {
    const input = "F∨G∧¬H";
    expect(convert(input, "L20_1")).toBe(null);
  });
});
