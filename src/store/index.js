import { createStore } from "vuex";
import insertTextAtCursor from "insert-text-at-cursor";
import convert from "../js/Converter.js";
import addParentheses, { addParensMiddle } from "../js/Parentheses.js";
import handleNewFormula from "../js/NewFormulaHandler.js";
import Formula from "../js/Formula.js";
import specialConversions from "@/assets/specialConversionCodes.json";

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
    selectionNotFromCorrectField: false,
    selectedConversion: "",
    faultyInputClarification: ""
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
    selectionNotFromCorrectField: (state) => {
      return state.selectionNotFromCorrectField;
    },
    showHelp: (state) => {
      return state.showHelp;
    },
    invalidFilename: (state) => {
      return state.invalidFilename;
    },
    selectedConversion: (state) => {
      return state.selectedConversion;
    },
    faultyInputClarification: (state) => {
      return state.faultyInputClarification;
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
    setError: (state, errorName) => {
      state[errorName] = true;
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
      state.selectionNotFromCorrectField = false;
    },
    clearSelectedConversion: (state) => {
      state.selectedConversion = "";
    },
    clearFaultyInputClarification: (state) => {
      state.faultyInputClarification = "";
    },
    clearNewFormulaError: (state) => {
      state.incorrectNewFormula = false;
    },
    setFaultyInputClarification: (state, value) => {
      state.faultyInputClarification = value;
    },
    removeLast: (state) => {
      if (state.formulas.length > 0) {
        const last = state.formulas.pop();
        if (state.formulas.length > 0) {
          state.formulas[state.formulas.length - 1].removeMetaInfo();
          state.formula = state.formulas[state.formulas.length - 1].formula;
        } else {
          state.formula = last.formula;
        }
      }
    },
    removeAll: (state) => {
      if (state.formulas.length > 0) {
        state.formula = state.formulas[0].formula;
        state.formulas = [];
        state.converted = false;
      }
    },
    convert( state, object) {
      try {
        let result = convert(object.subFormula, object.conversionType);
        if (result || result === "") {
          if (specialConversions.withUserInput.includes(object.conversionType)) {
            result = handleNewFormula(object.conversionType, state.newFormula, result);
            state.newFormula = "";
          }
          if ((typeof object.matchingChild) === "string" && object.matchingChild.includes("middle")) {
            result = addParensMiddle(object.matchingChild, result);
          } else {
            result = addParentheses(object.matchingChild, result);
          }
          const beginning = state.formula.substring(0, object.origStart);
          const ending = state.formula.substring(object.origEnd, state.formula.length);
          state.formula = beginning + result + ending;
          state.formulas[state.formulas.length - 1].selStart = object.origStart;
          state.formulas[state.formulas.length - 1].selEnd = object.origEnd;
          state.formulas[state.formulas.length - 1].ct =
            object.conversionType.split("_")[0];
          state.converted = true;
        } else {
          state.faultyConversion = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  actions: {
    setError(context, errorName) {
      context.commit("clearErrors");
      context.commit("setError", errorName);
    },
  },
  modules: {},
});
