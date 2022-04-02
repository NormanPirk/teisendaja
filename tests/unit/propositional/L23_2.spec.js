import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L23_2 tests", () => {

    test("turns 0 into conjunction with a new formula F", () => {
        const input = "0";
        const newFormula = "F";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("F∧0");
    });

    test("turns 0 into conjunction with a new formula F∧G", () => {
        const input = "0";
        const newFormula = "F∧G";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("F∧G∧0");
    });

    test("turns 0 into conjunction with a new formula A(x)∨B(y)", () => {
        const input = "0";
        const newFormula = "A(x)∨B(y)";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("(A(x)∨B(y))∧0");
    });

    test("turns 0 into conjunction with a new formula ∀xA(x)⇒B(y)", () => {
        const input = "0";
        const newFormula = "∀xA(x)⇒B(y)";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("(∀xA(x)⇒B(y))∧0");
    });

    test("turns 0 into conjunction with a new formula A(x)⇔∃xB(y)", () => {
        const input = "0";
        const newFormula = "A(x)⇔∃xB(y)";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("(A(x)⇔∃xB(y))∧0");
    });

    test("turns 0 into conjunction with a new formula ¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))", () => {
        const input = "0";
        const newFormula = "¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))";
        let result = convert(input, "L23_2");
        result = handleNewFormula("L23_2", newFormula, result);
        expect(result).toBe("¬∃x∀y(F(x)⇒G(y)∧H(z,g(t)))∧0");
    });

    test("returns null if input is not 0", () => {
        const input = "F";
        expect(convert(input, "L23_2")).toBe(null);
    });

});