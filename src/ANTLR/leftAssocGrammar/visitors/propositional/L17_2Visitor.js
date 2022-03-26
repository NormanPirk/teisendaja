/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L17_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (ctx.left.constructor.name === "AndContext" && ctx.right.constructor.name === "AndContext") {
                if (ctx.right.left.constructor.name === "NegContext" && ctx.right.right.constructor.name === "NegContext") {
                    const leftLeft = ctx.left.left.getText();
                    const leftRight = ctx.left.right.getText();
                    const rightLeft = ctx.right.left.formula().getText();
                    const rightRight = ctx.right.right.formula().getText();
                    if (leftLeft === rightLeft && leftRight === rightRight) {
                        return leftLeft + "⇔" + leftRight;
                    }
                }
            }
		}
        throw "Incompatible input!";
		
	}
}