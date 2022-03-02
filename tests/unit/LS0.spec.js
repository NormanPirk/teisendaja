import convert from "../../src/ANTLR/Converter";

describe("LS0 tests", () => {

    test("removes parentheses from (A)", () => {
      const input = "(A)";
      expect(convert(input, 'LS0')).toBe("A");
    });

    test("adds parentheses to A", () => {
        const input = "A";
        expect(convert(input, 'LS0')).toBe("(A)");
    });

    test("adds parentheses to complex expression", () => {
        const input = "(\\forall x\\exists yA(x)\\land B(y))\\Leftrightarrow C(z)\\lor D(f(x),g(z))";
        expect(convert(input, 'LS0')).toBe("((\\forall x\\exists yA(x)\\land B(y))\\Leftrightarrow C(z)\\lor D(f(x),g(z)))");
    });

    test("removes parentheses from a complex expression", () => {
        const input = "((\\forall x\\exists yA(x)\\land B(y))\\Leftrightarrow C(z)\\lor D(f(x),g(z)))";
        expect(convert(input, 'LS0')).toBe("(\\forall x\\exists yA(x)\\land B(y))\\Leftrightarrow C(z)\\lor D(f(x),g(z))");
    });

    test("throws error on extra parentheses in the end", () => {
        const input = "A)";       
        expect(() => convert(input, 'LS0')).toThrow();
    });

    test("throws error on extra parentheses in the beginning", () => {
        const input = "(A";       
        expect(() => convert(input, 'LS0')).toThrow();
    });

    test("throws error on expression with faulty token", () => {
        const input = "A \\vee B";       
        expect(() => convert(input, 'LS0')).toThrow();
    });

  });