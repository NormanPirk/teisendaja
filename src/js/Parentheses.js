import getParseTree from "../ANTLR/ParseTree";

export default function addParentheses(replacable, result) {
    if (replacable.parentCtx) {
        const parentContext = replacable.parentCtx.constructor.name;
        const childContext = getParseTree(result).formula().constructor.name;
        if (childContext === "AndContext") {
            result = addParensAnd(parentContext, result);
        } else if (childContext === "OrContext") {
            result = addParensOr(parentContext, result);
        } else if (childContext === "ImplContext") {
            result = addParensImpl(parentContext, result);
        } else if (childContext === "EqContext") {
            result = addParensEq(parentContext, result);
        }
    }
    return result;
}

function addParensAnd(parentContext, result) {
    if (["NegContext", "AndContext"].includes(parentContext)) {
        result = addParens(result);
    }
    return result;
}

function addParensOr(parentContext, result) {
    if (["NegContext", "AndContext", "OrContext"].includes(parentContext)) {
        result = addParens(result);
    }
    return result;
}

function addParensImpl(parentContext, result) {
    if (["NegContext", "AndContext", "OrContext", "ImplContext"].includes(parentContext)) {
        result = addParens(result);
    }
    return result;
}

function addParensEq(parentContext, result) {
    if (["NegContext", "AndContext", "OrContext", "ImplContext", "EqContext"].includes(parentContext)) {
        result = addParens(result);
    }
    return result;
}

function addParens(result) {
    return "(" + result + ")";
}