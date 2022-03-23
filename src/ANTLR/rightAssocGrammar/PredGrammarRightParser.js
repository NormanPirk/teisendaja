/* eslint-disable */
// Generated from PredGrammarRight.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

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
    "\t$%\f\b\u0002\u0002%&\u0007\f\u0002\u0002&.\u0005\u0004\u0003\b\'(",
    "\f\u0007\u0002\u0002()\u0007\r\u0002\u0002).\u0005\u0004\u0003\b*+\f",
    "\u0006\u0002\u0002+,\u0007\u000e\u0002\u0002,.\u0005\u0004\u0003\u0006",
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

export default class PredGrammarRightParser extends antlr4.Parser {

    static grammarFileName = "PredGrammarRight.g4";
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
        this.ruleNames = PredGrammarRightParser.ruleNames;
        this.literalNames = PredGrammarRightParser.literalNames;
        this.symbolicNames = PredGrammarRightParser.symbolicNames;
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
	    this.enterRule(localctx, 0, PredGrammarRightParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.formula(0);
	        this.state = 11;
	        this.match(PredGrammarRightParser.EOF);
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
	    this.enterRecursionRule(localctx, 2, PredGrammarRightParser.RULE_formula, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarRightParser.PRED:
	            localctx = new PredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 14;
	            this.predicate();
	            break;
	        case PredGrammarRightParser.FORALL:
	            localctx = new ForallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.match(PredGrammarRightParser.FORALL);
	            this.state = 16;
	            this.match(PredGrammarRightParser.IND);
	            this.state = 17;
	            this.formula(10);
	            break;
	        case PredGrammarRightParser.EXISTS:
	            localctx = new ExistsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 18;
	            this.match(PredGrammarRightParser.EXISTS);
	            this.state = 19;
	            this.match(PredGrammarRightParser.IND);
	            this.state = 20;
	            this.formula(9);
	            break;
	        case PredGrammarRightParser.NEG:
	            localctx = new NegContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(PredGrammarRightParser.NEG);
	            this.state = 22;
	            this.formula(8);
	            break;
	        case PredGrammarRightParser.LPAREN:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 23;
	            this.match(PredGrammarRightParser.LPAREN);
	            this.state = 24;
	            this.formula(0);
	            this.state = 25;
	            this.match(PredGrammarRightParser.RPAREN);
	            break;
	        case PredGrammarRightParser.T:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(PredGrammarRightParser.T);
	            break;
	        case PredGrammarRightParser.F:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 28;
	            this.match(PredGrammarRightParser.F);
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
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarRightParser.RULE_formula);
	                    this.state = 31;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 32;
	                    localctx.op = this.match(PredGrammarRightParser.AND);
	                    this.state = 33;
	                    localctx.right = this.formula(7);
	                    break;

	                case 2:
	                    localctx = new OrContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarRightParser.RULE_formula);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 35;
	                    localctx.op = this.match(PredGrammarRightParser.OR);
	                    this.state = 36;
	                    localctx.right = this.formula(6);
	                    break;

	                case 3:
	                    localctx = new ImplContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarRightParser.RULE_formula);
	                    this.state = 37;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 38;
	                    localctx.op = this.match(PredGrammarRightParser.IMPL);
	                    this.state = 39;
	                    localctx.right = this.formula(6);
	                    break;

	                case 4:
	                    localctx = new EqContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarRightParser.RULE_formula);
	                    this.state = 40;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 41;
	                    localctx.op = this.match(PredGrammarRightParser.EQ);
	                    this.state = 42;
	                    localctx.right = this.formula(4);
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
	    this.enterRule(localctx, 4, PredGrammarRightParser.RULE_predicate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(PredGrammarRightParser.PRED);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 49;
	            this.match(PredGrammarRightParser.LPAREN);
	            this.state = 50;
	            this.term();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PredGrammarRightParser.SEP) {
	                this.state = 51;
	                this.match(PredGrammarRightParser.SEP);
	                this.state = 52;
	                this.term();
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this.match(PredGrammarRightParser.RPAREN);

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
	    this.enterRule(localctx, 6, PredGrammarRightParser.RULE_term);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarRightParser.IND:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(PredGrammarRightParser.IND);
	            break;
	        case PredGrammarRightParser.CONST:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(PredGrammarRightParser.CONST);
	            break;
	        case PredGrammarRightParser.FUNCT:
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
	    this.enterRule(localctx, 8, PredGrammarRightParser.RULE_funct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(PredGrammarRightParser.FUNCT);
	        this.state = 68;
	        this.match(PredGrammarRightParser.LPAREN);
	        this.state = 69;
	        this.term();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PredGrammarRightParser.SEP) {
	            this.state = 70;
	            this.match(PredGrammarRightParser.SEP);
	            this.state = 71;
	            this.term();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
	        this.match(PredGrammarRightParser.RPAREN);
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

PredGrammarRightParser.EOF = antlr4.Token.EOF;
PredGrammarRightParser.IND = 1;
PredGrammarRightParser.PRED = 2;
PredGrammarRightParser.CONST = 3;
PredGrammarRightParser.FUNCT = 4;
PredGrammarRightParser.SEP = 5;
PredGrammarRightParser.LPAREN = 6;
PredGrammarRightParser.RPAREN = 7;
PredGrammarRightParser.NEG = 8;
PredGrammarRightParser.AND = 9;
PredGrammarRightParser.OR = 10;
PredGrammarRightParser.IMPL = 11;
PredGrammarRightParser.EQ = 12;
PredGrammarRightParser.FORALL = 13;
PredGrammarRightParser.EXISTS = 14;
PredGrammarRightParser.T = 15;
PredGrammarRightParser.F = 16;
PredGrammarRightParser.WS = 17;

PredGrammarRightParser.RULE_start = 0;
PredGrammarRightParser.RULE_formula = 1;
PredGrammarRightParser.RULE_predicate = 2;
PredGrammarRightParser.RULE_term = 3;
PredGrammarRightParser.RULE_funct = 4;

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
        this.ruleIndex = PredGrammarRightParser.RULE_start;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	EOF() {
	    return this.getToken(PredGrammarRightParser.EOF, 0);
	};


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
        this.ruleIndex = PredGrammarRightParser.RULE_formula;
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
	    return this.getToken(PredGrammarRightParser.NEG, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};


}

PredGrammarRightParser.NegContext = NegContext;

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
	    return this.getToken(PredGrammarRightParser.IMPL, 0);
	};


}

