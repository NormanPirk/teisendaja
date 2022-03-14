/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LS0_1Visitor from './visitors/LS0_1Visitor.js';
import LS0_2Visitor from './visitors/LS0_2Visitor.js';
import LS1_1Visitor from './visitors/LS1_1Visitor.js';
import LS1_2Visitor from './visitors/LS1_2Visitor.js';
import LS2_1Visitor from './visitors/LS2_1Visitor.js';
import LS2_2Visitor from './visitors/LS2_2Visitor.js';
import LS3Visitor from './visitors/LS3Visitor.js';
import LS4Visitor from './visitors/LS4Visitor.js';
import LS5_1Visitor from './visitors/LS5_1Visitor.js';
import LS5_2Visitor from './visitors/LS5_2Visitor.js';
import LS6_1Visitor from './visitors/LS6_1Visitor.js';
import LS6_2Visitor from './visitors/LS6_2Visitor.js';
import LS7_1Visitor from './visitors/LS7_1Visitor.js';
import LS7_2Visitor from './visitors/LS7_2Visitor.js';
import LS8_1Visitor from './visitors/LS8_1Visitor.js';
import LS8_2Visitor from './visitors/LS8_2Visitor.js';
import LS9_1Visitor from './visitors/LS9_1Visitor.js';
import LS9_2Visitor from './visitors/LS9_2Visitor.js';
import LS10_1Visitor from './visitors/LS10_1Visitor.js';
import LS10_2Visitor from './visitors/LS10_2Visitor.js';
import LS11_1Visitor from './visitors/LS11_1Visitor.js';
import LS11_2Visitor from './visitors/LS11_2Visitor.js';
import LS12_1Visitor from './visitors/LS12_1Visitor.js';
import LS12_2Visitor from './visitors/LS12_2Visitor.js';
import LS13_1Visitor from './visitors/LS13_1Visitor.js';
import LS13_2Visitor from './visitors/LS13_2Visitor.js';
import LS14_1Visitor from './visitors/LS14_1Visitor.js';
import LS14_2Visitor from './visitors/LS14_2Visitor.js';
import LS15_1Visitor from './visitors/LS15_1Visitor.js';
import LS15_2Visitor from './visitors/LS15_2Visitor.js';
import LS16_1Visitor from './visitors/LS16_1Visitor.js';
import LS16_2Visitor from './visitors/LS16_2Visitor.js';
import LS17_1Visitor from './visitors/LS17_1Visitor.js';
import LS17_2Visitor from './visitors/LS17_2Visitor.js';
import LS18_1Visitor from './visitors/LS18_1Visitor.js';
import LS18_2Visitor from './visitors/LS18_2Visitor.js';
import LS19_1Visitor from './visitors/LS19_1Visitor.js';
import LS19_2Visitor from './visitors/LS19_2Visitor.js';
import LS20_1Visitor from './visitors/LS20_1Visitor.js';
import LS20_2Visitor from './visitors/LS20_2Visitor.js';
import LS21_1Visitor from './visitors/LS21_1Visitor.js';
import LS21_2Visitor from './visitors/LS21_2Visitor.js';
import LS22_1Visitor from './visitors/LS22_1Visitor.js';
import LS22_2Visitor from './visitors/LS22_2Visitor.js';
import LS23_1Visitor from './visitors/LS23_1Visitor.js';
import LS23_2Visitor from './visitors/LS23_2Visitor.js';
import LS24Visitor from './visitors/LS24Visitor.js';

