import convert from "../../src/js/Converter.js";

describe("LS1_1 tests", () => {

    test("simplifies simple predicate", () => {
        const input = "A(x)∧A(x)";
        expect(convert(input, 'LS1_1')).toBe("A(x)");
    });

    test("simplifies predicate with negation", () => {
        const input = "¬A(x)∧¬A(x)";
        expect(convert(input, 'LS1_1')).toBe("¬A(x)");
    });

    test("simplifies conjunction in parentheses", () => {
        const input = "(A∧B)∧(A∧B)";
        expect(convert(input, 'LS1_1')).toBe("(A∧B)");
    });

    test("simplifies disjunction in parentheses", () => {
        const input = "(A∨B)∧(A∨B)";
        expect(convert(input, 'LS1_1')).toBe("(A∨B)");
    });

    test("simplifies implication in parentheses", () => {
        const input = "(A⇒B)∧(A⇒B)";
        expect(convert(input, 'LS1_1')).toBe("(A⇒B)");
    });

    test("simplifies equivalence in parentheses", () => {
        const input = "(A⇔B)∧(A⇔B)";
        expect(convert(input, 'LS1_1')).toBe("(A⇔B)");
    });

    test("simplifies predicate with ∀", () => {
        const input = "∀xF(x)∧∀xF(x)";
        expect(convert(input, 'LS1_1')).toBe("∀xF(x)");
    });
    
    test("simplifies predicate with ∃", () => {
        const input = "∃xF(x)∧∃xF(x)";
        expect(convert(input, 'LS1_1')).toBe("∃xF(x)");
    });

    test("simplifies complex expression", () => {
        const input = "∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))∧∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))";
        expect(convert(input, 'LS1_1')).toBe("∀x∃y∀z(F(x)∧G(y,z)⇒A(t,u,v,f(w)))");
    });

    test("returns null when left and right side don't match", () => {
        const input = "(A∨B)∧(A∨C)";
        expect(convert(input, 'LS1_1')).toBe(null);
    });

    test("returns null when main operation is not conjunction", () => {
        const input = "(A∨B)⇒(A∨B)";
        expect(convert(input, 'LS1_1')).toBe(null);
    });

});