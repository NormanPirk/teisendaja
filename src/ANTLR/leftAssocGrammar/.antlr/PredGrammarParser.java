// Generated from /Users/norman/Documents/UTInformaatika/bakatöö/teisendaja/src/ANTLR/leftAssocGrammar/PredGrammar.g4 by ANTLR 4.8
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
		SYMBOL=1, PRED=2, SEP=3, LPAREN=4, RPAREN=5, NEG=6, AND=7, OR=8, IMPL=9, 
		EQ=10, FORALL=11, EXISTS=12, T=13, F=14, WS=15;
	public static final int
		RULE_start = 0, RULE_formula = 1, RULE_predicate = 2, RULE_term = 3, RULE_funct = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "formula", "predicate", "term", "funct"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "','", "'('", "')'", "'\u00AC'", "'\u2227'", "'\u2228'", 
			"'\u21D2'", "'\u21D4'", "'\u2200'", "'\u2203'", "'1'", "'0'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SYMBOL", "PRED", "SEP", "LPAREN", "RPAREN", "NEG", "AND", "OR", 
			"IMPL", "EQ", "FORALL", "EXISTS", "T", "F", "WS"
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
			setState(10);
			formula(0);
			setState(11);
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
	public static class ForallContext extends FormulaContext {
		public TerminalNode FORALL() { return getToken(PredGrammarParser.FORALL, 0); }
		public TerminalNode SYMBOL() { return getToken(PredGrammarParser.SYMBOL, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public ForallContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class TrueContext extends FormulaContext {
		public TerminalNode T() { return getToken(PredGrammarParser.T, 0); }
		public TrueContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class FalseContext extends FormulaContext {
		public TerminalNode F() { return getToken(PredGrammarParser.F, 0); }
		public FalseContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends FormulaContext {
		public TerminalNode EXISTS() { return getToken(PredGrammarParser.EXISTS, 0); }
		public TerminalNode SYMBOL() { return getToken(PredGrammarParser.SYMBOL, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public ExistsContext(FormulaContext ctx) { copyFrom(ctx); }
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
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PRED:
				{
				_localctx = new PredContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(14);
				predicate();
				}
				break;
			case FORALL:
				{
				_localctx = new ForallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(15);
				match(FORALL);
				setState(16);
				match(SYMBOL);
				setState(17);
				formula(10);
				}
				break;
			case EXISTS:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(18);
				match(EXISTS);
				setState(19);
				match(SYMBOL);
				setState(20);
				formula(9);
				}
				break;
			case NEG:
				{
				_localctx = new NegContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				match(NEG);
				setState(22);
				formula(8);
				}
				break;
			case LPAREN:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(23);
				match(LPAREN);
				setState(24);
				formula(0);
				setState(25);
				match(RPAREN);
				}
				break;
			case T:
				{
				_localctx = new TrueContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(27);
				match(T);
				}
				break;
			case F:
				{
				_localctx = new FalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(28);
				match(F);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(45);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(43);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new FormulaContext(_parentctx, _parentState));
						((AndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(31);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(32);
						((AndContext)_localctx).op = match(AND);
						setState(33);
						((AndContext)_localctx).right = formula(8);
						}
						break;
					case 2:
						{
						_localctx = new OrContext(new FormulaContext(_parentctx, _parentState));
						((OrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(34);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(35);
						((OrContext)_localctx).op = match(OR);
						setState(36);
						((OrContext)_localctx).right = formula(7);
						}
						break;
					case 3:
						{
						_localctx = new ImplContext(new FormulaContext(_parentctx, _parentState));
						((ImplContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(37);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(38);
						((ImplContext)_localctx).op = match(IMPL);
						setState(39);
						((ImplContext)_localctx).right = formula(6);
						}
						break;
					case 4:
						{
						_localctx = new EqContext(new FormulaContext(_parentctx, _parentState));
						((EqContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(40);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(41);
						((EqContext)_localctx).op = match(EQ);
						setState(42);
						((EqContext)_localctx).right = formula(5);
						}
						break;
					}
					} 
				}
				setState(47);
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
		enterRule(_localctx, 4, RULE_predicate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(PRED);
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(49);
				match(LPAREN);
				setState(50);
				term();
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEP) {
					{
					{
					setState(51);
					match(SEP);
					setState(52);
					term();
					}
					}
					setState(57);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(58);
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
		public TerminalNode SYMBOL() { return getToken(PredGrammarParser.SYMBOL, 0); }
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
		enterRule(_localctx, 6, RULE_term);
		try {
			setState(64);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				match(SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(63);
				funct();
				}
				break;
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
		public TerminalNode SYMBOL() { return getToken(PredGrammarParser.SYMBOL, 0); }
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
		enterRule(_localctx, 8, RULE_funct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(SYMBOL);
			setState(67);
			match(LPAREN);
			setState(68);
			term();
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEP) {
				{
				{
				setState(69);
				match(SEP);
				setState(70);
				term();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(76);
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
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21Q\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3 \n\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\7\3.\n\3\f\3\16\3\61\13\3\3\4\3\4\3\4\3\4\3\4\7\4"+
		"8\n\4\f\4\16\4;\13\4\3\4\3\4\5\4?\n\4\3\5\3\5\5\5C\n\5\3\6\3\6\3\6\3\6"+
		"\3\6\7\6J\n\6\f\6\16\6M\13\6\3\6\3\6\3\6\2\3\4\7\2\4\6\b\n\2\2\2Y\2\f"+
		"\3\2\2\2\4\37\3\2\2\2\6\62\3\2\2\2\bB\3\2\2\2\nD\3\2\2\2\f\r\5\4\3\2\r"+
		"\16\7\2\2\3\16\3\3\2\2\2\17\20\b\3\1\2\20 \5\6\4\2\21\22\7\r\2\2\22\23"+
		"\7\3\2\2\23 \5\4\3\f\24\25\7\16\2\2\25\26\7\3\2\2\26 \5\4\3\13\27\30\7"+
		"\b\2\2\30 \5\4\3\n\31\32\7\6\2\2\32\33\5\4\3\2\33\34\7\7\2\2\34 \3\2\2"+
		"\2\35 \7\17\2\2\36 \7\20\2\2\37\17\3\2\2\2\37\21\3\2\2\2\37\24\3\2\2\2"+
		"\37\27\3\2\2\2\37\31\3\2\2\2\37\35\3\2\2\2\37\36\3\2\2\2 /\3\2\2\2!\""+
		"\f\t\2\2\"#\7\t\2\2#.\5\4\3\n$%\f\b\2\2%&\7\n\2\2&.\5\4\3\t\'(\f\7\2\2"+
		"()\7\13\2\2).\5\4\3\b*+\f\6\2\2+,\7\f\2\2,.\5\4\3\7-!\3\2\2\2-$\3\2\2"+
		"\2-\'\3\2\2\2-*\3\2\2\2.\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60\5\3\2\2\2"+
		"\61/\3\2\2\2\62>\7\4\2\2\63\64\7\6\2\2\649\5\b\5\2\65\66\7\5\2\2\668\5"+
		"\b\5\2\67\65\3\2\2\28;\3\2\2\29\67\3\2\2\29:\3\2\2\2:<\3\2\2\2;9\3\2\2"+
		"\2<=\7\7\2\2=?\3\2\2\2>\63\3\2\2\2>?\3\2\2\2?\7\3\2\2\2@C\7\3\2\2AC\5"+
		"\n\6\2B@\3\2\2\2BA\3\2\2\2C\t\3\2\2\2DE\7\3\2\2EF\7\6\2\2FK\5\b\5\2GH"+
		"\7\5\2\2HJ\5\b\5\2IG\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2LN\3\2\2\2M"+
		"K\3\2\2\2NO\7\7\2\2O\13\3\2\2\2\t\37-/9>BK";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}