function isValidVisitor(visitor) {
    const visitors = [LS0_1Visitor, LS0_2Visitor, LS1_1Visitor, LS1_2Visitor, LS2_1Visitor, LS2_2Visitor, LS3Visitor,
        LS4Visitor, LS5_1Visitor, LS5_2Visitor, LS6_1Visitor, LS6_2Visitor, LS7_1Visitor, LS7_2Visitor, LS8_1Visitor,
        LS8_2Visitor, LS9_1Visitor, LS9_2Visitor, LS10_1Visitor, LS10_2Visitor, LS11_1Visitor, LS11_2Visitor,
        LS12_1Visitor, LS12_2Visitor, LS13_1Visitor, LS13_2Visitor, LS14_1Visitor, LS14_2Visitor,
        LS15_1Visitor, LS15_2Visitor, LS16_1Visitor, LS16_2Visitor, LS17_1Visitor, LS17_2Visitor,
        LS18_1Visitor, LS18_2Visitor, LS19_1Visitor, LS19_2Visitor, LS20_1Visitor, LS20_2Visitor, 
		LS21_1Visitor, LS21_2Visitor, LS22_1Visitor, LS22_2Visitor, LS23_1Visitor, LS23_2Visitor,
		LS24Visitor];
    for (let i = 0; i < visitors.length; i++) {
        if (visitor instanceof visitors[i]) {
            return true;
        }
    }
    return false;
}



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001f\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003-\n\u0003\f\u0003\u000e\u00030\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00048\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005@\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006G\n\u0006\f\u0006\u000e\u0006J\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006N\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007S\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0007\bZ\n\b\f\b\u000e\b]\u000b\b\u0003\b\u0003\b\u0003\b\u0002\u0003",
    "\u0004\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0002\u0002j\u0002\u0010",
    "\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u00067",
    "\u0003\u0002\u0002\u0002\b?\u0003\u0002\u0002\u0002\nA\u0003\u0002\u0002",
    "\u0002\fR\u0003\u0002\u0002\u0002\u000eT\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0005\u0004\u0003\u0002\u0011\u0012\u0007\u0002\u0002\u0003\u0012",
    "\u0003\u0003\u0002\u0002\u0002\u0013\u0014\b\u0003\u0001\u0002\u0014",
    "\u001f\u0005\n\u0006\u0002\u0015\u0016\u0007\n\u0002\u0002\u0016\u001f",
    "\u0005\u0004\u0003\u000b\u0017\u0018\u0007\b\u0002\u0002\u0018\u0019",
    "\u0005\u0004\u0003\u0002\u0019\u001a\u0007\t\u0002\u0002\u001a\u001f",
    "\u0003\u0002\u0002\u0002\u001b\u001f\u0005\u0006\u0004\u0002\u001c\u001f",
    "\u0007\u0011\u0002\u0002\u001d\u001f\u0007\u0012\u0002\u0002\u001e\u0013",
    "\u0003\u0002\u0002\u0002\u001e\u0015\u0003\u0002\u0002\u0002\u001e\u0017",
    "\u0003\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c",
    "\u0003\u0002\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f.",
    "\u0003\u0002\u0002\u0002 !\f\n\u0002\u0002!\"\u0007\u000b\u0002\u0002",
    "\"-\u0005\u0004\u0003\u000b#$\f\t\u0002\u0002$%\u0007\f\u0002\u0002",
    "%-\u0005\u0004\u0003\n&\'\f\b\u0002\u0002\'(\u0007\r\u0002\u0002(-\u0005",
    "\u0004\u0003\t)*\f\u0007\u0002\u0002*+\u0007\u000e\u0002\u0002+-\u0005",
    "\u0004\u0003\b, \u0003\u0002\u0002\u0002,#\u0003\u0002\u0002\u0002,",
    "&\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0005\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000212\u0007\u000f\u0002\u0002",
    "23\u0007\u0003\u0002\u000238\u0005\b\u0005\u000245\u0007\u0010\u0002",
    "\u000256\u0007\u0003\u0002\u000268\u0005\b\u0005\u000271\u0003\u0002",
    "\u0002\u000274\u0003\u0002\u0002\u00028\u0007\u0003\u0002\u0002\u0002",
    "9@\u0005\n\u0006\u0002:;\u0007\b\u0002\u0002;<\u0005\u0004\u0003\u0002",
    "<=\u0007\t\u0002\u0002=@\u0003\u0002\u0002\u0002>@\u0005\u0006\u0004",
    "\u0002?9\u0003\u0002\u0002\u0002?:\u0003\u0002\u0002\u0002?>\u0003\u0002",
    "\u0002\u0002@\t\u0003\u0002\u0002\u0002AM\u0007\u0004\u0002\u0002BC",
    "\u0007\b\u0002\u0002CH\u0005\f\u0007\u0002DE\u0007\u0007\u0002\u0002",
    "EG\u0005\f\u0007\u0002FD\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002",
    "\u0002\u0002JH\u0003\u0002\u0002\u0002KL\u0007\t\u0002\u0002LN\u0003",
    "\u0002\u0002\u0002MB\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "N\u000b\u0003\u0002\u0002\u0002OS\u0007\u0003\u0002\u0002PS\u0007\u0005",
    "\u0002\u0002QS\u0005\u000e\b\u0002RO\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002S\r\u0003\u0002\u0002\u0002",
    "TU\u0007\u0006\u0002\u0002UV\u0007\b\u0002\u0002V[\u0005\f\u0007\u0002",
    "WX\u0007\u0007\u0002\u0002XZ\u0005\f\u0007\u0002YW\u0003\u0002\u0002",
    "\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003",
    "\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002",
    "^_\u0007\t\u0002\u0002_\u000f\u0003\u0002\u0002\u0002\u000b\u001e,.",
    "7?HMR["].join("");


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
    static ruleNames = [ "start", "formula", "quantifier", "afterQuantifier", 
                         "predicate", "term", "funct" ];

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
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PredGrammarParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.formula(0);
	        this.state = 15;
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
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.PRED:
	            localctx = new PredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 18;
	            this.predicate();
	            break;
	        case PredGrammarParser.NEG:
	            localctx = new NegContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 19;
	            this.match(PredGrammarParser.NEG);
	            this.state = 20;
	            this.formula(9);
	            break;
	        case PredGrammarParser.LPAREN:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 22;
	            this.formula(0);
	            this.state = 23;
	            this.match(PredGrammarParser.RPAREN);
	            break;
	        case PredGrammarParser.FORALL:
	        case PredGrammarParser.EXISTS:
	            localctx = new QuantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 25;
	            this.quantifier();
	            break;
	        case PredGrammarParser.T:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 26;
	            this.match(PredGrammarParser.T);
	            break;
	        case PredGrammarParser.F:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(PredGrammarParser.F);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 42;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 30;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 31;
	                    localctx.op = this.match(PredGrammarParser.AND);
	                    this.state = 32;
	                    localctx.right = this.formula(9);
	                    break;

	                case 2:
	                    localctx = new OrContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 33;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 34;
	                    localctx.op = this.match(PredGrammarParser.OR);
	                    this.state = 35;
	                    localctx.right = this.formula(8);
	                    break;

	                case 3:
	                    localctx = new ImplContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 36;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 37;
	                    localctx.op = this.match(PredGrammarParser.IMPL);
	                    this.state = 38;
	                    localctx.right = this.formula(7);
	                    break;

	                case 4:
	                    localctx = new EqContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 39;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 40;
	                    localctx.op = this.match(PredGrammarParser.EQ);
	                    this.state = 41;
	                    localctx.right = this.formula(6);
	                    break;

	                } 
	            }
	            this.state = 46;
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



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PredGrammarParser.RULE_quantifier);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.FORALL:
	            localctx = new ForallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(PredGrammarParser.FORALL);
	            this.state = 48;
	            this.match(PredGrammarParser.IND);
	            this.state = 49;
	            this.afterQuantifier();
	            break;
	        case PredGrammarParser.EXISTS:
	            localctx = new ExistsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(PredGrammarParser.EXISTS);
	            this.state = 51;
	            this.match(PredGrammarParser.IND);
	            this.state = 52;
	            this.afterQuantifier();
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



	afterQuantifier() {
	    let localctx = new AfterQuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PredGrammarParser.RULE_afterQuantifier);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.PRED:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.predicate();
	            break;
	        case PredGrammarParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 57;
	            this.formula(0);
	            this.state = 58;
	            this.match(PredGrammarParser.RPAREN);
	            break;
	        case PredGrammarParser.FORALL:
	        case PredGrammarParser.EXISTS:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.quantifier();
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PredGrammarParser.RULE_predicate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(PredGrammarParser.PRED);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 64;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 65;
	            this.term();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PredGrammarParser.SEP) {
	                this.state = 66;
	                this.match(PredGrammarParser.SEP);
	                this.state = 67;
	                this.term();
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 73;
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
	    this.enterRule(localctx, 10, PredGrammarParser.RULE_term);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.IND:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(PredGrammarParser.IND);
	            break;
	        case PredGrammarParser.CONST:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.match(PredGrammarParser.CONST);
	            break;
	        case PredGrammarParser.FUNCT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
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
	    this.enterRule(localctx, 12, PredGrammarParser.RULE_funct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(PredGrammarParser.FUNCT);
	        this.state = 83;
	        this.match(PredGrammarParser.LPAREN);
	        this.state = 84;
	        this.term();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PredGrammarParser.SEP) {
	            this.state = 85;
	            this.match(PredGrammarParser.SEP);
	            this.state = 86;
	            this.term();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
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
PredGrammarParser.RULE_quantifier = 2;
PredGrammarParser.RULE_afterQuantifier = 3;
PredGrammarParser.RULE_predicate = 4;
PredGrammarParser.RULE_term = 5;
PredGrammarParser.RULE_funct = 6;

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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
	        return visitor.visitAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.AndContext = AndContext;

class TrueContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T() {
	    return this.getToken(PredGrammarParser.T, 0);
	};

	accept(visitor) {
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
	        return visitor.visitFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.FalseContext = FalseContext;

class QuantContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	accept(visitor) {
	    if (isValidVisitor(visitor)) {
	        return visitor.visitQuant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.QuantContext = QuantContext;

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
	    if (isValidVisitor(visitor)) {
	        return visitor.visitEq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.EqContext = EqContext;

class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_quantifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ForallContext extends QuantifierContext {

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

	afterQuantifier() {
	    return this.getTypedRuleContext(AfterQuantifierContext,0);
	};

	accept(visitor) {
	    if (isValidVisitor(visitor)) {
	        return visitor.visitForall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ForallContext = ForallContext;

class ExistsContext extends QuantifierContext {

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

	afterQuantifier() {
	    return this.getTypedRuleContext(AfterQuantifierContext,0);
	};

	accept(visitor) {
	    if (isValidVisitor(visitor)) {
	        return visitor.visitExists(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ExistsContext = ExistsContext;

class AfterQuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PredGrammarParser.RULE_afterQuantifier;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	LPAREN() {
	    return this.getToken(PredGrammarParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(PredGrammarParser.RPAREN, 0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	accept(visitor) {
	    if (isValidVisitor(visitor)) {
	        return visitor.visitAfterQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
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
	    if (isValidVisitor(visitor)) {
	        return visitor.visitFunct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PredGrammarParser.StartContext = StartContext; 
PredGrammarParser.FormulaContext = FormulaContext; 
PredGrammarParser.QuantifierContext = QuantifierContext; 
PredGrammarParser.AfterQuantifierContext = AfterQuantifierContext; 
PredGrammarParser.PredicateContext = PredicateContext; 
PredGrammarParser.TermContext = TermContext; 
PredGrammarParser.FunctContext = FunctContext; 
