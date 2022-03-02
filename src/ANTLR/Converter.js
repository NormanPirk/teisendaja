import antlr4 from 'antlr4';
import PredGrammarLexer from './PredGrammarLexer.js';
import PredGrammarParser from './PredGrammarParser.js';
import ParserErrorStrategy from './ParserErrorStrategy.js';
import LexerErrorListener from './LexerErrorListener.js';
import LS1Visitor from './visitors/LS1Visitor.js';
import LS2Visitor from './visitors/LS2Visitor.js';
import LS0Visitor from './visitors/LS0Visitor.js';


export default function convert(input, visitorType) {
    const chars = new antlr4.InputStream(input);
    
    const lexer = new PredGrammarLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new LexerErrorListener());
    lexer.strictMode = false;

    const tokens = new antlr4.CommonTokenStream(lexer);
    
    const parser = new PredGrammarParser(tokens);    
    parser.buildParseTrees = true;
    parser._errHandler = new ParserErrorStrategy();
    
    const tree = parser.start();

    const visitor = getVisitor(visitorType);
    
    const result = visitor.visit(tree);
    return result[0];
}

function getVisitor(visitorType) {
    switch (visitorType) {
        case 'LS0':
            return new LS0Visitor();
        case 'LS1':
            return new LS1Visitor();
        case 'LS2':
            return new LS2Visitor();
    }
}