import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree";
import { addParensAnd, addParensOr } from "./Parentheses";

export default function handleNewFormula(conversionType, newFormula, result) {
  const mainOp = getParseTree(newFormula).formula().constructor.name;
  switch (conversionType) {
    case "L7_2":
      newFormula = addParensOr(mainOp, newFormula);
      result += newFormula + ")";
      break;
    case "L8_2":
      newFormula = addParensAnd(mainOp, newFormula);
      result += newFormula;
      break;
    case "L22_2":
      newFormula = addParensOr(mainOp, newFormula);
      result = newFormula + result;
      break;
    case "L23_2":
      newFormula = addParensAnd(mainOp, newFormula);
      result = newFormula + result;
      break;
  }
  return result;
}
