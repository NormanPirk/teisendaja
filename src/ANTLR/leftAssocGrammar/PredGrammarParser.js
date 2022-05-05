/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import L1_1Visitor from './visitors/propositional/L1_1Visitor.js';
import L1_2Visitor from './visitors/propositional/L1_2Visitor.js';
import L2_1Visitor from './visitors/propositional/L2_1Visitor.js';
import L2_2Visitor from './visitors/propositional/L2_2Visitor.js';
import L3Visitor from './visitors/propositional/L3Visitor.js';
import L4_1Visitor from './visitors/propositional/L4_1Visitor.js';
import L4_2Visitor from './visitors/propositional/L4_2Visitor.js';
import L5_1Visitor from './visitors/propositional/L5_1Visitor.js';
import L5_2Visitor from './visitors/propositional/L5_2Visitor.js';
import L6_1Visitor from './visitors/propositional/L6_1Visitor.js';
import L6_2Visitor from './visitors/propositional/L6_2Visitor.js';
import L7_1Visitor from './visitors/propositional/L7_1Visitor.js';
import L7_2Visitor from './visitors/propositional/L7_2Visitor.js';
import L8_1Visitor from './visitors/propositional/L8_1Visitor.js';
import L8_2Visitor from './visitors/propositional/L8_2Visitor.js';
import L9_1Visitor from './visitors/propositional/L9_1Visitor.js';
import L9_2Visitor from './visitors/propositional/L9_2Visitor.js';
import L10_1Visitor from './visitors/propositional/L10_1Visitor.js';
import L10_2Visitor from './visitors/propositional/L10_2Visitor.js';
import L11_1Visitor from './visitors/propositional/L11_1Visitor.js';
import L11_2Visitor from './visitors/propositional/L11_2Visitor.js';
import L12_1Visitor from './visitors/propositional/L12_1Visitor.js';
import L12_2Visitor from './visitors/propositional/L12_2Visitor.js';
import L13_1Visitor from './visitors/propositional/L13_1Visitor.js';
import L13_2Visitor from './visitors/propositional/L13_2Visitor.js';
import L14_1Visitor from './visitors/propositional/L14_1Visitor.js';
import L14_2Visitor from './visitors/propositional/L14_2Visitor.js';
import L15_1Visitor from './visitors/propositional/L15_1Visitor.js';
import L15_2Visitor from './visitors/propositional/L15_2Visitor.js';
import L16_1Visitor from './visitors/propositional/L16_1Visitor.js';
import L16_2Visitor from './visitors/propositional/L16_2Visitor.js';
import L17_1Visitor from './visitors/propositional/L17_1Visitor.js';
import L17_2Visitor from './visitors/propositional/L17_2Visitor.js';
import L18_1Visitor from './visitors/propositional/L18_1Visitor.js';
import L18_2Visitor from './visitors/propositional/L18_2Visitor.js';
import L19_1Visitor from './visitors/propositional/L19_1Visitor.js';
import L19_2Visitor from './visitors/propositional/L19_2Visitor.js';
import L20_1Visitor from './visitors/propositional/L20_1Visitor.js';
import L20_2Visitor from './visitors/propositional/L20_2Visitor.js';
import L21_1Visitor from './visitors/propositional/L21_2Visitor.js';
import L21_2Visitor from './visitors/propositional/L21_1Visitor.js';
import L22_1Visitor from './visitors/propositional/L22_2Visitor.js';
import L22_2Visitor from './visitors/propositional/L22_1Visitor.js';
import L23_1Visitor from './visitors/propositional/L23_1Visitor.js';
import L23_2Visitor from './visitors/propositional/L23_2Visitor.js';
import L24_1Visitor from './visitors/propositional/L24_1Visitor.js';
import L24_2Visitor from './visitors/propositional/L24_2Visitor.js';
import L25_1Visitor from './visitors/propositional/L25_1Visitor.js';
import L25_2Visitor from './visitors/propositional/L25_2Visitor.js';
import L26_1Visitor from './visitors/propositional/L26_1Visitor.js';
import L26_2Visitor from './visitors/propositional/L26_2Visitor.js';
import L27_1Visitor from './visitors/propositional/L27_1Visitor.js';
import L27_2Visitor from './visitors/propositional/L27_2Visitor.js';

