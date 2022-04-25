import convert from "@/js/Converter.js";

describe("P13 tests", () => {
  test("switches places for quantifiers x in ∀x∀yF(x,y)", () => {
    const input = "∀x∀yF(x,y)";
    expect(convert(input, "P13")).toBe("∀y∀xF(x,y)");
  });

  test("renames x in ∀z∀u(F(x,y)∧G(z,u)⇔H)", () => {
    const input = "∀z∀u(F(x,y)∧G(z,u)⇔H)";
    expect(convert(input, "P13")).toBe("∀u∀z(F(x,y)∧G(z,u)⇔H)");
  });

  test("returns null if input is not in the form of ∀x∀yF(x,y)", () => {
    const input = "∀x∀yF(x,y)∧G(z,u)";
    expect(convert(input, "P13")).toBe(null);
  });

  test("returns null if input is not in the form of ∀x∀yF(x,y)", () => {
    const input = "∀xF(x,y)";
    expect(convert(input, "P13")).toBe(null);
  });
});
