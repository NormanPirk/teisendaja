import antlr4 from "antlr4";
import PredGrammarLexer from './PredGrammarLexer.js';
import PredGrammarParser from './PredGrammarParser.js';
import ParserErrorStrategy from './ParserErrorStrategy.js';
import LexerErrorListener from './LexerErrorListener.js';

export default function validateInput(input) {
    try {
        const chars = new antlr4.InputStream(input);
    
        const lexer = new PredGrammarLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new LexerErrorListener());
        lexer.strictMode = false;

        const tokens = new antlr4.CommonTokenStream(lexer);
        
        const parser = new PredGrammarParser(tokens);    
        parser.buildParseTrees = true;
        parser._errHandler = new ParserErrorStrategy();
        
        parser.start();
        return true;
    } catch (err) {
        return false;
    }
}