/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import isTautology from '@/js/ContradictionAndTautology';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L19_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
            const left = ctx.left;
            const right = ctx.right;
            if (right.constructor.name === "ParenContext") {
                if (right.formula().constructor.name === "OrContext") {
                    const or = right.formula();
                    if (isTautology(or)) {
                        return left.getText();
                    }
                }
            }
            if (left.constructor.name === "ParenContext") {
                if (left.formula().constructor.name === "OrContext") {
                    const or = left.formula();
                    if (isTautology(or)) {
                        return right.getText();
                    }
                }
            }
		}
        throw "Incompatible input!";
	}
}