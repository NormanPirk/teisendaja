import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree";

export default function addParentheses(matchingChild, result) {
  if (matchingChild.parentCtx) {
    const parentContext = matchingChild.parentCtx.constructor.name;
    const childContext = getParseTree(result).formula().constructor.name;
    if (parentContext === "NegContext") {
      result = addParensNeg(childContext, result);
    } else if (parentContext === "AndContext") {
      result = addParensAnd(childContext, result);
    } else if (parentContext === "OrContext") {
      result = addParensOr(childContext, result);
    } else if (parentContext === "ImplContext") {
      result = addParensImpl(childContext, result);
    }
  }
  return result;
}

export function addParensNeg(childContext, result) {
  if (
    ["AndContext", "OrContext", "ImplContext", "EqContext"].includes(
      childContext
    )
  ) {
    result = addParens(result);
  }
  return result;
}

export function addParensAnd(childContext, result) {
  if (["OrContext", "ImplContext", "EqContext"].includes(childContext)) {
    result = addParens(result);
  }
  return result;
}

export function addParensOr(childContext, result) {
  if (["ImplContext", "EqContext"].includes(childContext)) {
    result = addParens(result);
  }
  return result;
}

export function addParensImpl(childContext, result) {
  if (childContext === "EqContext") {
    result = addParens(result);
  }
  return result;
}

function addParens(result) {
  return "(" + result + ")";
}