import P1_1Visitor from './visitors/predicate/P1_1Visitor.js';
import P1_2Visitor from './visitors/predicate/P1_2Visitor.js';
import P2_1Visitor from './visitors/predicate/P2_1Visitor.js';
import P2_2Visitor from './visitors/predicate/P2_2Visitor.js';
import P3_1Visitor from './visitors/predicate/P3_1Visitor.js';
import P3_2Visitor from './visitors/predicate/P3_2Visitor.js';
import P4_1Visitor from './visitors/predicate/P4_1Visitor.js';
import P4_2Visitor from './visitors/predicate/P4_2Visitor.js';
import P5_1Visitor from './visitors/predicate/P5_1Visitor.js';
import P5_2Visitor from './visitors/predicate/P5_2Visitor.js';
import P6_1Visitor from './visitors/predicate/P6_1Visitor.js';
import P6_2Visitor from './visitors/predicate/P6_2Visitor.js';
import P7_1Visitor from './visitors/predicate/P7_1Visitor.js';
import P7_2Visitor from './visitors/predicate/P7_2Visitor.js';
import P8_1Visitor from './visitors/predicate/P8_1Visitor.js';
import P8_2Visitor from './visitors/predicate/P8_2Visitor.js';
import P9_1Visitor from './visitors/predicate/P9_1Visitor.js';
import P9_2Visitor from './visitors/predicate/P9_2Visitor.js';
import P10_1Visitor from './visitors/predicate/P10_1Visitor.js';
import P10_2Visitor from './visitors/predicate/P10_2Visitor.js';
import P11Visitor from './visitors/predicate/P11Visitor.js';
import P12Visitor from './visitors/predicate/P12Visitor.js';
import P13Visitor from './visitors/predicate/P13Visitor.js';
import P14Visitor from './visitors/predicate/P14Visitor.js';

import FreeVarsVisitor from './visitors/freeVariables/FreeVarsVisitor.js';
import ColorParensVisitor from './visitors/coloringParens/ColorParensVisitor.js';
import SymbolValidateVisitor from "./visitors/validatingSymbols/SymbolValidateVisitor.js";

