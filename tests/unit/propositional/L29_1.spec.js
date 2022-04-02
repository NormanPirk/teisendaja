import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L29_1 tests", () => {

    test("creates conjunction with tautology of F and G", () => {
        const input = "F";
        const newFormula = "G";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧(G∨¬G)");
    });

    test("creates conjunction with tautology of F and ¬G", () => {
        const input = "F";
        const newFormula = "¬G";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧(¬G∨¬¬G)");
    });

    test("creates conjunction with tautology of F and G∧H", () => {
        const input = "F";
        const newFormula = "G∧H";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧(G∧H∨¬(G∧H))");
    });

    test("creates conjunction with tautology of F and G∨H", () => {
        const input = "F";
        const newFormula = "G∨H";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧(G∨H∨¬(G∨H))");
    });

    test("creates conjunction with tautology of F and ∀xF(x)⇒H", () => {
        const input = "F";
        const newFormula = "∀xF(x)⇒H";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧((∀xF(x)⇒H)∨¬(∀xF(x)⇒H))");
    });

    test("creates conjunction with tautology of F and ∃xF(x)⇔H", () => {
        const input = "F";
        const newFormula = "∃xF(x)⇔H";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧((∃xF(x)⇔H)∨¬(∃xF(x)⇔H))");
    });

    test("creates conjunction with tautology of F and ∃xF(x)⇔∀yG(y)∧H(x,f(z))", () => {
        const input = "F";
        const newFormula = "∃xF(x)⇔∀yG(y)∧H(x,f(z))";
        let result = convert(input, "L29_1");
        result = handleNewFormula("L29_1", newFormula, result);
        expect(result).toBe("F∧((∃xF(x)⇔∀yG(y)∧H(x,f(z)))∨¬(∃xF(x)⇔∀yG(y)∧H(x,f(z))))");
    });

});