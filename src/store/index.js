import { createStore } from "vuex";
import convert from "../js/Converter.js";
import addParentheses, { addParensMiddle } from "../js/Parentheses.js";
import handleNewFormula from "../js/NewFormulaHandler.js";
import Formula from "../js/Formula.js";
import specialConversions from "@/assets/specialConversionCodes.json";
import i18n from "@/i18n.js";

export default createStore({
  state: {
    formula: "",
    formulas: [],
    newFormula: "",
    filename: i18n.t("defaultFileName"),
    error: { message: "", type: 0 },
    askNewFormula: false,
    askFilename: false,
    askDeleteAllConfirmation: false,
    showHelp: false,
    conversionType: "",
  },
  getters: {
    error: (state) => {
      return state.error;
    },
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
    askDeleteAllConfirmation: (state) => {
      return state.askDeleteAllConfirmation;
    },
    showHelp: (state) => {
      return state.showHelp;
    },
    conversionType: (state) => {
      return state.conversionType;
    },
  },
  mutations: {
    setError: (state, value) => {
      state.error.message = value.message;
      state.error.type = value.type;
    },
    restoreDefaultFilename: (state) => {
      state.filename = i18n.t("defaultFileName");
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
    setAskDeleteAllConfirmation: (state) => {
      state.askDeleteAllConfirmation = true;
    },
    setFilename: (state, value) => {
      state.filename = value;
    },
    hideFilenamePrompt: (state) => {
      state.askFilename = false;
    },
    hideDeleteAllConfirmation: (state) => {
      state.askDeleteAllConfirmation = false;
    },
    addFormula: (state) => {
      if (state.formula.length > 0) {
        state.formulas.push(new Formula(state.formula));
      }
    },
    toggleHelp: (state) => {
      const current = state.showHelp;
      state.showHelp = !current;
    },
    clearErrors: (state) => {
      state.error = {};
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
      }
    },
  },
  actions: {
    convert(context, object) {
      let result = convert(object.subFormula, object.conversionType);
      if (result || result === "") {
        if (specialConversions.withUserInput.includes(object.conversionType)) {
          result = handleNewFormula(object.conversionType, context.state.newFormula, result);
          context.state.newFormula = "";
        }
        if (typeof object.matchingChild === "string" && object.matchingChild.includes("middle")) {
          result = addParensMiddle(object.matchingChild, result);
        } else {
          result = addParentheses(object.matchingChild, result);
        }
        addConvInformation(context, object, result);
      } else {
        context.state.error = {
          message: i18n.t("faultyConversion", {
            conversion: object.conversionType.split("_")[0],
          }),
          type: "1",
        };
      }
    },
  },
  modules: {},
});

function addConvInformation(context, object, result) {
  const beginning = context.state.formula.substring(0, object.origStart);
  const ending = context.state.formula.substring(object.origEnd, context.state.formula.length);
  context.state.formula = beginning + result + ending;
  context.state.formulas[context.state.formulas.length - 1].selStart = object.origStart;
  context.state.formulas[context.state.formulas.length - 1].selEnd = object.origEnd;
  context.state.formulas[context.state.formulas.length - 1].ct = object.conversionType.split("_")[0];
  context.commit("addFormula");
  context.state.conversionType = "";
}
