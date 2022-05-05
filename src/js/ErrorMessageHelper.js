import i18n from "@/i18n.js";

export default function getErrorMessage(error, formula) {
  if (error.message.includes("Predicate")) {
    return i18n.t("predicateArgError", { symbol: error.symbol });
  }
  if (error.message.includes("Functional")) {
    return i18n.t("functionInManyRoles", { symbol: error.symbol });
  }
  if (error.message.includes("Function")) {
    return i18n.t("functionArgError", { symbol: error.symbol });
  }
  if (error.message.includes("Syntactical")) {
    let symbol = formula[error.index];
    if (symbol === undefined) {
      return i18n.t("syntaxErrorEnding");
    }
    return i18n.t("syntaxError", { symbol: symbol, index: error.index + 1 });
  }
  if (error.message.includes("subformula")) {
    return i18n.t("noNewSubformula");
  }
  console.log(error);
  return i18n.t("unknownError");
}
