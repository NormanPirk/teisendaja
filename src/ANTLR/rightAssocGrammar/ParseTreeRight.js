import antlr4 from "antlr4";
import PredGrammarRightLexer from "./PredGrammarRightLexer.js";
import PredGrammarRightParser from "./PredGrammarRightParser.js";

export default function getParseTreeRight(input) {
  const chars = new antlr4.InputStream(input);

  const lexer = new PredGrammarRightLexer(chars);

  lexer.strictMode = false;

  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new PredGrammarRightParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.start();
  return tree;
}
