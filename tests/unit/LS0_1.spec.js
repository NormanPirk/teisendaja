import convert from "../../src/ANTLR/Converter.js";

describe("LS0_1 tests", () => {

    test("adds parentheses to A", () => {
        const input = "A";
        expect(convert(input, 'LS0_1')).toBe("(A)");
    });

    test("adds second set of parentheses to (A⇒B)", () => {
        const input = "(A⇒B)";
        expect(convert(input, 'LS0_1')).toBe("((A⇒B))");
    });

    test("adds parentheses to complex expression", () => {
        const input = "(∀x∃yA(x)∧B(y))⇔C(z)∧D(f(x),g(z))";
        expect(convert(input, 'LS0_1')).toBe("((∀x∃yA(x)∧B(y))⇔C(z)∧D(f(x),g(z)))");
    });

    test("throws error on extra parentheses in the end", () => {
        const input = "A)";       
        expect(() => convert(input, 'LS0_1')).toThrow();
    });

    test("throws error on extra parentheses in the beginning", () => {
        const input = "(A";       
        expect(() => convert(input, 'LS0_1')).toThrow();
    });

    test("throws error on expression with faulty token", () => {
        const input = "A \\vee B";       
        expect(() => convert(input, 'LS0_1')).toThrow();
    });

  });