import store from "@/store/index.js";
import Formula from "@/js/Formula.js";
import matchInput from "@/js/InputMatcher.js";

describe("Tests related to state", () => {
  afterEach(() => {
    store.replaceState({
      formula: "",
      formulas: [],
      newFormula: "",
      filename: "teisendused",
      error: { message: "", type: 0 },
      askNewFormula: false,
      askFilename: false,
      askDeleteAllConfirmation: false,
      showHelp: false,
      conversionType: "",
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
    const formula2 = new Formula("F(x)∧1∧¬G(y)");
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
    const formula2 = new Formula("F(x)∧1∧¬G(y)");
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

  test("updates formulas", () => {
    const formulas = [
      {
        formula: "∃x(∀y¬P(x,y,z)∧∀u∃v¬¬Q(u,v,z))",
        selStart: 3,
        selEnd: 29,
        ct: "P5",
      },
      {
        formula: "∃x(∀y(¬P(x,y,z)∧∀u∃v¬¬Q(u,v,z)))",
        selStart: 6,
        selEnd: 30,
        ct: "L3",
      },
      {
        formula: "∃x(∀y(∀u∃v¬¬Q(u,v,z)∧¬P(x,y,z)))",
        selStart: 6,
        selEnd: 30,
        ct: "P5",
      },
      {
        formula: "∃x(∀y(∀u(∃v¬¬Q(u,v,z)∧¬P(x,y,z))))",
        selStart: 9,
        selEnd: 31,
        ct: "P7",
      },
      {
        formula: "∃x(∀y(∀u(∃v(¬¬Q(u,v,z)∧¬P(x,y,z)))))",
        selStart: 12,
        selEnd: 22,
        ct: "L29",
      },
      {
        formula: "∃x(∀y(∀u(∃v(Q(u,v,z)∧¬P(x,y,z)))))",
        selStart: 34,
        selEnd: 0,
        ct: "",
      },
    ];
    store.commit("updateFormulas", formulas);
    expect(store.getters.formulas).toStrictEqual(formulas);
  });

  test("adds filename to state and removes it", () => {
    const filename = "testing_filename";
    store.commit("setFilename", filename);
    expect(store.getters.filename).toBe("testing_filename");
    store.commit("restoreDefaultFilename");
    expect(store.getters.filename).toBe("teisendused");
  });

  test("adds error to state and removes it", () => {
    const error = { message: "Faulty input!", type: "1" };
    store.commit("setError", error);
    expect(store.getters.error).toStrictEqual({
      message: "Faulty input!",
      type: "1",
    });
    store.commit("clearErrors");
    expect(store.getters.error).toStrictEqual({});
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

  test("shows and hides prompt for deleting all formulas", () => {
    store.commit("setAskDeleteAllConfirmation");
    expect(store.getters.askDeleteAllConfirmation).toBeTruthy();
    store.commit("hideDeleteAllConfirmation");
    expect(store.getters.askDeleteAllConfirmation).toBeFalsy();
  });

  test("returns correct conversion type", () => {
    store.state.conversionType = "L12_1";
    expect(store.getters.conversionType).toBe("L12_1");
  });

  test("toggles help", () => {
    expect(store.getters.showHelp).toBeFalsy();
    store.commit("toggleHelp");
    expect(store.getters.showHelp).toBeTruthy();
    store.commit("toggleHelp");
    expect(store.getters.showHelp).toBeFalsy();
  });

  test("converts subformula", () => {
    const formula = "A∧B∨C";
    store.commit("updateFormula", formula);
    store.commit("addFormula");
    const subFormula = "A∧B";
    const origStart = 0;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const conversionType = "L3";
    store.dispatch("convert", {
      subFormula,
      matchingChild,
      conversionType,
      origStart,
      origEnd,
    });
    expect(store.getters.formula).toBe("B∧A∨C");
  });

  test("converts subformula with new input from user", () => {
    const formula = "A∧B∨C";
    store.commit("updateFormula", formula);
    store.commit("addFormula");
    store.commit("updateNewFormula", "F");
    const subFormula = "A";
    const origStart = 0;
    const origEnd = 1;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const conversionType = "L5_2";
    store.dispatch("convert", {
      subFormula,
      matchingChild,
      conversionType,
      origStart,
      origEnd,
    });
    expect(store.getters.formula).toBe("A∧(A∨F)∧B∨C");
  });

  test("converts subformula from the middle of associative operations", () => {
    const formula = "A∧B∧C∧D";
    store.commit("updateFormula", formula);
    store.commit("addFormula");
    const subFormula = "B∧C";
    const origStart = 2;
    const origEnd = 5;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const conversionType = "L2_2";
    store.dispatch("convert", {
      subFormula,
      matchingChild,
      conversionType,
      origStart,
      origEnd,
    });
    expect(store.getters.formula).toBe("A∧(B∧C∨B∧C)∧D");
  });

  test("converts 1 into tautology", () => {
    const formula = "1∧B";
    const newFormula = "A";
    store.commit("updateFormula", formula);
    store.commit("addFormula");
    store.commit("updateNewFormula", newFormula);
    const subFormula = "1";
    const origStart = 0;
    const origEnd = 1;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const conversionType = "L21_2";
    store.dispatch("convert", {
      subFormula,
      matchingChild,
      conversionType,
      origStart,
      origEnd,
    });
    expect(store.getters.formula).toBe("(A∨¬A)∧B");
  });

  test("does not allow incorrect conversion", () => {
    const formula = "A∧B";
    store.commit("updateFormula", formula);
    store.commit("addFormula");
    const subFormula = "A∧B";
    const origStart = 0;
    const origEnd = 3;
    const matchingChild = matchInput(formula, subFormula, origStart, origEnd);
    const conversionType = "L13_1";
    store.dispatch("convert", {
      subFormula,
      matchingChild,
      conversionType,
      origStart,
      origEnd,
    });
    expect(store.getters.formula).toBe("A∧B");
    expect(store.getters.error).toStrictEqual({
      message: "Valitud teisendus L13 ei sobi sellele osavalemile!",
      type: "1",
    });
  });
});
