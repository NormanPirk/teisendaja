import getParseTree from "../ANTLR/ParseTree";
import PredGrammarParser from "../ANTLR/PredGrammarParser";

export default function matchInput(formula, subFormula, startIndex, endIndex) {
  if (formula === subFormula) {
    return getParseTree(subFormula);
  }
  try {
    const mainTree = getParseTree(formula);
    const subTree = getParseTree(subFormula);
    const mainTreeString = mainTree.toStringTree(PredGrammarParser.ruleNames);
    const subTreeString = subTree
      .formula()
      .toStringTree(PredGrammarParser.ruleNames);
    if (mainTreeString.includes(subTreeString)) {
      let matchingChild = indicesMatch(
        mainTree,
        subTree.formula(),
        startIndex,
        endIndex
      );
      if (matchingChild) {
        return matchingChild;
      }
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
}

function indicesMatch(child, comparable, startIndex, endIndex) {
  if (child.getText() === comparable.getText()) {
    const childStart = child.start.column;
    const childEnd = child.stop.column + 1;
    if (childStart === startIndex && childEnd === endIndex) {
      return child;
    }
  } else if (child.children) {
    for (let ch of child.children) {
      let mathingChild = indicesMatch(ch, comparable, startIndex, endIndex);
      if (mathingChild) {
        return mathingChild;
      }
    }
  }
  return false;
}
