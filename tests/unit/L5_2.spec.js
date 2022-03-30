import convert from "@/js/Converter.js";

describe("L5_2 tests", () => {

    test("moves the parentheses to the left in A∧(B∧C)", () => {
        const input = "A∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("(A∧B)∧C");
    });

    test("moves the parentheses to the left in ¬A∧(B∧C)", () => {
        const input = "¬A∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("(¬A∧B)∧C");
    });

    test("moves the parentheses to the left in (A∧D)∧(B∧C)", () => {
        const input = "(A∧D)∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("((A∧D)∧B)∧C");
    });

    test("moves the parentheses to the left in (A⇒D)∧(B∧C)", () => {
        const input = "(A⇒D)∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("((A⇒D)∧B)∧C");
    });

    test("moves the parentheses to the left in (A⇔D)∧(B∧C)", () => {
        const input = "(A⇔D)∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("((A⇔D)∧B)∧C");
    });

    test("moves the parentheses to the left in ∀xF(x)∧(B∧C)", () => {
        const input = "∀xF(x)∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("(∀xF(x)∧B)∧C");
    });

    test("moves the parentheses to the left in ∃xF(x)∧(B∧C)", () => {
        const input = "∃xF(x)∧(B∧C)";
        expect(convert(input, "L5_2")).toBe("(∃xF(x)∧B)∧C");
    });

    test("moves the parentheses to the left in ∃xF(x)∧((∃xF(x)∧∀yG(y)∧H(x,f(z)))∧C)", () => {
        const input = "∃xF(x)∧((∃xF(x)∧∀yG(y)∧H(x,f(z)))∧C)";
        expect(convert(input, "L5_2")).toBe("(∃xF(x)∧(∃xF(x)∧∀yG(y)∧H(x,f(z))))∧C");
    });
    
    test("Returns null if the input is not in the form of F∧(G∧H)", () => {
        const input = "F∧(G⇔H)";
        expect(convert(input, "L5_2")).toBe(null);
    });

    test("Returns null if the input is not in the form of F∧(G∧H)", () => {
        const input = "F⇔(G∧H)";
        expect(convert(input, "L5_2")).toBe(null);
    });

});