import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree.js";

export default function validateInput(input) {
  try {
    getParseTree(input);
    return true;
  } catch (err) {
    return false;
  }
}
