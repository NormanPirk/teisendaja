import FreeVarsVisitor from "../ANTLR/leftAssocGrammar/visitors/freeVariables/FreeVarsVisitor.js";
import store from "@/store/index.js";

export default function getNewVariable() {
  const indVariables = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < indVariables.length; i++) {
    if (!store.getters.formula.includes(indVariables[i])) {
      return indVariables[i];
    }
  }
  return null;
}

export function getFreeVars(formula) {
  const visitor = new FreeVarsVisitor();
  const result = visitor.visit(formula);

  return result;
}
