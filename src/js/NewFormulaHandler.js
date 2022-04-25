import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree";
import { addParensAnd, addParensNeg, addParensOr } from "./Parentheses";

export default function handleNewFormula(conversionType, newFormula, result) {
  const mainOp = getParseTree(newFormula).formula().constructor.name;
  switch (conversionType) {
    case "L5_2": {
      newFormula = addParensOr(mainOp, newFormula);
      result += newFormula + ")";
      break;
    }
    case "L6_2": {
      newFormula = addParensAnd(mainOp, newFormula);
      result += newFormula;
      break;
    }
    case "L19_2": {
      const left = addParensOr(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result += left + "∨¬" + right + ")";
      break;
    }
    case "L20_2": {
      const left = addParensAnd(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result += left + "∧¬" + right;
      break;
    }
    case "L21_2": {
      const left = addParensOr(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result = left + "∨¬" + right;
      break;
    }
    case "L22_2": {
      const left = addParensAnd(mainOp, newFormula);
      const right = addParensNeg(mainOp, newFormula);
      result = left + "∧¬" + right;
      break;
    }
    case "L24_2": {
      newFormula = addParensOr(mainOp, newFormula);
      result = newFormula + result;
      break;
    }
    case "L25_2": {
      newFormula = addParensAnd(mainOp, newFormula);
      result = newFormula + result;
      break;
    }
  }
  return result;
}
