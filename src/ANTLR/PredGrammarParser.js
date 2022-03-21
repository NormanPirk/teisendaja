/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LS0_1Visitor from './visitors/propositional/LS0_1Visitor.js';
import LS0_2Visitor from './visitors/propositional/LS0_2Visitor.js';
import LS1_1Visitor from './visitors/propositional/LS1_1Visitor.js';
import LS1_2Visitor from './visitors/propositional/LS1_2Visitor.js';
import LS2_1Visitor from './visitors/propositional/LS2_1Visitor.js';
import LS2_2Visitor from './visitors/propositional/LS2_2Visitor.js';
import LS3Visitor from './visitors/propositional/LS3Visitor.js';
import LS4Visitor from './visitors/propositional/LS4Visitor.js';
import LS5_1Visitor from './visitors/propositional/LS5_1Visitor.js';
import LS5_2Visitor from './visitors/propositional/LS5_2Visitor.js';
import LS6_1Visitor from './visitors/propositional/LS6_1Visitor.js';
import LS6_2Visitor from './visitors/propositional/LS6_2Visitor.js';
import LS7_1Visitor from './visitors/propositional/LS7_1Visitor.js';
import LS7_2Visitor from './visitors/propositional/LS7_2Visitor.js';
import LS8_1Visitor from './visitors/propositional/LS8_1Visitor.js';
import LS8_2Visitor from './visitors/propositional/LS8_2Visitor.js';
import LS9_1Visitor from './visitors/propositional/LS9_1Visitor.js';
import LS9_2Visitor from './visitors/propositional/LS9_2Visitor.js';
import LS10_1Visitor from './visitors/propositional/LS10_1Visitor.js';
import LS10_2Visitor from './visitors/propositional/LS10_2Visitor.js';
import LS11_1Visitor from './visitors/propositional/LS11_1Visitor.js';
import LS11_2Visitor from './visitors/propositional/LS11_2Visitor.js';
import LS12_1Visitor from './visitors/propositional/LS12_1Visitor.js';
import LS12_2Visitor from './visitors/propositional/LS12_2Visitor.js';
import LS13_1Visitor from './visitors/propositional/LS13_1Visitor.js';
import LS13_2Visitor from './visitors/propositional/LS13_2Visitor.js';
import LS14_1Visitor from './visitors/propositional/LS14_1Visitor.js';
import LS14_2Visitor from './visitors/propositional/LS14_2Visitor.js';
import LS15_1Visitor from './visitors/propositional/LS15_1Visitor.js';
import LS15_2Visitor from './visitors/propositional/LS15_2Visitor.js';
import LS16_1Visitor from './visitors/propositional/LS16_1Visitor.js';
import LS16_2Visitor from './visitors/propositional/LS16_2Visitor.js';
import LS17_1Visitor from './visitors/propositional/LS17_1Visitor.js';
import LS17_2Visitor from './visitors/propositional/LS17_2Visitor.js';
import LS18_1Visitor from './visitors/propositional/LS18_1Visitor.js';
import LS18_2Visitor from './visitors/propositional/LS18_2Visitor.js';
import LS19_1Visitor from './visitors/propositional/LS19_1Visitor.js';
import LS19_2Visitor from './visitors/propositional/LS19_2Visitor.js';
import LS20_1Visitor from './visitors/propositional/LS20_1Visitor.js';
import LS20_2Visitor from './visitors/propositional/LS20_2Visitor.js';
import LS21_1Visitor from './visitors/propositional/LS21_1Visitor.js';
import LS21_2Visitor from './visitors/propositional/LS21_2Visitor.js';
import LS22_1Visitor from './visitors/propositional/LS22_1Visitor.js';
import LS22_2Visitor from './visitors/propositional/LS22_2Visitor.js';
import LS23_1Visitor from './visitors/propositional/LS23_1Visitor.js';
import LS23_2Visitor from './visitors/propositional/LS23_2Visitor.js';
import LS24Visitor from './visitors/propositional/LS24Visitor.js';
import LS25_1Visitor from './visitors/propositional/LS25_1Visitor.js';
import LS25_2Visitor from './visitors/propositional/LS25_2Visitor.js';
import LS26_1Visitor from './visitors/propositional/LS26_1Visitor.js';
import LS26_2Visitor from './visitors/propositional/LS26_2Visitor.js';
import LS27_1Visitor from './visitors/propositional/LS27_1Visitor.js';
import LS27_2Visitor from './visitors/propositional/LS27_2Visitor.js';
import PS1_11Visitor from './visitors/predicate/PS1_11Visitor.js';
import PS1_12Visitor from './visitors/predicate/PS1_12Visitor.js';
import PS1_21Visitor from './visitors/predicate/PS1_21Visitor.js';
import PS1_22Visitor from './visitors/predicate/PS1_22Visitor.js';
import PS2_11Visitor from './visitors/predicate/PS2_11Visitor.js';
import PS2_12Visitor from './visitors/predicate/PS2_12Visitor.js';
import PS2_21Visitor from './visitors/predicate/PS2_21Visitor.js';
import PS2_22Visitor from './visitors/predicate/PS2_22Visitor.js';
import PS3_1Visitor from './visitors/predicate/PS3_1Visitor.js';
import PS3_2Visitor from './visitors/predicate/PS3_2Visitor.js';
import PS3_3Visitor from './visitors/predicate/PS3_3Visitor.js';
import PS3_4Visitor from './visitors/predicate/PS3_4Visitor.js';
import PS3_5Visitor from './visitors/predicate/PS3_5Visitor.js';
import PS3_6Visitor from './visitors/predicate/PS3_6Visitor.js';
import PS3_7Visitor from './visitors/predicate/PS3_7Visitor.js';
import PS3_8Visitor from './visitors/predicate/PS3_8Visitor.js';
import PS4_1Visitor from './visitors/predicate/PS4_1Visitor.js';
import PS4_2Visitor from './visitors/predicate/PS4_2Visitor.js';
import PS4_3Visitor from './visitors/predicate/PS4_3Visitor.js';
import PS4_4Visitor from './visitors/predicate/PS4_4Visitor.js';
import PS4_5Visitor from './visitors/predicate/PS4_5Visitor.js';
import PS4_6Visitor from './visitors/predicate/PS4_6Visitor.js';
import PS4_7Visitor from './visitors/predicate/PS4_7Visitor.js';
import PS4_8Visitor from './visitors/predicate/PS4_8Visitor.js';
import PS5_1Visitor from './visitors/predicate/PS5_1Visitor.js';
import PS5_2Visitor from './visitors/predicate/PS5_2Visitor.js';
import PS6_1Visitor from './visitors/predicate/PS6_1Visitor.js';
import PS6_2Visitor from './visitors/predicate/PS6_2Visitor.js';
import FreeVarsVisitor from './visitors/freeVariables/FreeVarsVisitor.js';

