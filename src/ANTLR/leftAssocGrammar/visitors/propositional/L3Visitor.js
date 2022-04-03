/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L3Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitAnd(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitAnd(ctx) {
		const op = ctx.AND()? ctx.AND().getText() : "";
		if (op === "∧") {
			const left = ctx.left.getText();
			const right = ctx.right.getText();
			return right + "∧" + left;
		}
		throw "Incompatible input!";
		
	}
}