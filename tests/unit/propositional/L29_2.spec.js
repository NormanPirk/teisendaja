import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";

describe("L29_2 tests", () => {

    test("removes tautology from conjunction F∧(G∨¬G)", () => {
        const input = "F∧(G∨¬G)";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧(¬G∨¬¬G)", () => {
        const input = "F∧(¬G∨¬¬G)";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧(G∧H∨¬(G∧H))", () => {
        const input = "F∧(G∧H∨¬(G∧H))";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧(G∨H∨¬(G∨H))", () => {
        const input = "F∧(G∨H∨¬(G∨H))";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧((∀xF(x)⇒H)∨¬(∀xF(x)⇒H))", () => {
        const input = "F∧((∀xF(x)⇒H)∨¬(∀xF(x)⇒H))";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧((∃xF(x)⇔H)∨¬(∃xF(x)⇔H))", () => {
        const input = "F∧((∃xF(x)⇔H)∨¬(∃xF(x)⇔H))";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("removes tautology from conjunction F∧((∃xF(x)⇔∀yG(y)∧H(x,f(z)))∨¬(∃xF(x)⇔∀yG(y)∧H(x,f(z))))", () => {
        const input = "F∧((∃xF(x)⇔∀yG(y)∧H(x,f(z)))∨¬(∃xF(x)⇔∀yG(y)∧H(x,f(z))))";
        expect(convert(input, "L29_2")).toBe("F");
    });

    test("returns null if there is no tautology F∧((∃xF(x)⇔H)∨¬(∃xF(x)⇔G))", () => {
        const input = "F∧((∃xF(x)⇔H)∨¬(∃xF(x)⇔G))";
        expect(convert(input, "L29_2")).toBe(null);
    });

});