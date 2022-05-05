import texAndDigitsToMathSymbols, {
  mathSymbolsToTex,
} from "@/js/MathSymbolConverter.js";

describe("Tests regarding symbol conversions", () => {
  test("replaces \\neg and 2 with ¬", () => {
    const input = "\\neg2A";
    expect(texAndDigitsToMathSymbols(input)).toBe("¬¬A");
  });

  test("replaces \\land, \\wedge, \\& and 3 with ∧", () => {
    const input = "A\\landB\\wedgeC\\&D3E";
    expect(texAndDigitsToMathSymbols(input)).toBe("A∧B∧C∧D∧E");
  });

  test("replaces \\lor, \\vee and 4 with ∨", () => {
    const input = "A\\lorB\\veeC4D";
    expect(texAndDigitsToMathSymbols(input)).toBe("A∨B∨C∨D");
  });

  test("replaces \\Rightarrow, \\implies and 5 with ⇒", () => {
    const input = "A\\RightarrowB\\impliesC5D";
    expect(texAndDigitsToMathSymbols(input)).toBe("A⇒B⇒C⇒D");
  });

  test("replaces \\Leftrightarrow, \\iff and 6 with ⇔", () => {
    const input = "A\\LeftrightarrowB\\iffC6D";
    expect(texAndDigitsToMathSymbols(input)).toBe("A⇔B⇔C⇔D");
  });

  test("replaces \\forall and 7 with ∀, \\exists and 8 with ∃", () => {
    const input = "\\forallx\\existsy7z8uA(x,y,z,u)";
    expect(texAndDigitsToMathSymbols(input)).toBe("∀x∃y∀z∃uA(x,y,z,u)");
  });

  test("replaces symbols with TeX", () => {
    const input = "∀x∃y(A(x)∧¬B(y))∨C⇒D⇔H";
    expect(mathSymbolsToTex(input)).toBe(
      "\\forall x\\exists y(A(x)\\land \\neg B(y))\\lor C\\Rightarrow D\\Leftrightarrow H"
    );
  });
});
