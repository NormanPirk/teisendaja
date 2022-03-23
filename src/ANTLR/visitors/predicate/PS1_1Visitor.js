/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class PS1_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
            if (ctx.formula().constructor.name === "ForallContext") {
				const forall = ctx.formula();
				const ind = forall.IND().getText();
				const value = ind + "¬" + forall.formula().getText();
				return "∃" + value;
            }
		}
		throw "Incompatible input!";
		
	}
}