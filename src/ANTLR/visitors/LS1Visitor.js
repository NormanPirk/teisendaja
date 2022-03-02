// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitAnd(ctx) {
		const left = ctx.left.getText();
		const right = ctx.right.getText();
		if (left === right) {
			return left;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#neg.
	visitNeg(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#impl.
	visitImpl(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#paren.
	visitParen(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#or.
	visitOr(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#pred.
	visitPred(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#forall.
	visitForall(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#exists.
	visitExists(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#eq.
	visitEq(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#predicate.
	visitPredicate(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#term.
	visitTerm(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}


	// Visit a parse tree produced by PredGrammarParser#funct.
	visitFunct(ctx) {
        const value = ctx.getText();
		return value? "(" + value + " \\land " + value + ")" : null;
	}

}