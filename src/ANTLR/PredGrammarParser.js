/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LS0Visitor from './visitors/LS0Visitor.js';
import LS1Visitor from './visitors/LS1Visitor.js';
import LS2Visitor from './visitors/LS2Visitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0011P\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001e\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003,\n\u0003\f\u0003\u000e\u0003/\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00046\n\u0004\f\u0004\u000e",
    "\u00049\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006I\n\u0006\f\u0006",
    "\u000e\u0006L\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0002",
    "\u0003\u0004\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002W\u0002\f",
    "\u0003\u0002\u0002\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u00060",
    "\u0003\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\nC\u0003\u0002\u0002",
    "\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0002\u0002\u0003\u000e",
    "\u0003\u0003\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001\u0002\u0010",
    "\u001e\u0005\u0006\u0004\u0002\u0011\u0012\u0007\n\u0002\u0002\u0012",
    "\u001e\u0005\u0004\u0003\n\u0013\u0014\u0007\b\u0002\u0002\u0014\u0015",
    "\u0005\u0004\u0003\u0002\u0015\u0016\u0007\t\u0002\u0002\u0016\u001e",
    "\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u000f\u0002\u0002\u0018\u0019",
    "\u0007\u0003\u0002\u0002\u0019\u001e\u0005\u0004\u0003\u0004\u001a\u001b",
    "\u0007\u0010\u0002\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c\u001e",
    "\u0005\u0004\u0003\u0003\u001d\u000f\u0003\u0002\u0002\u0002\u001d\u0011",
    "\u0003\u0002\u0002\u0002\u001d\u0013\u0003\u0002\u0002\u0002\u001d\u0017",
    "\u0003\u0002\u0002\u0002\u001d\u001a\u0003\u0002\u0002\u0002\u001e-",
    "\u0003\u0002\u0002\u0002\u001f \f\t\u0002\u0002 !\u0007\u000b\u0002",
    "\u0002!,\u0005\u0004\u0003\n\"#\f\b\u0002\u0002#$\u0007\f\u0002\u0002",
    "$,\u0005\u0004\u0003\t%&\f\u0007\u0002\u0002&\'\u0007\r\u0002\u0002",
    "\',\u0005\u0004\u0003\b()\f\u0006\u0002\u0002)*\u0007\u000e\u0002\u0002",
    "*,\u0005\u0004\u0003\u0007+\u001f\u0003\u0002\u0002\u0002+\"\u0003\u0002",
    "\u0002\u0002+%\u0003\u0002\u0002\u0002+(\u0003\u0002\u0002\u0002,/\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    ".\u0005\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u00020<\u0007\u0004",
    "\u0002\u000212\u0007\b\u0002\u000227\u0005\b\u0005\u000234\u0007\u0007",
    "\u0002\u000246\u0005\b\u0005\u000253\u0003\u0002\u0002\u000269\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\u0007\t\u0002",
    "\u0002;=\u0003\u0002\u0002\u0002<1\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=\u0007\u0003\u0002\u0002\u0002>B\u0007\u0003\u0002\u0002",
    "?B\u0007\u0005\u0002\u0002@B\u0005\n\u0006\u0002A>\u0003\u0002\u0002",
    "\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002B\t\u0003",
    "\u0002\u0002\u0002CD\u0007\u0006\u0002\u0002DE\u0007\b\u0002\u0002E",
    "J\u0005\b\u0005\u0002FG\u0007\u0007\u0002\u0002GI\u0005\b\u0005\u0002",
    "HF\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002",
    "\u0002\u0002MN\u0007\t\u0002\u0002N\u000b\u0003\u0002\u0002\u0002\t",
    "\u001d+-7<AJ"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PredGrammarParser extends antlr4.Parser {

    static grammarFileName = "PredGrammar.g4";
    static literalNames = [ null, null, null, null, null, "','", "'('", 
                            "')'", "'\\neg '", "'\\land '", "'\\lor '", 
                            "'\\Rightarrow '", "'\\Leftrightarrow '", "'\\forall '", 
                            "'\\exists '" ];
    static symbolicNames = [ null, "IND", "PRED", "CONST", "FUNCT", "SEP", 
                             "LPAREN", "RPAREN", "NEG", "AND", "OR", "IMPL", 
                             "EQ", "FORALL", "EXISTS", "WS" ];
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.PRED:
	            localctx = new PredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 14;
	            this.predicate();
	            break;
	        case PredGrammarParser.NEG:
	            localctx = new NegContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.match(PredGrammarParser.NEG);
	            this.state = 16;
	            this.formula(8);
	            break;
	        case PredGrammarParser.LPAREN:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 17;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 18;
	            this.formula(0);
	            this.state = 19;
	            this.match(PredGrammarParser.RPAREN);
	            break;
	        case PredGrammarParser.FORALL:
	            localctx = new ForallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(PredGrammarParser.FORALL);
	            this.state = 22;
	            this.match(PredGrammarParser.IND);
	            this.state = 23;
	            this.formula(2);
	            break;
	        case PredGrammarParser.EXISTS:
	            localctx = new ExistsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 24;
	            this.match(PredGrammarParser.EXISTS);
	            this.state = 25;
	            this.match(PredGrammarParser.IND);
	            this.state = 26;
	            this.formula(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 41;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 29;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 30;
	                    localctx.op = this.match(PredGrammarParser.AND);
	                    this.state = 31;
	                    localctx.right = this.formula(8);
	                    break;

	                case 2:
	                    localctx = new OrContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 32;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 33;
	                    localctx.op = this.match(PredGrammarParser.OR);
	                    this.state = 34;
	                    localctx.right = this.formula(7);
	                    break;

	                case 3:
	                    localctx = new ImplContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 35;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 36;
	                    localctx.op = this.match(PredGrammarParser.IMPL);
	                    this.state = 37;
	                    localctx.right = this.formula(6);
	                    break;

	                case 4:
	                    localctx = new EqContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PredGrammarParser.RULE_formula);
	                    this.state = 38;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 39;
	                    localctx.op = this.match(PredGrammarParser.EQ);
	                    this.state = 40;
	                    localctx.right = this.formula(5);
	                    break;

	                } 
	            }
	            this.state = 45;
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
	        this.state = 46;
	        this.match(PredGrammarParser.PRED);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 47;
	            this.match(PredGrammarParser.LPAREN);
	            this.state = 48;
	            this.term();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PredGrammarParser.SEP) {
	                this.state = 49;
	                this.match(PredGrammarParser.SEP);
	                this.state = 50;
	                this.term();
	                this.state = 55;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 56;
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PredGrammarParser.IND:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(PredGrammarParser.IND);
	            break;
	        case PredGrammarParser.CONST:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(PredGrammarParser.CONST);
	            break;
	        case PredGrammarParser.FUNCT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
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
	        this.state = 65;
	        this.match(PredGrammarParser.FUNCT);
	        this.state = 66;
	        this.match(PredGrammarParser.LPAREN);
	        this.state = 67;
	        this.term();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PredGrammarParser.SEP) {
	            this.state = 68;
	            this.match(PredGrammarParser.SEP);
	            this.state = 69;
	            this.term();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
	        return visitor.visitForall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PredGrammarParser.ForallContext = ForallContext;

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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
	    if ( visitor instanceof LS0Visitor || visitor instanceof LS1Visitor || visitor instanceof LS2Visitor ) {
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
