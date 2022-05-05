import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree.js";
import SymbolValidateVisitor from "../ANTLR/leftAssocGrammar/visitors/validatingSymbols/SymbolValidateVisitor.js";

export default function validateInput(input) {
  const tree = getParseTree(input);
  const visitor = new SymbolValidateVisitor();
  visitor.visit(tree);
  return true;
}
