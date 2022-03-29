/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L29_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (ctx.right.constructor.name === "ParenContext") {
                const or = ctx.right.formula();
                if (or.constructor.name === "OrContext") {
                    const left = or.left;
                    const right = or.right;
                    if (right.constructor.name === "NegContext") {
                        if (left.getText() === right.formula().getText()) {
                            return ctx.left.getText();
                        } else if (["AndContext", "OrContext"].includes(left.constructor.name) && right.formula().constructor.name === "ParenContext") {
                            if (left.getText() === right.formula().formula().getText()) {
                                return ctx.left.getText();
                            }
                        }
                    }
                }
            }
		}
        throw "Incompatible input!";
	}
}