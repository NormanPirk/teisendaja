import { createStore } from "vuex";
import insertTextAtCursor from "insert-text-at-cursor";
import convert from "../ANTLR/Converter.js";
import getConversionType from "../ANTLR/ConversionType.js";

export default createStore({
  state: {
    formula: "",
    formulas: [],
    converted: false,
    noInput: false,
    faultyInput: false
  },
  getters: {
    formula: (state) => {
      return state.formula;
    },
    formulas: (state) => {
      return state.formulas;
    },
    converted: (state) => {
      return state.converted;
    },
    noInput: (state) => {
      return state.noInput;
    },
    faultyInput: (state) => {
      return state.faultyInput;
    }
  },
  mutations: {
    finishConversion: (state) => {
      state.converted = false;
    },
    updateFormula: (state, value) => {
      state.formula = value;
    },
    addSymbol: (state, value) => {
      const el = document.getElementById("selectable");
      insertTextAtCursor(el, value);
    },
    addFormula: (state) => {
      if (state.formula.length > 0) {
        let f =
          state.formulas.length === 0
            ? state.formula
            : "\\equiv " + state.formula;
        state.formulas.push(f);
      }
    },
    showNoInput: (state) => {
      state.noInput = true;
    },
    showFaultyInput: (state) => {
      state.faultyInput = true;
    },
    clearErrors: (state) => {
      state.noInput = false;
      state.faultyInput = false;
    },
    removeLast: (state) => {
      if (state.formulas.length > 0) {
        state.formulas.pop();
      }
      if (state.formulas.length > 0) {
        state.formula = state.formulas[state.formulas.length - 1].replace('\\equiv ', '');
      } else {
        state.formula = "";
      }
    },
    removeAll: (state) => {
      state.formula = "";
      state.formulas = [];
      state.converted = false;
    },
    convert: (state, conversion) => {
      const el = document.getElementById("selectable");
      let subFormula = el.value.toString().substring(el.selectionStart, el.selectionEnd);
      if (subFormula) {
        try {
          const conversionType = getConversionType(conversion);
          const result = convert(subFormula, conversionType);
          if (result) {
            insertTextAtCursor(el, result);
            state.converted = true;
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  },
  actions: {},
  modules: {},
});
