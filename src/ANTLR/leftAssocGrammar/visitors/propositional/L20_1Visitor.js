/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { isContradiction } from '@/js/ContradictionAndTautology';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L20_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const left = ctx.left;
			const right = ctx.right;
			if (right.constructor.name === "AndContext") {
				const and = right;
				if (isContradiction(and)) {
					return left.getText();
				}
			}
			if (left.constructor.name === "AndContext") {
				const and = left;
				if (isContradiction(and)) {
					return right.getText();
				}
			}
		}
        throw "Incompatible input!";
	}
}