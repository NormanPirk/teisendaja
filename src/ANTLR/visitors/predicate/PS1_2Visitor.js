/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class PS1_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitExists(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitExists(ctx) {
		if (ctx.constructor.name === "ExistsContext") {
			if (ctx.formula().constructor.name === "NegContext") {
				const ind = ctx.IND().getText();
                const formula = ctx.formula().formula().getText();
                return "¬∀" + ind + formula;
			}
		}
		throw "Incompatible input!";
	}
}