PredGrammarRightParser.ImplContext = ImplContext;

class ParenContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(PredGrammarRightParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(PredGrammarRightParser.RPAREN, 0);
	};


}

PredGrammarRightParser.ParenContext = ParenContext;

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
	    return this.getToken(PredGrammarRightParser.OR, 0);
	};


}

PredGrammarRightParser.OrContext = OrContext;

class PredContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};


}

PredGrammarRightParser.PredContext = PredContext;

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
	    return this.getToken(PredGrammarRightParser.AND, 0);
	};


}

PredGrammarRightParser.AndContext = AndContext;

class ForallContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FORALL() {
	    return this.getToken(PredGrammarRightParser.FORALL, 0);
	};

	IND() {
	    return this.getToken(PredGrammarRightParser.IND, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};


}

PredGrammarRightParser.ForallContext = ForallContext;

class TrueContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T() {
	    return this.getToken(PredGrammarRightParser.T, 0);
	};


}

PredGrammarRightParser.TrueContext = TrueContext;

class FalseContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	F() {
	    return this.getToken(PredGrammarRightParser.F, 0);
	};


}

PredGrammarRightParser.FalseContext = FalseContext;

class ExistsContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EXISTS() {
	    return this.getToken(PredGrammarRightParser.EXISTS, 0);
	};

	IND() {
	    return this.getToken(PredGrammarRightParser.IND, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};


}

PredGrammarRightParser.ExistsContext = ExistsContext;

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
	    return this.getToken(PredGrammarRightParser.EQ, 0);
	};


}

PredGrammarRightParser.EqContext = EqContext;

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
        this.ruleIndex = PredGrammarRightParser.RULE_predicate;
    }

	PRED() {
	    return this.getToken(PredGrammarRightParser.PRED, 0);
	};

	LPAREN() {
	    return this.getToken(PredGrammarRightParser.LPAREN, 0);
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
	    return this.getToken(PredGrammarRightParser.RPAREN, 0);
	};

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PredGrammarRightParser.SEP);
	    } else {
	        return this.getToken(PredGrammarRightParser.SEP, i);
	    }
	};



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
        this.ruleIndex = PredGrammarRightParser.RULE_term;
    }

	IND() {
	    return this.getToken(PredGrammarRightParser.IND, 0);
	};

	CONST() {
	    return this.getToken(PredGrammarRightParser.CONST, 0);
	};

	funct() {
	    return this.getTypedRuleContext(FunctContext,0);
	};


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
        this.ruleIndex = PredGrammarRightParser.RULE_funct;
    }

	FUNCT() {
	    return this.getToken(PredGrammarRightParser.FUNCT, 0);
	};

	LPAREN() {
	    return this.getToken(PredGrammarRightParser.LPAREN, 0);
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
	    return this.getToken(PredGrammarRightParser.RPAREN, 0);
	};

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PredGrammarRightParser.SEP);
	    } else {
	        return this.getToken(PredGrammarRightParser.SEP, i);
	    }
	};



}




PredGrammarRightParser.StartContext = StartContext; 
PredGrammarRightParser.FormulaContext = FormulaContext; 
PredGrammarRightParser.PredicateContext = PredicateContext; 
PredGrammarRightParser.TermContext = TermContext; 
PredGrammarRightParser.FunctContext = FunctContext; 
