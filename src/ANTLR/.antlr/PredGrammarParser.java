// Generated from /Users/norman/Documents/UTInformaatika/bakatöö/teisendaja/src/ANTLR/PredGrammar.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PredGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IND=1, PRED=2, CONST=3, FUNCT=4, SEP=5, LPAREN=6, RPAREN=7, NEG=8, AND=9, 
		OR=10, IMPL=11, EQ=12, FORALL=13, EXISTS=14, T=15, F=16, WS=17;
	public static final int
		RULE_start = 0, RULE_formula = 1, RULE_quantifier = 2, RULE_afterQuantifier = 3, 
		RULE_predicate = 4, RULE_term = 5, RULE_funct = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "formula", "quantifier", "afterQuantifier", "predicate", "term", 
			"funct"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, "','", "'('", "')'", "'\u00AC'", "'\u2227'", 
			"'\u2228'", "'\u21D2'", "'\u21D4'", "'\u2200'", "'\u2203'", "'1'", "'0'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IND", "PRED", "CONST", "FUNCT", "SEP", "LPAREN", "RPAREN", "NEG", 
			"AND", "OR", "IMPL", "EQ", "FORALL", "EXISTS", "T", "F", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "PredGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PredGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public TerminalNode EOF() { return getToken(PredGrammarParser.EOF, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			formula(0);
			setState(15);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormulaContext extends ParserRuleContext {
		public FormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formula; }
	 
		public FormulaContext() { }
		public void copyFrom(FormulaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NegContext extends FormulaContext {
		public TerminalNode NEG() { return getToken(PredGrammarParser.NEG, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public NegContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class ImplContext extends FormulaContext {
		public FormulaContext left;
		public Token op;
		public FormulaContext right;
		public List<FormulaContext> formula() {
			return getRuleContexts(FormulaContext.class);
		}
		public FormulaContext formula(int i) {
			return getRuleContext(FormulaContext.class,i);
		}
		public TerminalNode IMPL() { return getToken(PredGrammarParser.IMPL, 0); }
		public ImplContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class ParenContext extends FormulaContext {
		public TerminalNode LPAREN() { return getToken(PredGrammarParser.LPAREN, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(PredGrammarParser.RPAREN, 0); }
		public ParenContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class OrContext extends FormulaContext {
		public FormulaContext left;
		public Token op;
		public FormulaContext right;
		public List<FormulaContext> formula() {
			return getRuleContexts(FormulaContext.class);
		}
		public FormulaContext formula(int i) {
			return getRuleContext(FormulaContext.class,i);
		}
		public TerminalNode OR() { return getToken(PredGrammarParser.OR, 0); }
		public OrContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class PredContext extends FormulaContext {
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public PredContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class AndContext extends FormulaContext {
		public FormulaContext left;
		public Token op;
		public FormulaContext right;
		public List<FormulaContext> formula() {
			return getRuleContexts(FormulaContext.class);
		}
		public FormulaContext formula(int i) {
			return getRuleContext(FormulaContext.class,i);
		}
		public TerminalNode AND() { return getToken(PredGrammarParser.AND, 0); }
		public AndContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class TrueContext extends FormulaContext {
		public TerminalNode T() { return getToken(PredGrammarParser.T, 0); }
		public TrueContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class FalseContext extends FormulaContext {
		public TerminalNode F() { return getToken(PredGrammarParser.F, 0); }
		public FalseContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class QuantContext extends FormulaContext {
		public QuantifierContext quantifier() {
			return getRuleContext(QuantifierContext.class,0);
		}
		public QuantContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class EqContext extends FormulaContext {
		public FormulaContext left;
		public Token op;
		public FormulaContext right;
		public List<FormulaContext> formula() {
			return getRuleContexts(FormulaContext.class);
		}
		public FormulaContext formula(int i) {
			return getRuleContext(FormulaContext.class,i);
		}
		public TerminalNode EQ() { return getToken(PredGrammarParser.EQ, 0); }
		public EqContext(FormulaContext ctx) { copyFrom(ctx); }
	}

	public final FormulaContext formula() throws RecognitionException {
		return formula(0);
	}

	private FormulaContext formula(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		FormulaContext _localctx = new FormulaContext(_ctx, _parentState);
		FormulaContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_formula, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PRED:
				{
				_localctx = new PredContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(18);
				predicate();
				}
				break;
			case NEG:
				{
				_localctx = new NegContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(19);
				match(NEG);
				setState(20);
				formula(9);
				}
				break;
			case LPAREN:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				match(LPAREN);
				setState(22);
				formula(0);
				setState(23);
				match(RPAREN);
				}
				break;
			case FORALL:
			case EXISTS:
				{
				_localctx = new QuantContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(25);
				quantifier();
				}
				break;
			case T:
				{
				_localctx = new TrueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(26);
				match(T);
				}
				break;
			case F:
				{
				_localctx = new FalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(27);
				match(F);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(44);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(42);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new FormulaContext(_parentctx, _parentState));
						((AndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(30);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(31);
						((AndContext)_localctx).op = match(AND);
						setState(32);
						((AndContext)_localctx).right = formula(9);
						}
						break;
					case 2:
						{
						_localctx = new OrContext(new FormulaContext(_parentctx, _parentState));
						((OrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(33);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(34);
						((OrContext)_localctx).op = match(OR);
						setState(35);
						((OrContext)_localctx).right = formula(8);
						}
						break;
					case 3:
						{
						_localctx = new ImplContext(new FormulaContext(_parentctx, _parentState));
						((ImplContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(36);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(37);
						((ImplContext)_localctx).op = match(IMPL);
						setState(38);
						((ImplContext)_localctx).right = formula(7);
						}
						break;
					case 4:
						{
						_localctx = new EqContext(new FormulaContext(_parentctx, _parentState));
						((EqContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(39);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(40);
						((EqContext)_localctx).op = match(EQ);
						setState(41);
						((EqContext)_localctx).right = formula(6);
						}
						break;
					}
					} 
				}
				setState(46);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class QuantifierContext extends ParserRuleContext {
		public QuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantifier; }
	 
		public QuantifierContext() { }
		public void copyFrom(QuantifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ForallContext extends QuantifierContext {
		public TerminalNode FORALL() { return getToken(PredGrammarParser.FORALL, 0); }
		public TerminalNode IND() { return getToken(PredGrammarParser.IND, 0); }
		public AfterQuantifierContext afterQuantifier() {
			return getRuleContext(AfterQuantifierContext.class,0);
		}
		public ForallContext(QuantifierContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends QuantifierContext {
		public TerminalNode EXISTS() { return getToken(PredGrammarParser.EXISTS, 0); }
		public TerminalNode IND() { return getToken(PredGrammarParser.IND, 0); }
		public AfterQuantifierContext afterQuantifier() {
			return getRuleContext(AfterQuantifierContext.class,0);
		}
		public ExistsContext(QuantifierContext ctx) { copyFrom(ctx); }
	}

	public final QuantifierContext quantifier() throws RecognitionException {
		QuantifierContext _localctx = new QuantifierContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_quantifier);
		try {
			setState(53);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FORALL:
				_localctx = new ForallContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				match(FORALL);
				setState(48);
				match(IND);
				setState(49);
				afterQuantifier();
				}
				break;
			case EXISTS:
				_localctx = new ExistsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(50);
				match(EXISTS);
				setState(51);
				match(IND);
				setState(52);
				afterQuantifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AfterQuantifierContext extends ParserRuleContext {
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(PredGrammarParser.LPAREN, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(PredGrammarParser.RPAREN, 0); }
		public QuantifierContext quantifier() {
			return getRuleContext(QuantifierContext.class,0);
		}
		public AfterQuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_afterQuantifier; }
	}

	public final AfterQuantifierContext afterQuantifier() throws RecognitionException {
		AfterQuantifierContext _localctx = new AfterQuantifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_afterQuantifier);
		try {
			setState(61);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PRED:
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				predicate();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				match(LPAREN);
				setState(57);
				formula(0);
				setState(58);
				match(RPAREN);
				}
				break;
			case FORALL:
			case EXISTS:
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				quantifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PredicateContext extends ParserRuleContext {
		public TerminalNode PRED() { return getToken(PredGrammarParser.PRED, 0); }
		public TerminalNode LPAREN() { return getToken(PredGrammarParser.LPAREN, 0); }
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(PredGrammarParser.RPAREN, 0); }
		public List<TerminalNode> SEP() { return getTokens(PredGrammarParser.SEP); }
		public TerminalNode SEP(int i) {
			return getToken(PredGrammarParser.SEP, i);
		}
		public PredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate; }
	}

	public final PredicateContext predicate() throws RecognitionException {
		PredicateContext _localctx = new PredicateContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_predicate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(PRED);
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(64);
				match(LPAREN);
				setState(65);
				term();
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEP) {
					{
					{
					setState(66);
					match(SEP);
					setState(67);
					term();
					}
					}
					setState(72);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(73);
				match(RPAREN);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public TerminalNode IND() { return getToken(PredGrammarParser.IND, 0); }
		public TerminalNode CONST() { return getToken(PredGrammarParser.CONST, 0); }
		public FunctContext funct() {
			return getRuleContext(FunctContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_term);
		try {
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IND:
				enterOuterAlt(_localctx, 1);
				{
				setState(77);
				match(IND);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				match(CONST);
				}
				break;
			case FUNCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(79);
				funct();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctContext extends ParserRuleContext {
		public TerminalNode FUNCT() { return getToken(PredGrammarParser.FUNCT, 0); }
		public TerminalNode LPAREN() { return getToken(PredGrammarParser.LPAREN, 0); }
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(PredGrammarParser.RPAREN, 0); }
		public List<TerminalNode> SEP() { return getTokens(PredGrammarParser.SEP); }
		public TerminalNode SEP(int i) {
			return getToken(PredGrammarParser.SEP, i);
		}
		public FunctContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funct; }
	}

	public final FunctContext funct() throws RecognitionException {
		FunctContext _localctx = new FunctContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_funct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(FUNCT);
			setState(83);
			match(LPAREN);
			setState(84);
			term();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEP) {
				{
				{
				setState(85);
				match(SEP);
				setState(86);
				term();
				}
				}
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(92);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return formula_sempred((FormulaContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean formula_sempred(FormulaContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\23a\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\37\n\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\7\3-\n\3\f\3\16\3\60\13\3\3\4\3\4\3\4\3\4\3\4\3\4\5"+
		"\48\n\4\3\5\3\5\3\5\3\5\3\5\3\5\5\5@\n\5\3\6\3\6\3\6\3\6\3\6\7\6G\n\6"+
		"\f\6\16\6J\13\6\3\6\3\6\5\6N\n\6\3\7\3\7\3\7\5\7S\n\7\3\b\3\b\3\b\3\b"+
		"\3\b\7\bZ\n\b\f\b\16\b]\13\b\3\b\3\b\3\b\2\3\4\t\2\4\6\b\n\f\16\2\2\2"+
		"j\2\20\3\2\2\2\4\36\3\2\2\2\6\67\3\2\2\2\b?\3\2\2\2\nA\3\2\2\2\fR\3\2"+
		"\2\2\16T\3\2\2\2\20\21\5\4\3\2\21\22\7\2\2\3\22\3\3\2\2\2\23\24\b\3\1"+
		"\2\24\37\5\n\6\2\25\26\7\n\2\2\26\37\5\4\3\13\27\30\7\b\2\2\30\31\5\4"+
		"\3\2\31\32\7\t\2\2\32\37\3\2\2\2\33\37\5\6\4\2\34\37\7\21\2\2\35\37\7"+
		"\22\2\2\36\23\3\2\2\2\36\25\3\2\2\2\36\27\3\2\2\2\36\33\3\2\2\2\36\34"+
		"\3\2\2\2\36\35\3\2\2\2\37.\3\2\2\2 !\f\n\2\2!\"\7\13\2\2\"-\5\4\3\13#"+
		"$\f\t\2\2$%\7\f\2\2%-\5\4\3\n&\'\f\b\2\2\'(\7\r\2\2(-\5\4\3\t)*\f\7\2"+
		"\2*+\7\16\2\2+-\5\4\3\b, \3\2\2\2,#\3\2\2\2,&\3\2\2\2,)\3\2\2\2-\60\3"+
		"\2\2\2.,\3\2\2\2./\3\2\2\2/\5\3\2\2\2\60.\3\2\2\2\61\62\7\17\2\2\62\63"+
		"\7\3\2\2\638\5\b\5\2\64\65\7\20\2\2\65\66\7\3\2\2\668\5\b\5\2\67\61\3"+
		"\2\2\2\67\64\3\2\2\28\7\3\2\2\29@\5\n\6\2:;\7\b\2\2;<\5\4\3\2<=\7\t\2"+
		"\2=@\3\2\2\2>@\5\6\4\2?9\3\2\2\2?:\3\2\2\2?>\3\2\2\2@\t\3\2\2\2AM\7\4"+
		"\2\2BC\7\b\2\2CH\5\f\7\2DE\7\7\2\2EG\5\f\7\2FD\3\2\2\2GJ\3\2\2\2HF\3\2"+
		"\2\2HI\3\2\2\2IK\3\2\2\2JH\3\2\2\2KL\7\t\2\2LN\3\2\2\2MB\3\2\2\2MN\3\2"+
		"\2\2N\13\3\2\2\2OS\7\3\2\2PS\7\5\2\2QS\5\16\b\2RO\3\2\2\2RP\3\2\2\2RQ"+
		"\3\2\2\2S\r\3\2\2\2TU\7\6\2\2UV\7\b\2\2V[\5\f\7\2WX\7\7\2\2XZ\5\f\7\2"+
		"YW\3\2\2\2Z]\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\^\3\2\2\2][\3\2\2\2^_\7\t\2"+
		"\2_\17\3\2\2\2\13\36,.\67?HMR[";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}