import Formula from "@/js/Formula.js";

describe("Tests regarding formula object", () => {

    test("returns correct information about start, underlined, end and applied conversion", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input, 0, 3, "L3");

        expect(formula.getStart()).toBe("");
        expect(formula.getUnderlined()).toBe("A∧B");
        expect(formula.getEnding()).toBe("⇒C");
        expect(formula.getAppliedConversion()).toBe("L3");

    });

    test("returns correct information about start, underlined, end and applied conversion", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input);

        expect(formula.getStart()).toBe("A∧B⇒C");
        expect(formula.getUnderlined()).toBe("");
        expect(formula.getEnding()).toBe("");
        expect(formula.getAppliedConversion()).toBe("");

    });

    test("returns correct TeX", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input, 0, 3, "L3");

        expect(formula.toTex()).toBe("\\underline{A\\land B}\\Rightarrow C^{\\;\\;\\;L3}");
    });

    test("returns correct TeX", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input);

        expect(formula.toTex()).toBe("A\\land B\\Rightarrow C");
    });

    test("returns correct PDF", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input);

        expect(formula.getPDFContent(false)).toStrictEqual({text: [
            { text: "A∧B⇒C" },
            { text: "", decoration: "underline" },
            "",
            { text: "\t\n", style: "small"}
        ]});
    });

    test("returns correct PDF", () => {
        const input = "A∧B⇒C";
        const formula = new Formula(input, 0, 3, "L3");

        expect(formula.getPDFContent(true)).toStrictEqual({text: [
            { text: "≡\t" },
            { text: "A∧B", decoration: "underline" },
            "⇒C",
            { text: "\tL3\n", style: "small"}
        ]});
    });

});