/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { isContradiction } from '@/js/ContradictionAndTautology';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L22_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
		if (ctx.constructor.name === "AndContext") {
			if (isContradiction(ctx)) {
				return "0";
			}
        }
        throw "Incompatible input!";
    }
}