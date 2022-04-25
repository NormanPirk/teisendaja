import antlr4 from "antlr4";
import PredGrammarLexer from "./PredGrammarLexer.js";
import PredGrammarParser from "./PredGrammarParser.js";
import CustomErrorListener from "./CustomErrorListener.js";
//import ParserErrorStrategy from "./ParserErrorStrategy.js";
//import LexerErrorListener from "./LexerErrorListener.js";

export default function getParseTree(input) {
  const chars = new antlr4.InputStream(input);

  const lexer = new PredGrammarLexer(chars);
  lexer.strictMode = false;
  lexer.removeErrorListeners();
  lexer.addErrorListener(new CustomErrorListener());

  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new PredGrammarParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(new CustomErrorListener());

  const tree = parser.start();
  return tree;
  
}
