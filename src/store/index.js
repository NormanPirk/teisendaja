import { createStore } from "vuex";
import insertTextAtCursor from "insert-text-at-cursor";
import convert from "../js/Converter.js";
import addParentheses from "../js/Parentheses.js";
import handleNewFormula from "../js/NewFormulaHandler.js";
import Formula from "../js/Formula.js";

export default createStore({
  state: {
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
    selectedConversion: ""
  },
  getters: {
    formula: (state) => {
      return state.formula;
    },
    formulas: (state) => {
      return state.formulas;
    },
    newFormula: (state) => {
      return state.newFormula;
    },
    filename: (state) => {
      return state.filename;
    },
    askNewFormula: (state) => {
      return state.askNewFormula;
    },
    askFilename: (state) => {
      return state.askFilename;
    },
    incorrectNewFormula: (state) => {
      return state.incorrectNewFormula;
    },
    converted: (state) => {
      return state.converted;
    },
    noInput: (state) => {
      return state.noInput;
    },
    faultyInput: (state) => {
      return state.faultyInput;
    },
    notSubformula: (state) => {
      return state.notSubformula;
    },
    faultyConversion: (state) => {
      return state.faultyConversion;
    },
    noSubformula: (state) => {
      return state.noSubformula;
    },
    conversionNotAllowed: (state) => {
      return state.conversionNotAllowed;
    },
    errorWithConversion: (state) => {
      return (
        state.notSubformula ||
        state.faultyConversion ||
        state.noSubformula ||
        state.conversionNotAllowed
      );
    },
    inputFileError: (state) => {
      return state.inputFileError;
    },
    showHelp: (state) => {
      return state.showHelp;
    },
    invalidFilename: (state) => {
      return state.invalidFilename;
    },
    selectedConversion: (state) => {
      return state.selectedConversion;
    }
  },
  mutations: {
    finishConversion: (state) => {
      state.converted = false;
    },
    updateFormula: (state, value) => {
      state.formula = value;
    },
    updateFormulas: (state, value) => {
      state.formulas = value;
    },
    updateNewFormula: (state, value) => {
      state.newFormula = value;
    },
    newFormulaAdded: (state) => {
      state.askNewFormula = false;
    },
    setAskNewFormulaTrue: (state) => {
      state.askNewFormula = true;
    },
    setAskFilenameTrue: (state) => {
      state.askFilename = true;
    },
    setFilename: (state, value) => {
      state.filename = value;
    },
    clearFilename: (state) => {
      state.filename = "";
    },
    hideFilenamePrompt: (state) => {
      state.askFilename = false;
    },
    addSymbol: (state, value) => {
      const el = document.getElementById("input-field");
      insertTextAtCursor(el, value);
    },
    addSymbolToNew: (state, value) => {
      const el = document.getElementById("selectable-new");
      insertTextAtCursor(el, value);
    },
    addFormula: (state) => {
      if (state.formula.length > 0) {
        state.formulas.push(new Formula(state.formula));
      }
    },
    setSelectedConversion: (state, value) => {
      state.selectedConversion = value;
    },
    showNoInputError: (state) => {
      state.noInput = true;
    },
    showFaultyInputError: (state) => {
      state.faultyInput = true;
    },
    showNotSubformulaError: (state) => {
      state.notSubformula = true;
    },
    showFaultyConversionError: (state) => {
      state.faultyConversion = true;
    },
    showNoSubformulaError: (state) => {
      state.noSubformula = true;
    },
    showConversionNotAllowedError: (state) => {
      state.conversionNotAllowed = true;
    },
    showNewFormulaError: (state) => {
      state.incorrectNewFormula = true;
    },
    showInputFileError: (state) => {
      state.inputFileError = true;
    },
    showInvalidFilenameError: (state) => {
      state.invalidFilename = true;
    },
    clearInvalidFilenameError: (state) => {
      state.invalidFilename = false;
    },
    toggleHelp: (state) => {
      const current = state.showHelp;
      state.showHelp = !current;
    },
    clearErrors: (state) => {
      state.noInput = false;
      state.faultyInput = false;
      state.notSubformula = false;
      state.faultyConversion = false;
      state.noSubformula = false;
      state.conversionNotAllowed = false;
      state.inputFileError = false;
      state.selectedConversion = "";
    },
    clearNewFormulaError: (state) => {
      state.incorrectNewFormula = false;
    },
    removeLast: (state) => {
      if (state.formulas.length > 0) {
        state.formulas.pop();
        if (state.formulas.length > 0) {
          state.formulas[state.formulas.length - 1].removeMetaInfo();
        }
      }
      if (state.formulas.length > 0) {
        state.formula = state.formulas[state.formulas.length - 1].formula;
      } else {
        state.formula = "";
      }
    },
    removeAll: (state) => {
      state.formula = "";
      state.formulas = [];
      state.converted = false;
    },
    convert(
      state,
      { subFormula, matchingChild, conversionType, origStart, origEnd }
    ) {
      try {
        let result = convert(subFormula, conversionType);
        if (result) {
          if (["L7_2", "L8_2", "L22_2", "L23_2"].includes(conversionType)) {
            result = handleNewFormula(conversionType, state.newFormula, result);
            state.newFormula = "";
          }
          result = addParentheses(matchingChild, result);
          const beginning = state.formula.substring(0, origStart);
          const ending = state.formula.substring(origEnd, state.formula.length);
          state.formula = beginning + result + ending;
          state.formulas[state.formulas.length - 1].selStart = origStart;
          state.formulas[state.formulas.length - 1].selEnd = origEnd;
          state.formulas[state.formulas.length - 1].ct =
            conversionType.split("_")[0];
          state.converted = true;
        } else {
          state.faultyConversion = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  actions: {},
  modules: {},
});
