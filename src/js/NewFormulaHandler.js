import getParseTree from "../ANTLR/ParseTree";
import { addParensAnd, addParensOr } from "./Parentheses";

export default function handleNewFormula(conversionType, newFormula, result) {
    const mainOp = getParseTree(newFormula).formula().constructor.name;
    switch (conversionType) {
        case "LS7_2":
            newFormula = addParensOr(mainOp, newFormula);
            result += newFormula + ")";
            break;
        case "LS8_2":
            newFormula = addParensAnd(mainOp, newFormula);
            result += newFormula;
            break;
        case "LS20_2":
            newFormula = addParensOr(mainOp, newFormula);
            result = newFormula + result;
            break;
        case "LS21_2":
            newFormula = addParensAnd(mainOp, newFormula);
            result = newFormula + result;
            break;
    }
    return result;
}