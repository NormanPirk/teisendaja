import getParseTree from "../ANTLR/ParseTree.js";

export default function validateInput(input) {
  try {
    getParseTree(input);
    return true;
  } catch (err) {
    return false;
  }
}
