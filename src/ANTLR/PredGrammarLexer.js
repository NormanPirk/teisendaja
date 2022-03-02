/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0012|\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0002",
    "\u0002\u0012\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012\u0003\u0002\u0007\u0003\u0002r|\u0003",
    "\u0002C\\\u0003\u0002cg\u0003\u0002hq\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002{\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0003#\u0003\u0002\u0002\u0002\u0005%\u0003\u0002\u0002",
    "\u0002\u0007\'\u0003\u0002\u0002\u0002\t)\u0003\u0002\u0002\u0002\u000b",
    "+\u0003\u0002\u0002\u0002\r-\u0003\u0002\u0002\u0002\u000f/\u0003\u0002",
    "\u0002\u0002\u00111\u0003\u0002\u0002\u0002\u00137\u0003\u0002\u0002",
    "\u0002\u0015>\u0003\u0002\u0002\u0002\u0017D\u0003\u0002\u0002\u0002",
    "\u0019Q\u0003\u0002\u0002\u0002\u001bb\u0003\u0002\u0002\u0002\u001d",
    "k\u0003\u0002\u0002\u0002\u001ft\u0003\u0002\u0002\u0002!x\u0003\u0002",
    "\u0002\u0002#$\t\u0002\u0002\u0002$\u0004\u0003\u0002\u0002\u0002%&",
    "\t\u0003\u0002\u0002&\u0006\u0003\u0002\u0002\u0002\'(\t\u0004\u0002",
    "\u0002(\b\u0003\u0002\u0002\u0002)*\t\u0005\u0002\u0002*\n\u0003\u0002",
    "\u0002\u0002+,\u0007.\u0002\u0002,\f\u0003\u0002\u0002\u0002-.\u0007",
    "*\u0002\u0002.\u000e\u0003\u0002\u0002\u0002/0\u0007+\u0002\u00020\u0010",
    "\u0003\u0002\u0002\u000212\u0007^\u0002\u000223\u0007p\u0002\u00023",
    "4\u0007g\u0002\u000245\u0007i\u0002\u000256\u0007\"\u0002\u00026\u0012",
    "\u0003\u0002\u0002\u000278\u0007^\u0002\u000289\u0007n\u0002\u00029",
    ":\u0007c\u0002\u0002:;\u0007p\u0002\u0002;<\u0007f\u0002\u0002<=\u0007",
    "\"\u0002\u0002=\u0014\u0003\u0002\u0002\u0002>?\u0007^\u0002\u0002?",
    "@\u0007n\u0002\u0002@A\u0007q\u0002\u0002AB\u0007t\u0002\u0002BC\u0007",
    "\"\u0002\u0002C\u0016\u0003\u0002\u0002\u0002DE\u0007^\u0002\u0002E",
    "F\u0007T\u0002\u0002FG\u0007k\u0002\u0002GH\u0007i\u0002\u0002HI\u0007",
    "j\u0002\u0002IJ\u0007v\u0002\u0002JK\u0007c\u0002\u0002KL\u0007t\u0002",
    "\u0002LM\u0007t\u0002\u0002MN\u0007q\u0002\u0002NO\u0007y\u0002\u0002",
    "OP\u0007\"\u0002\u0002P\u0018\u0003\u0002\u0002\u0002QR\u0007^\u0002",
    "\u0002RS\u0007N\u0002\u0002ST\u0007g\u0002\u0002TU\u0007h\u0002\u0002",
    "UV\u0007v\u0002\u0002VW\u0007t\u0002\u0002WX\u0007k\u0002\u0002XY\u0007",
    "i\u0002\u0002YZ\u0007j\u0002\u0002Z[\u0007v\u0002\u0002[\\\u0007c\u0002",
    "\u0002\\]\u0007t\u0002\u0002]^\u0007t\u0002\u0002^_\u0007q\u0002\u0002",
    "_`\u0007y\u0002\u0002`a\u0007\"\u0002\u0002a\u001a\u0003\u0002\u0002",
    "\u0002bc\u0007^\u0002\u0002cd\u0007h\u0002\u0002de\u0007q\u0002\u0002",
    "ef\u0007t\u0002\u0002fg\u0007c\u0002\u0002gh\u0007n\u0002\u0002hi\u0007",
    "n\u0002\u0002ij\u0007\"\u0002\u0002j\u001c\u0003\u0002\u0002\u0002k",
    "l\u0007^\u0002\u0002lm\u0007g\u0002\u0002mn\u0007z\u0002\u0002no\u0007",
    "k\u0002\u0002op\u0007u\u0002\u0002pq\u0007v\u0002\u0002qr\u0007u\u0002",
    "\u0002rs\u0007\"\u0002\u0002s\u001e\u0003\u0002\u0002\u0002tu\u0007",
    "^\u0002\u0002uv\u0007^\u0002\u0002vw\u0007\"\u0002\u0002w \u0003\u0002",
    "\u0002\u0002xy\t\u0006\u0002\u0002yz\u0003\u0002\u0002\u0002z{\b\u0011",
    "\u0002\u0002{\"\u0003\u0002\u0002\u0002\u0003\u0002\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PredGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "PredGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, "','", "'('", "')'", 
                         "'\\neg '", "'\\land '", "'\\lor '", "'\\Rightarrow '", 
                         "'\\Leftrightarrow '", "'\\forall '", "'\\exists '", 
                         "'\\\\ '" ];
	static symbolicNames = [ null, "IND", "PRED", "CONST", "FUNCT", "SEP", 
                          "LPAREN", "RPAREN", "NEG", "AND", "OR", "IMPL", 
                          "EQ", "FORALL", "EXISTS", "NEWLINE", "WS" ];
	static ruleNames = [ "IND", "PRED", "CONST", "FUNCT", "SEP", "LPAREN", 
                      "RPAREN", "NEG", "AND", "OR", "IMPL", "EQ", "FORALL", 
                      "EXISTS", "NEWLINE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

PredGrammarLexer.EOF = antlr4.Token.EOF;
PredGrammarLexer.IND = 1;
PredGrammarLexer.PRED = 2;
PredGrammarLexer.CONST = 3;
PredGrammarLexer.FUNCT = 4;
PredGrammarLexer.SEP = 5;
PredGrammarLexer.LPAREN = 6;
PredGrammarLexer.RPAREN = 7;
PredGrammarLexer.NEG = 8;
PredGrammarLexer.AND = 9;
PredGrammarLexer.OR = 10;
PredGrammarLexer.IMPL = 11;
PredGrammarLexer.EQ = 12;
PredGrammarLexer.FORALL = 13;
PredGrammarLexer.EXISTS = 14;
PredGrammarLexer.NEWLINE = 15;
PredGrammarLexer.WS = 16;



