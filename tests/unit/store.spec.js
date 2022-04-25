import store from "@/store/index.js";
import Formula from "@/js/Formula.js";
import matchInput from "@/js/InputMatcher.js";

describe("Tests related to state", () => {

    afterEach(() => {
        store.replaceState({
            formula: "",
            formulas: [],
            newFormula: "",
            filename: "",
            askNewFormula: false,
            askFilename: false,
            incorrectNewFormula: false,
            converted: false,
            noInput: false,
            faultyInput: false,
            notSubformula: false,
            faultyConversion: false,
            noSubformula: false,
            conversionNotAllowed: false,
            errorWithConversion: false,
            inputFileError: false,
            showHelp: false,
            invalidFilename: false,
            selectionNotFromCorrectField: false,
            selectedConversion: "",
          });
    });

    test("adds new formula to state", () => {
        const formula = new Formula("F(x)∧¬G(y)∧1");
        store.commit("updateFormula", formula.formula);
        store.commit("addFormula");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([formula]));
    });

    test("does not add empty formula to state", () => {
        const formula = new Formula("");
        store.commit("updateFormula", formula.formula);
        store.commit("addFormula");
        expect(store.getters.formula).toBe("");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([]));
    });

    test("removes the last formula from the state and keeps the initial input as formula", () => {
        const formula = new Formula("F(x)∧¬G(y)∧1");
        store.commit("updateFormula", formula.formula);
        store.commit("addFormula");
        store.commit("removeLast");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([]));
    });

    test("removes the last formula from the state and keeps the penultimate formula as formula", () => {
        const formula1 = new Formula("F(x)∧¬G(y)∧1");
        const formula2 = new Formula("F(x)∧1∧¬G(y)")
        store.commit("updateFormula", formula1.formula);
        store.commit("addFormula");
        store.commit("updateFormula", formula2.formula);
        store.commit("addFormula");
        store.commit("removeLast");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([formula1]));
    });

    test("does not remove anything if no formulas have been added", () => {
        const formula = new Formula("F(x)∧¬G(y)∧1");
        store.commit("updateFormula", formula.formula);
        store.commit("removeLast");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([]));
    });

    test("does not remove anything if no formulas have been added", () => {
        const formula = new Formula("F(x)∧¬G(y)∧1");
        store.commit("updateFormula", formula.formula);
        store.commit("removeAll");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([]));
    });

    test("removes all formulas and keeps the first one as input", () => {
        const formula1 = new Formula("F(x)∧¬G(y)∧1");
        const formula2 = new Formula("F(x)∧1∧¬G(y)")
        store.commit("updateFormula", formula1.formula);
        store.commit("addFormula");
        store.commit("updateFormula", formula2.formula);
        store.commit("addFormula");
        store.commit("removeAll");
        expect(store.getters.formula).toBe("F(x)∧¬G(y)∧1");
        expect(store.getters.formulas).toEqual(expect.arrayContaining([]));
    });
    
    test("adds new formula (received from a conversion) to state", () => {
        const newSubformula = "A";
        store.commit("updateNewFormula", newSubformula);
        expect(store.getters.newFormula).toBe("A");
    });

    test("adds filename to state and removes it", () => {
        const filename = "testing_filename";
        store.commit("setFilename", filename);
        expect(store.getters.filename).toBe("testing_filename");
        store.commit("clearFilename");
        expect(store.getters.filename).toBe("");
    });

    test("changes the flag for asking new formula", () => {
        store.commit("setAskNewFormulaTrue");
        expect(store.getters.askNewFormula).toBeTruthy();
        store.commit("newFormulaAdded");
        expect(store.getters.askNewFormula).toBeFalsy();
    });

    test("changes the flag for asking filename", () => {
        store.commit("setAskFilenameTrue");
        expect(store.getters.askFilename).toBeTruthy();
        store.commit("hideFilenamePrompt");
        expect(store.getters.askFilename).toBeFalsy();
    });

    test("sets correct error for incorrect new formula", () => {
        store.dispatch("setError", "incorrectNewFormula");
        expect(store.getters.incorrectNewFormula).toBeTruthy();
        expect(store.getters.faultyInput).toBeFalsy();
        store.commit("clearNewFormulaError");
        expect(store.getters.incorrectNewFormula).toBeFalsy();
        expect(store.getters.errorWithConversion).toBeFalsy();
    });

    test("sets correct error for faulty input", () => {
        store.dispatch("setError", "faultyInput");
        expect(store.getters.faultyInput).toBeTruthy();
        expect(store.getters.noInput).toBeFalsy();
    });

    test("sets correct error for no input", () => {
        store.dispatch("setError", "noInput");
        expect(store.getters.noInput).toBeTruthy();
        expect(store.getters.invalidFilename).toBeFalsy();
    });

    test("sets correct error for not a subformula", () => {
        store.dispatch("setError", "notSubformula");
        expect(store.getters.notSubformula).toBeTruthy();
        expect(store.getters.inputFileError).toBeFalsy();
        expect(store.getters.errorWithConversion).toBeTruthy();
    });

    test("sets correct error for a conversion that is not allowed", () => {
        store.dispatch("setError", "conversionNotAllowed");
        expect(store.getters.conversionNotAllowed).toBeTruthy();
        expect(store.getters.incorrectNewFormula).toBeFalsy();
    });

    test("sets correct error for invalidFilename", () => {
        store.dispatch("setError", "invalidFilename");
        expect(store.getters.invalidFilename).toBeTruthy();
        expect(store.getters.faultyConversion).toBeFalsy();
        store.commit("clearInvalidFilenameError");
        expect(store.getters.invalidFilename).toBeFalsy();
    });

    test("sets correct error for no subformula", () => {
        store.dispatch("setError", "noSubformula");
        expect(store.getters.noSubformula).toBeTruthy();
        expect(store.getters.notSubformula).toBeFalsy();
    });

    test("sets correct error for selection from incorrect place on the page", () => {
        store.dispatch("setError", "selectionNotFromCorrectField");
        expect(store.getters.selectionNotFromCorrectField).toBeTruthy();
        expect(store.getters.notSubformula).toBeFalsy();
    });

    test("sets and clears selected conversion", () => {
        store.commit("setSelectedConversion", "L1_1");
        expect(store.getters.selectedConversion).toBe("L1_1");
        store.commit("clearSelectedConversion");
        expect(store.getters.selectedConversion).toBe("");
    });

    test("toggles help", () => {
        expect(store.getters.showHelp).toBeFalsy();
        store.commit("toggleHelp");
        expect(store.getters.showHelp).toBeTruthy();
        store.commit("toggleHelp");
        expect(store.getters.showHelp).toBeFalsy();
    });

    test("converts subformula", () => {
        const formula = "A∧B∨C"
        store.commit("updateFormula", formula);
        store.commit("addFormula");
        const subFormula = "A∧B";
        const origStart = 0;
        const origEnd = 3;
        const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
        const conversionType = "L3";
        store.commit("convert", { subFormula, matchingChild, conversionType, origStart, origEnd });
        expect(store.getters.converted).toBeTruthy();
        expect(store.getters.formula).toBe("B∧A∨C");
    });

    test("converts subformula with new input from user", () => {
        const formula = "A∧B∨C"
        store.commit("updateFormula", formula);
        store.commit("addFormula");
        store.commit("updateNewFormula", "F")
        const subFormula = "A";
        const origStart = 0;
        const origEnd = 1;
        const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
        const conversionType = "L5_2";
        store.commit("convert", { subFormula, matchingChild, conversionType, origStart, origEnd });
        expect(store.getters.converted).toBeTruthy();
        expect(store.getters.formula).toBe("A∧(A∨F)∧B∨C");
    });

    test("converts subformula from the middle of associative operations", () => {
        const formula = "A∧B∧C∧D"
        store.commit("updateFormula", formula);
        store.commit("addFormula");
        const subFormula = "B∧C";
        const origStart = 2;
        const origEnd = 5;
        const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
        const conversionType = "L2_2";
        store.commit("convert", { subFormula, matchingChild, conversionType, origStart, origEnd });
        expect(store.getters.converted).toBeTruthy();
        expect(store.getters.formula).toBe("A∧(B∧C∨B∧C)∧D");
    });

    test("does not change the formula in case of a faulty conversion type", () => {
        const formula = "A∧B∧C∧D"
        store.commit("updateFormula", formula);
        store.commit("addFormula");
        const subFormula = "B∧C";
        const origStart = 2;
        const origEnd = 5;
        const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
        const conversionType = "L1_1";
        store.commit("convert", { subFormula, matchingChild, conversionType, origStart, origEnd });
        expect(store.getters.converted).toBeFalsy();
        expect(store.getters.formula).toBe("A∧B∧C∧D");
        expect(store.getters.faultyConversion).toBeTruthy();
    });

});