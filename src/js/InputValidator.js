import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree.js";

export default function validateInput(input) {
  return getParseTree(input);
}
