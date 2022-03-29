/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L30_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (ctx.right.constructor.name === "AndContext") {
                const and = ctx.right;
                const left = and.left;
                const right = and.right;
                if (right.constructor.name === "NegContext") {
                    if (left.getText() === right.formula().getText()) {
                        return ctx.left.getText();
                    } else if (left.constructor.name === "AndContext" && right.formula().constructor.name === "ParenContext") {
                        if (left.getText() === right.formula().formula().getText()) {
                            return ctx.left.getText();
                        }
                    }
                }
            }
		}
        throw "Incompatible input!";
	}
}