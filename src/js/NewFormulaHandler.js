import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree";
import { addParensAnd, addParensNeg, addParensOr } from "./Parentheses";

export default function handleNewFormula(conversionType, newFormula, result) {
  const mainOp = getParseTree(newFormula).formula().constructor.name;
  switch (conversionType) {
    case "L7_2": {
      newFormula = addParensOr(mainOp, newFormula);
      result += newFormula + ")";
      break;
    } 
    case "L8_2": {
      newFormula = addParensAnd(mainOp, newFormula);
      result += newFormula;
      break;
    } 
    case "L22_2": {
      newFormula = addParensOr(mainOp, newFormula);
      result = newFormula + result;
      break;
    } 
    case "L23_2": {
      newFormula = addParensAnd(mainOp, newFormula);
      result = newFormula + result;
      break;
    } 
    case "L29_1": {
      const left = addParensOr(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result += left + "∨¬" + right + ")";
      break;
    }
    case "L30_1": {
      const left = addParensAnd(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result += left + "∧¬" + right;
      break;
    }
  }
  return result;
}