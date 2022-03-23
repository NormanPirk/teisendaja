/* eslint-disable */
// Generated from PredGrammarRight.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0013I\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013\u0003\u0002",
    "\u0007\u0003\u0002r|\u0003\u0002C\\\u0003\u0002cg\u0003\u0002hq\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002H\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0003%\u0003\u0002\u0002\u0002\u0005\'\u0003\u0002\u0002\u0002\u0007",
    ")\u0003\u0002\u0002\u0002\t+\u0003\u0002\u0002\u0002\u000b-\u0003\u0002",
    "\u0002\u0002\r/\u0003\u0002\u0002\u0002\u000f1\u0003\u0002\u0002\u0002",
    "\u00113\u0003\u0002\u0002\u0002\u00135\u0003\u0002\u0002\u0002\u0015",
    "7\u0003\u0002\u0002\u0002\u00179\u0003\u0002\u0002\u0002\u0019;\u0003",
    "\u0002\u0002\u0002\u001b=\u0003\u0002\u0002\u0002\u001d?\u0003\u0002",
    "\u0002\u0002\u001fA\u0003\u0002\u0002\u0002!C\u0003\u0002\u0002\u0002",
    "#E\u0003\u0002\u0002\u0002%&\t\u0002\u0002\u0002&\u0004\u0003\u0002",
    "\u0002\u0002\'(\t\u0003\u0002\u0002(\u0006\u0003\u0002\u0002\u0002)",
    "*\t\u0004\u0002\u0002*\b\u0003\u0002\u0002\u0002+,\t\u0005\u0002\u0002",
    ",\n\u0003\u0002\u0002\u0002-.\u0007.\u0002\u0002.\f\u0003\u0002\u0002",
    "\u0002/0\u0007*\u0002\u00020\u000e\u0003\u0002\u0002\u000212\u0007+",
    "\u0002\u00022\u0010\u0003\u0002\u0002\u000234\u0007\u00ae\u0002\u0002",
    "4\u0012\u0003\u0002\u0002\u000256\u0007\u2229\u0002\u00026\u0014\u0003",
    "\u0002\u0002\u000278\u0007\u222a\u0002\u00028\u0016\u0003\u0002\u0002",
    "\u00029:\u0007\u21d4\u0002\u0002:\u0018\u0003\u0002\u0002\u0002;<\u0007",
    "\u21d6\u0002\u0002<\u001a\u0003\u0002\u0002\u0002=>\u0007\u2202\u0002",
    "\u0002>\u001c\u0003\u0002\u0002\u0002?@\u0007\u2205\u0002\u0002@\u001e",
    "\u0003\u0002\u0002\u0002AB\u00073\u0002\u0002B \u0003\u0002\u0002\u0002",
    "CD\u00072\u0002\u0002D\"\u0003\u0002\u0002\u0002EF\t\u0006\u0002\u0002",
    "FG\u0003\u0002\u0002\u0002GH\b\u0012\u0002\u0002H$\u0003\u0002\u0002",
    "\u0002\u0003\u0002\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PredGrammarRightLexer extends antlr4.Lexer {

    static grammarFileName = "PredGrammarRight.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, "','", "'('", "')'", 
                         "'\u00AC'", "'\u2227'", "'\u2228'", "'\u21D2'", 
                         "'\u21D4'", "'\u2200'", "'\u2203'", "'1'", "'0'" ];
	static symbolicNames = [ null, "IND", "PRED", "CONST", "FUNCT", "SEP", 
                          "LPAREN", "RPAREN", "NEG", "AND", "OR", "IMPL", 
                          "EQ", "FORALL", "EXISTS", "T", "F", "WS" ];
	static ruleNames = [ "IND", "PRED", "CONST", "FUNCT", "SEP", "LPAREN", 
                      "RPAREN", "NEG", "AND", "OR", "IMPL", "EQ", "FORALL", 
                      "EXISTS", "T", "F", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

PredGrammarRightLexer.EOF = antlr4.Token.EOF;
PredGrammarRightLexer.IND = 1;
PredGrammarRightLexer.PRED = 2;
PredGrammarRightLexer.CONST = 3;
PredGrammarRightLexer.FUNCT = 4;
PredGrammarRightLexer.SEP = 5;
PredGrammarRightLexer.LPAREN = 6;
PredGrammarRightLexer.RPAREN = 7;
PredGrammarRightLexer.NEG = 8;
PredGrammarRightLexer.AND = 9;
PredGrammarRightLexer.OR = 10;
PredGrammarRightLexer.IMPL = 11;
PredGrammarRightLexer.EQ = 12;
PredGrammarRightLexer.FORALL = 13;
PredGrammarRightLexer.EXISTS = 14;
PredGrammarRightLexer.T = 15;
PredGrammarRightLexer.F = 16;
PredGrammarRightLexer.WS = 17;



