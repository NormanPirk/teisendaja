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
		OR=10, IMPL=11, EQ=12, FORALL=13, EXISTS=14, WS=15;
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
			null, null, null, null, null, "','", "'('", "')'", "'\\neg '", "'\\land '", 
			"'\\lor '", "'\\Rightarrow '", "'\\Leftrightarrow '", "'\\forall '", 
			"'\\exists '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IND", "PRED", "CONST", "FUNCT", "SEP", "LPAREN", "RPAREN", "NEG", 
			"AND", "OR", "IMPL", "EQ", "FORALL", "EXISTS", "WS"
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
		public TerminalNode IND() { return getToken(PredGrammarParser.IND, 0); }
		public FormulaContext formula() {
			return getRuleContext(FormulaContext.class,0);
		}
		public ForallContext(FormulaContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends FormulaContext {
		public TerminalNode EXISTS() { return getToken(PredGrammarParser.EXISTS, 0); }
		public TerminalNode IND() { return getToken(PredGrammarParser.IND, 0); }
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
			setState(27);
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
			case NEG:
				{
				_localctx = new NegContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(15);
				match(NEG);
				setState(16);
				formula(8);
				}
				break;
			case LPAREN:
				{
				_localctx = new ParenContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(17);
				match(LPAREN);
				setState(18);
				formula(0);
				setState(19);
				match(RPAREN);
				}
				break;
			case FORALL:
				{
				_localctx = new ForallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(21);
				match(FORALL);
				setState(22);
				match(IND);
				setState(23);
				formula(2);
				}
				break;
			case EXISTS:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(24);
				match(EXISTS);
				setState(25);
				match(IND);
				setState(26);
				formula(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(43);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(41);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new FormulaContext(_parentctx, _parentState));
						((AndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(29);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(30);
						((AndContext)_localctx).op = match(AND);
						setState(31);
						((AndContext)_localctx).right = formula(8);
						}
						break;
					case 2:
						{
						_localctx = new OrContext(new FormulaContext(_parentctx, _parentState));
						((OrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(32);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(33);
						((OrContext)_localctx).op = match(OR);
						setState(34);
						((OrContext)_localctx).right = formula(7);
						}
						break;
					case 3:
						{
						_localctx = new ImplContext(new FormulaContext(_parentctx, _parentState));
						((ImplContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(35);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(36);
						((ImplContext)_localctx).op = match(IMPL);
						setState(37);
						((ImplContext)_localctx).right = formula(6);
						}
						break;
					case 4:
						{
						_localctx = new EqContext(new FormulaContext(_parentctx, _parentState));
						((EqContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_formula);
						setState(38);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(39);
						((EqContext)_localctx).op = match(EQ);
						setState(40);
						((EqContext)_localctx).right = formula(5);
						}
						break;
					}
					} 
				}
				setState(45);
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
			setState(46);
			match(PRED);
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(47);
				match(LPAREN);
				setState(48);
				term();
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEP) {
					{
					{
					setState(49);
					match(SEP);
					setState(50);
					term();
					}
					}
					setState(55);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(56);
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
		enterRule(_localctx, 6, RULE_term);
		try {
			setState(63);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IND:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				match(IND);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				match(CONST);
				}
				break;
			case FUNCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(62);
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
		enterRule(_localctx, 8, RULE_funct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(FUNCT);
			setState(66);
			match(LPAREN);
			setState(67);
			term();
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEP) {
				{
				{
				setState(68);
				match(SEP);
				setState(69);
				term();
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(75);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21P\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\5\3\36\n\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\7\3,\n\3\f\3\16\3/\13\3\3\4\3\4\3\4\3\4\3\4\7\4\66\n\4"+
		"\f\4\16\49\13\4\3\4\3\4\5\4=\n\4\3\5\3\5\3\5\5\5B\n\5\3\6\3\6\3\6\3\6"+
		"\3\6\7\6I\n\6\f\6\16\6L\13\6\3\6\3\6\3\6\2\3\4\7\2\4\6\b\n\2\2\2W\2\f"+
		"\3\2\2\2\4\35\3\2\2\2\6\60\3\2\2\2\bA\3\2\2\2\nC\3\2\2\2\f\r\5\4\3\2\r"+
		"\16\7\2\2\3\16\3\3\2\2\2\17\20\b\3\1\2\20\36\5\6\4\2\21\22\7\n\2\2\22"+
		"\36\5\4\3\n\23\24\7\b\2\2\24\25\5\4\3\2\25\26\7\t\2\2\26\36\3\2\2\2\27"+
		"\30\7\17\2\2\30\31\7\3\2\2\31\36\5\4\3\4\32\33\7\20\2\2\33\34\7\3\2\2"+
		"\34\36\5\4\3\3\35\17\3\2\2\2\35\21\3\2\2\2\35\23\3\2\2\2\35\27\3\2\2\2"+
		"\35\32\3\2\2\2\36-\3\2\2\2\37 \f\t\2\2 !\7\13\2\2!,\5\4\3\n\"#\f\b\2\2"+
		"#$\7\f\2\2$,\5\4\3\t%&\f\7\2\2&\'\7\r\2\2\',\5\4\3\b()\f\6\2\2)*\7\16"+
		"\2\2*,\5\4\3\7+\37\3\2\2\2+\"\3\2\2\2+%\3\2\2\2+(\3\2\2\2,/\3\2\2\2-+"+
		"\3\2\2\2-.\3\2\2\2.\5\3\2\2\2/-\3\2\2\2\60<\7\4\2\2\61\62\7\b\2\2\62\67"+
		"\5\b\5\2\63\64\7\7\2\2\64\66\5\b\5\2\65\63\3\2\2\2\669\3\2\2\2\67\65\3"+
		"\2\2\2\678\3\2\2\28:\3\2\2\29\67\3\2\2\2:;\7\t\2\2;=\3\2\2\2<\61\3\2\2"+
		"\2<=\3\2\2\2=\7\3\2\2\2>B\7\3\2\2?B\7\5\2\2@B\5\n\6\2A>\3\2\2\2A?\3\2"+
		"\2\2A@\3\2\2\2B\t\3\2\2\2CD\7\6\2\2DE\7\b\2\2EJ\5\b\5\2FG\7\7\2\2GI\5"+
		"\b\5\2HF\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2KM\3\2\2\2LJ\3\2\2\2MN\7"+
		"\t\2\2N\13\3\2\2\2\t\35+-\67<AJ";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}