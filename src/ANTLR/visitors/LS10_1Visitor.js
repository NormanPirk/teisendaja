/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS10_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const right = ctx.right;
            if (right.constructor.name === "AndContext") {
                let left = ctx.left.getText();
                const rightLeft = right.left.getText();
                const rightRight = right.right.getText();
				if (left.constructor.name === "OrContext") {
					left = "(" + left + ")";
				}
                return "(" + left + "∨" + rightLeft + ")∧(" + left + "∨" + rightRight + ")";
            }
		}
        throw "Incompatible input"; 
		
	}
}