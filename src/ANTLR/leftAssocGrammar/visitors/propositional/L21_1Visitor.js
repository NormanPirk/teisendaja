/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import isTautology from '@/js/ContradictionAndTautology';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L21_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitOr(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitOr(ctx) {
		if (ctx.constructor.name === "OrContext") {
			if (isTautology(ctx)) {
				return "1";
			}
        }
        throw "Incompatible input!";
    }
}