function isValidVisitor(visitor) {
    const visitors = [L1_1Visitor, L1_2Visitor, L2_1Visitor, L2_2Visitor, L3Visitor,
        L4_1Visitor, L4_2Visitor, L5_1Visitor, L5_2Visitor, L6_1Visitor, L6_2Visitor, L7_1Visitor, L7_2Visitor, L8_1Visitor,
        L8_2Visitor, L9_1Visitor, L9_2Visitor, L10_1Visitor, L10_2Visitor, L11_1Visitor, L11_2Visitor,
        L12_1Visitor, L12_2Visitor, L13_1Visitor, L13_2Visitor, L14_1Visitor, L14_2Visitor,
        L15_1Visitor, L15_2Visitor, L16_1Visitor, L16_2Visitor, L17_1Visitor, L17_2Visitor,
        L18_1Visitor, L18_2Visitor, L19_1Visitor, L19_2Visitor, L20_1Visitor, L20_2Visitor,
        L21_1Visitor, L21_2Visitor, L22_1Visitor, L22_2Visitor, L23_1Visitor, L23_2Visitor,
        L24_1Visitor, L24_2Visitor, L25_1Visitor, L25_2Visitor, L26_1Visitor, L26_2Visitor,
        L27_1Visitor, L27_2Visitor, P1_1Visitor, P1_2Visitor, 
        P2_1Visitor, P2_2Visitor, P3_1Visitor, P3_2Visitor,P4_1Visitor, P4_2Visitor,
        P5_1Visitor, P5_2Visitor, P6_1Visitor, P6_2Visitor,P7_1Visitor, P7_2Visitor,
        P8_1Visitor, P8_2Visitor, P9_1Visitor, P9_2Visitor, P10_1Visitor, P10_2Visitor,
        P11Visitor, P12Visitor, P13Visitor, P14Visitor, 
        FreeVarsVisitor, ColorParensVisitor, SymbolValidateVisitor];       
    for (let i = 0; i < visitors.length; i++) {
        if (visitor instanceof visitors[i]) {
            return true;
        }
    }
    return false;
}

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011Q\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    " \n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003.\n\u0003\f\u0003\u000e\u00031\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00048",
    "\n\u0004\f\u0004\u000e\u0004;\u000b\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004?\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005C\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006J\n\u0006",
    "\f\u0006\u000e\u0006M\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0002\u0003\u0004\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002Y\u0002",
    "\f\u0003\u0002\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006",
    "2\u0003\u0002\u0002\u0002\bB\u0003\u0002\u0002\u0002\nD\u0003\u0002",
    "\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0002\u0002\u0003",
    "\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001\u0002",
    "\u0010 \u0005\u0006\u0004\u0002\u0011\u0012\u0007\r\u0002\u0002\u0012",
    "\u0013\u0007\u0003\u0002\u0002\u0013 \u0005\u0004\u0003\f\u0014\u0015",
    "\u0007\u000e\u0002\u0002\u0015\u0016\u0007\u0003\u0002\u0002\u0016 ",
    "\u0005\u0004\u0003\u000b\u0017\u0018\u0007\b\u0002\u0002\u0018 \u0005",
    "\u0004\u0003\n\u0019\u001a\u0007\u0006\u0002\u0002\u001a\u001b\u0005",
    "\u0004\u0003\u0002\u001b\u001c\u0007\u0007\u0002\u0002\u001c \u0003",
    "\u0002\u0002\u0002\u001d \u0007\u000f\u0002\u0002\u001e \u0007\u0010",
    "\u0002\u0002\u001f\u000f\u0003\u0002\u0002\u0002\u001f\u0011\u0003\u0002",
    "\u0002\u0002\u001f\u0014\u0003\u0002\u0002\u0002\u001f\u0017\u0003\u0002",
    "\u0002\u0002\u001f\u0019\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 /\u0003\u0002\u0002",
    "\u0002!\"\f\t\u0002\u0002\"#\u0007\t\u0002\u0002#.\u0005\u0004\u0003",
    "\n$%\f\b\u0002\u0002%&\u0007\n\u0002\u0002&.\u0005\u0004\u0003\t\'(",
    "\f\u0007\u0002\u0002()\u0007\u000b\u0002\u0002).\u0005\u0004\u0003\b",
    "*+\f\u0006\u0002\u0002+,\u0007\f\u0002\u0002,.\u0005\u0004\u0003\u0007",
    "-!\u0003\u0002\u0002\u0002-$\u0003\u0002\u0002\u0002-\'\u0003\u0002",
    "\u0002\u0002-*\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u0005\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u00022>\u0007\u0004\u0002\u000234\u0007\u0006",
    "\u0002\u000249\u0005\b\u0005\u000256\u0007\u0005\u0002\u000268\u0005",
    "\b\u0005\u000275\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u00029",
    "7\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002<=\u0007\u0007\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>3\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\u0007",
    "\u0003\u0002\u0002\u0002@C\u0007\u0003\u0002\u0002AC\u0005\n\u0006\u0002",
    "B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002C\t\u0003\u0002",
    "\u0002\u0002DE\u0007\u0003\u0002\u0002EF\u0007\u0006\u0002\u0002FK\u0005",
    "\b\u0005\u0002GH\u0007\u0005\u0002\u0002HJ\u0005\b\u0005\u0002IG\u0003",
    "\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002",
    "KL\u0003\u0002\u0002\u0002LN\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002",
    "\u0002NO\u0007\u0007\u0002\u0002O\u000b\u0003\u0002\u0002\u0002\t\u001f",
    "-/9>BK"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PredGrammarParser extends antlr4.Parser {

    static grammarFileName = "PredGrammar.g4";
    static literalNames = [ null, null, null, "','", "'('", "')'", "'\u00AC'", 
                            "'\u2227'", "'\u2228'", "'\u21D2'", "'\u21D4'", 
                            "'\u2200'", "'\u2203'", "'1'", "'0'" ];
    static symbolicNames = [ null, "SYMBOL", "PRED", "SEP", "LPAREN", "RPAREN", 
                             "NEG", "AND", "OR", "IMPL", "EQ", "FORALL", 
                             "EXISTS", "T", "F", "WS" ];
    static ruleNames = [ "start", "formula", "predicate", "term", "funct" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PredGrammarParser.ruleNames;
        this.literalNames = PredGrammarParser.literalNames;
        this.symbolicNames = PredGrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PredGrammarParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.formula(0);
	        this.state = 11;
	        this.match(PredGrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, PredGrammarParser.RULE_formula, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.PRED:
	            localctx = new PredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 14;
	            this.predicate();
	            break;
	        case PredGrammarParser.FORALL:
	            localctx = new ForallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.match(PredGrammarParser.FORALL);
	            this.state = 16;
	            this.match(PredGrammarParser.SYMBOL);
	            this.state = 17;
	            this.formula(10);
	            break;
	        case PredGrammarParser.EXISTS:
	            localctx = new ExistsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 18;
	            this.match(PredGrammarParser.EXISTS);
	            this.state = 19;
	            this.match(PredGrammarParser.SYMBOL);
	            this.state = 20;
	            this.formula(9);
	            break;
	        case PredGrammarParser.NEG:
	            localctx = new NegContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(PredGrammarParser.NEG);
	            this.state = 22;
	            this.formula(8);
	            break;
	        case PredGrammarParser.LPAREN:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 23;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 24;
	            this.formula(0);
	            this.state = 25;
	            this.match(PredGrammarParser.RPAREN);
	            break;
	        case PredGrammarParser.T:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(PredGrammarParser.T);
	            break;
	        case PredGrammarParser.F:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 28;
	            this.match(PredGrammarParser.F);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 43;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 31;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 32;
	                    localctx.op = this.match(PredGrammarParser.AND);
	                    this.state = 33;
	                    localctx.right = this.formula(8);
	                    break;

	                case 2:
	                    localctx = new OrContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 35;
	                    localctx.op = this.match(PredGrammarParser.OR);
	                    this.state = 36;
	                    localctx.right = this.formula(7);
	                    break;

	                case 3:
	                    localctx = new ImplContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 37;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 38;
	                    localctx.op = this.match(PredGrammarParser.IMPL);
	                    this.state = 39;
	                    localctx.right = this.formula(6);
	                    break;

	                case 4:
	                    localctx = new EqContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 40;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 41;
	                    localctx.op = this.match(PredGrammarParser.EQ);
	                    this.state = 42;
	                    localctx.right = this.formula(5);
	                    break;

	                } 
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PredGrammarParser.RULE_predicate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(PredGrammarParser.PRED);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 49;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 50;
	            this.term();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PredGrammarParser.SEP) {
	                this.state = 51;
	                this.match(PredGrammarParser.SEP);
	                this.state = 52;
	                this.term();
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this.match(PredGrammarParser.RPAREN);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PredGrammarParser.RULE_term);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(PredGrammarParser.SYMBOL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.funct();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funct() {
	    let localctx = new FunctContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PredGrammarParser.RULE_funct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(PredGrammarParser.SYMBOL);
	        this.state = 67;
	        this.match(PredGrammarParser.LPAREN);
	        this.state = 68;
	        this.term();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PredGrammarParser.SEP) {
	            this.state = 69;
	            this.match(PredGrammarParser.SEP);
	            this.state = 70;
	            this.term();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(PredGrammarParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PredGrammarParser.EOF = antlr4.Token.EOF;
PredGrammarParser.SYMBOL = 1;
PredGrammarParser.PRED = 2;
PredGrammarParser.SEP = 3;
PredGrammarParser.LPAREN = 4;
PredGrammarParser.RPAREN = 5;
PredGrammarParser.NEG = 6;
PredGrammarParser.AND = 7;
PredGrammarParser.OR = 8;
PredGrammarParser.IMPL = 9;
PredGrammarParser.EQ = 10;
PredGrammarParser.FORALL = 11;
PredGrammarParser.EXISTS = 12;
PredGrammarParser.T = 13;
PredGrammarParser.F = 14;
PredGrammarParser.WS = 15;

PredGrammarParser.RULE_start = 0;
PredGrammarParser.RULE_formula = 1;
PredGrammarParser.RULE_predicate = 2;
PredGrammarParser.RULE_term = 3;
PredGrammarParser.RULE_funct = 4;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_start;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	EOF() {
	    return this.getToken(PredGrammarParser.EOF, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NegContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEG() {
	    return this.getToken(PredGrammarParser.NEG, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitNeg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.NegContext = NegContext;

class ImplContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.op = null; // Token;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	IMPL() {
	    return this.getToken(PredGrammarParser.IMPL, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitImpl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ImplContext = ImplContext;

class ParenContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(PredGrammarParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(PredGrammarParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitParen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ParenContext = ParenContext;

class OrContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.op = null; // Token;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	OR() {
	    return this.getToken(PredGrammarParser.OR, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.OrContext = OrContext;

class PredContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitPred(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.PredContext = PredContext;

class AndContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.op = null; // Token;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	AND() {
	    return this.getToken(PredGrammarParser.AND, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.AndContext = AndContext;

class ForallContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FORALL() {
	    return this.getToken(PredGrammarParser.FORALL, 0);
	};

	SYMBOL() {
	    return this.getToken(PredGrammarParser.SYMBOL, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitForall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ForallContext = ForallContext;

class TrueContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T() {
	    return this.getToken(PredGrammarParser.T, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitTrue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.TrueContext = TrueContext;

class FalseContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	F() {
	    return this.getToken(PredGrammarParser.F, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.FalseContext = FalseContext;

class ExistsContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EXISTS() {
	    return this.getToken(PredGrammarParser.EXISTS, 0);
	};

	SYMBOL() {
	    return this.getToken(PredGrammarParser.SYMBOL, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitExists(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ExistsContext = ExistsContext;

class EqContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.op = null; // Token;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	EQ() {
	    return this.getToken(PredGrammarParser.EQ, 0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitEq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.EqContext = EqContext;

class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_predicate;
    }

	PRED() {
	    return this.getToken(PredGrammarParser.PRED, 0);
	};

	LPAREN() {
	    return this.getToken(PredGrammarParser.LPAREN, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(PredGrammarParser.RPAREN, 0);
	};

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PredGrammarParser.SEP);
	    } else {
	        return this.getToken(PredGrammarParser.SEP, i);
	    }
	};


	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_term;
    }

	SYMBOL() {
	    return this.getToken(PredGrammarParser.SYMBOL, 0);
	};

	funct() {
	    return this.getTypedRuleContext(FunctContext,0);
	};

	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_funct;
    }

	SYMBOL() {
	    return this.getToken(PredGrammarParser.SYMBOL, 0);
	};

	LPAREN() {
	    return this.getToken(PredGrammarParser.LPAREN, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(PredGrammarParser.RPAREN, 0);
	};

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PredGrammarParser.SEP);
	    } else {
	        return this.getToken(PredGrammarParser.SEP, i);
	    }
	};


	accept(visitor) {
	    if ( isValidVisitor(visitor) ) {
	        return visitor.visitFunct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PredGrammarParser.StartContext = StartContext; 
PredGrammarParser.FormulaContext = FormulaContext; 
PredGrammarParser.PredicateContext = PredicateContext; 
PredGrammarParser.TermContext = TermContext; 
PredGrammarParser.FunctContext = FunctContext; 
