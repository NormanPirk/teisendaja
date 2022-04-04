import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree.js";
import PredGrammarParser from "../ANTLR/leftAssocGrammar/PredGrammarParser";
import getParseTreeRight from "../ANTLR/rightAssocGrammar/ParseTreeRight";
import PredGrammarRightParser from "../ANTLR/rightAssocGrammar/PredGrammarRightParser";

export default function matchInput(formula, subFormula, startIndex, endIndex) {
  if (formula === subFormula) {
    return getParseTree(subFormula);
  }
  try {
    const matchingChildLeft = getMatchingChild(
      getParseTree,
      PredGrammarParser,
      formula,
      subFormula,
      startIndex,
      endIndex
    );
    if (matchingChildLeft) {
      return matchingChildLeft;
    } else if (isAssociativeOperation(getParseTree(subFormula))) {
      const matchingChildRight = getMatchingChild(
        getParseTreeRight,
        PredGrammarRightParser,
        formula,
        subFormula,
        startIndex,
        endIndex
      );
      if (matchingChildRight) {
        return matchingChildRight;
      }
      if (isInTheMiddle(startIndex, endIndex, formula)) {
        return isSurroundedBySameOp(startIndex, endIndex, formula, getParseTree(subFormula));
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

function isAssociativeOperation(tree) {
  return ["AndContext", "OrContext", "EqContext"].includes(
    tree.formula().constructor.name
  );
}

function getMatchingChild(
  treeCreator,
  parser,
  formula,
  subFormula,
  startIndex,
  endIndex
) {
  const tree = treeCreator(formula);
  const subTree = treeCreator(subFormula);
  const treeStr = tree.toStringTree(parser.ruleNames);
  const subTreeStr = subTree.formula().toStringTree(parser.ruleNames);
  if (treeStr.includes(subTreeStr)) {
    let matchingChild = indicesMatch(
      tree,
      subTree.formula(),
      startIndex,
      endIndex
    );
    if (matchingChild) {
      return matchingChild;
    }
  }
  return null;
}

function isInTheMiddle(startIndex, endIndex, formula) {
  return startIndex > 0 && endIndex < formula.length - 1;
}

function isSurroundedBySameOp(startIndex, endIndex, formula, subtree) {
  if (subtree.formula().constructor.name === "AndContext") {
    return formula[startIndex - 1] === "∧" && formula[endIndex] === "∧";
  } if (subtree.formula().constructor.name === "OrContext") {
    return formula[startIndex - 1] === "∨" && formula[endIndex] === "∨";
  } if (subtree.formula().constructor.name === "EqContext") {
    return formula[startIndex - 1] === "⇔" && formula[endIndex] === "⇔";
  }
  return false;
}