function isValidVisitor(visitor) {
    const visitors = [LS0_1Visitor, LS0_2Visitor, LS1_1Visitor, LS1_2Visitor, LS2_1Visitor, LS2_2Visitor, LS3Visitor,
        LS4Visitor, LS5_1Visitor, LS5_2Visitor, LS6_1Visitor, LS6_2Visitor, LS7_1Visitor, LS7_2Visitor, LS8_1Visitor,
        LS8_2Visitor, LS9_1Visitor, LS9_2Visitor, LS10_1Visitor, LS10_2Visitor, LS11_1Visitor, LS11_2Visitor,
        LS12_1Visitor, LS12_2Visitor, LS13_1Visitor, LS13_2Visitor, LS14_1Visitor, LS14_2Visitor,
        LS15_1Visitor, LS15_2Visitor, LS16_1Visitor, LS16_2Visitor, LS17_1Visitor, LS17_2Visitor,
        LS18_1Visitor, LS18_2Visitor, LS19_1Visitor, LS19_2Visitor, LS20_1Visitor, LS20_2Visitor, 
        LS21_1Visitor, LS21_2Visitor, LS22_1Visitor, LS22_2Visitor, LS23_1Visitor, LS23_2Visitor,
        LS24Visitor, LS25_1Visitor, LS25_2Visitor, LS26_1Visitor, LS26_2Visitor, LS27_1Visitor, LS27_2Visitor,
		PS1_11Visitor, PS1_12Visitor, PS1_21Visitor, PS1_22Visitor, PS2_11Visitor, PS2_12Visitor,
		PS2_21Visitor, PS2_22Visitor, PS3_1Visitor, PS3_2Visitor, PS3_3Visitor, PS3_4Visitor,
		PS3_5Visitor, PS3_6Visitor, PS3_7Visitor, PS3_8Visitor, PS4_1Visitor, PS4_2Visitor, PS4_3Visitor, PS4_4Visitor,
		PS4_5Visitor, PS4_6Visitor, PS4_7Visitor, PS4_8Visitor, PS5_1Visitor, PS5_2Visitor, 
		PS6_1Visitor, PS6_2Visitor, FreeVarsVisitor, LS25_1Visitor, LS25_2Visitor];
    for (let i = 0; i < visitors.length; i++) {
        if (visitor instanceof visitors[i]) {
            return true;
        }
    }
    return false;
}



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013R\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    " \n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003.\n\u0003\f\u0003\u000e\u00031\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00048",
    "\n\u0004\f\u0004\u000e\u0004;\u000b\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004?\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "K\n\u0006\f\u0006\u000e\u0006N\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0002\u0003\u0004\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002",
    "[\u0002\f\u0003\u0002\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002",
    "\u00062\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nE\u0003",
    "\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0002\u0002",
    "\u0003\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001",
    "\u0002\u0010 \u0005\u0006\u0004\u0002\u0011\u0012\u0007\u000f\u0002",
    "\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013 \u0005\u0004\u0003",
    "\f\u0014\u0015\u0007\u0010\u0002\u0002\u0015\u0016\u0007\u0003\u0002",
    "\u0002\u0016 \u0005\u0004\u0003\u000b\u0017\u0018\u0007\n\u0002\u0002",
    "\u0018 \u0005\u0004\u0003\n\u0019\u001a\u0007\b\u0002\u0002\u001a\u001b",
    "\u0005\u0004\u0003\u0002\u001b\u001c\u0007\t\u0002\u0002\u001c \u0003",
    "\u0002\u0002\u0002\u001d \u0007\u0011\u0002\u0002\u001e \u0007\u0012",
    "\u0002\u0002\u001f\u000f\u0003\u0002\u0002\u0002\u001f\u0011\u0003\u0002",
    "\u0002\u0002\u001f\u0014\u0003\u0002\u0002\u0002\u001f\u0017\u0003\u0002",
    "\u0002\u0002\u001f\u0019\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 /\u0003\u0002\u0002",
    "\u0002!\"\f\t\u0002\u0002\"#\u0007\u000b\u0002\u0002#.\u0005\u0004\u0003",
    "\n$%\f\b\u0002\u0002%&\u0007\f\u0002\u0002&.\u0005\u0004\u0003\t\'(",
    "\f\u0007\u0002\u0002()\u0007\r\u0002\u0002).\u0005\u0004\u0003\b*+\f",
    "\u0006\u0002\u0002+,\u0007\u000e\u0002\u0002,.\u0005\u0004\u0003\u0007",
    "-!\u0003\u0002\u0002\u0002-$\u0003\u0002\u0002\u0002-\'\u0003\u0002",
    "\u0002\u0002-*\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u0005\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u00022>\u0007\u0004\u0002\u000234\u0007\b",
    "\u0002\u000249\u0005\b\u0005\u000256\u0007\u0007\u0002\u000268\u0005",
    "\b\u0005\u000275\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u00029",
    "7\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002<=\u0007\t\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>3\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\u0007",
    "\u0003\u0002\u0002\u0002@D\u0007\u0003\u0002\u0002AD\u0007\u0005\u0002",
    "\u0002BD\u0005\n\u0006\u0002C@\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002CB\u0003\u0002\u0002\u0002D\t\u0003\u0002\u0002\u0002EF",
    "\u0007\u0006\u0002\u0002FG\u0007\b\u0002\u0002GL\u0005\b\u0005\u0002",
    "HI\u0007\u0007\u0002\u0002IK\u0005\b\u0005\u0002JH\u0003\u0002\u0002",
    "\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002MO\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002OP\u0007",
    "\t\u0002\u0002P\u000b\u0003\u0002\u0002\u0002\t\u001f-/9>CL"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PredGrammarParser extends antlr4.Parser {

    static grammarFileName = "PredGrammar.g4";
    static literalNames = [ null, null, null, null, null, "','", "'('", 
                            "')'", "'\u00AC'", "'\u2227'", "'\u2228'", "'\u21D2'", 
                            "'\u21D4'", "'\u2200'", "'\u2203'", "'1'", "'0'" ];
    static symbolicNames = [ null, "IND", "PRED", "CONST", "FUNCT", "SEP", 
                             "LPAREN", "RPAREN", "NEG", "AND", "OR", "IMPL", 
                             "EQ", "FORALL", "EXISTS", "T", "F", "WS" ];
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
	            this.match(PredGrammarParser.IND);
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
	            this.match(PredGrammarParser.IND);
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.IND:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(PredGrammarParser.IND);
	            break;
	        case PredGrammarParser.CONST:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(PredGrammarParser.CONST);
	            break;
	        case PredGrammarParser.FUNCT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.funct();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	        this.state = 67;
	        this.match(PredGrammarParser.FUNCT);
	        this.state = 68;
	        this.match(PredGrammarParser.LPAREN);
	        this.state = 69;
	        this.term();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PredGrammarParser.SEP) {
	            this.state = 70;
	            this.match(PredGrammarParser.SEP);
	            this.state = 71;
	            this.term();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
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
PredGrammarParser.IND = 1;
PredGrammarParser.PRED = 2;
PredGrammarParser.CONST = 3;
PredGrammarParser.FUNCT = 4;
PredGrammarParser.SEP = 5;
PredGrammarParser.LPAREN = 6;
PredGrammarParser.RPAREN = 7;
PredGrammarParser.NEG = 8;
PredGrammarParser.AND = 9;
PredGrammarParser.OR = 10;
PredGrammarParser.IMPL = 11;
PredGrammarParser.EQ = 12;
PredGrammarParser.FORALL = 13;
PredGrammarParser.EXISTS = 14;
PredGrammarParser.T = 15;
PredGrammarParser.F = 16;
PredGrammarParser.WS = 17;

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

	IND() {
	    return this.getToken(PredGrammarParser.IND, 0);
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

	IND() {
	    return this.getToken(PredGrammarParser.IND, 0);
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

	IND() {
	    return this.getToken(PredGrammarParser.IND, 0);
	};

	CONST() {
	    return this.getToken(PredGrammarParser.CONST, 0);
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

	FUNCT() {
	    return this.getToken(PredGrammarParser.FUNCT, 0);
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
