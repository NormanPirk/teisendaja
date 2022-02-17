import { createStore } from "vuex";
import insertTextAtCursor from "insert-text-at-cursor";

export default createStore({
  state: {
    formula: "",
    formulas: [],
  },
  getters: {
    formula: (state) => {
      return state.formula;
    },
    formulas: (state) => {
      return state.formulas;
    },
  },
  mutations: {
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
    convert: (state, conversion) => {
      const el = document.getElementById("selectable");
      let subFormula = el.value.toString().substring(el.selectionStart, el.selectionEnd);
      if (subFormula) {
        if (conversion === 'F \\equiv \\neg \\neg F') {
          subFormula = '\\neg \\neg ' + subFormula;
        } else if (conversion === '\\neg \\neg F \\equiv F') {
          subFormula = subFormula.substring(10, subFormula.length);
        }
        insertTextAtCursor(el, subFormula);
      }

    }
  },
  actions: {},
  modules: {},
});
