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
    askNewFormula: false,
    incorrectNewFormula: false,
    converted: false,
    noInput: false,
    faultyInput: false,
    notSubformula: false,
    faultyConversion: false,
    noSubformula: false,
    conversionNotAllowed: false,
    errorWithConversion: false
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
    askNewFormula: (state) => {
      return state.askNewFormula;
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
      return state.notSubformula || state.faultyConversion || state.noSubformula || state.conversionNotAllowed;
    }
  },
  mutations: {
    finishConversion: (state) => {
      state.converted = false;
    },
    updateFormula: (state, value) => {
      state.formula = value;
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
    clearErrors: (state) => {
      state.noInput = false;
      state.faultyInput = false;
      state.notSubformula = false;
      state.faultyConversion = false;
      state.noSubformula = false;
      state.conversionNotAllowed = false;
    },
    clearNewFormulaError: (state) => {
      state.incorrectNewFormula = false;
    },
    removeLast: (state) => {
      if (state.formulas.length > 0) {
        console.log(state.formulas.length);
        state.formulas.pop();
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
    convert (state, { subFormula, replacable, conversionType, origStart, origEnd }) {
      try {
        let result = convert(subFormula, conversionType);
        if (result) {
          if (["LS7_2", "LS8_2", "LS20_2", "LS21_2"].includes(conversionType)) {
            result = handleNewFormula(conversionType, state.newFormula, result);
            state.newFormula = "";
          }
          result = addParentheses(replacable, result);
          const beginning = state.formula.substring(0, origStart);
          const ending = state.formula.substring(origEnd, state.formula.length);
          state.formula = beginning + result + ending;
          state.formulas[state.formulas.length-1].selStart = origStart;
          state.formulas[state.formulas.length-1].selEnd = origEnd;
          state.formulas[state.formulas.length-1].ct = conversionType.split("_")[0];
          state.converted = true;
        } else {
          state.faultyConversion = true;
        }

      } catch (err) {
        console.log(err);
      }



      /* const el = document.getElementById("selectable");
      const start = el.selectionStart;
      const end = el.selectionEnd;
      let result = convert(subFormula, conversionType);
      if (result) {
        if (["LS7_2", "LS8_2", "LS20_2", "LS21_2"].includes(conversionType)) {
          result = handleNewFormula(conversionType, state.newFormula, result);
          state.newFormula = "";
        }
        
        insertTextAtCursor(el, result);
        state.formulas[state.formulas.length-1].selStart = start;
        state.formulas[state.formulas.length-1].selEnd = end;
        state.formulas[state.formulas.length-1].ct = conversionType.split("_")[0];
        state.converted = true;
      } else {
        state.faultyConversion = true;
      } */
    }
  },
  actions: {},
  modules: {},
});
