/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L6_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (right.constructor.name === "ParenContext") {
                if (right.formula().constructor.name === "OrContext") {
                    const rightLeft = right.formula().left.getText();
                    const rightRight = right.formula().right.getText();
                    const left = ctx.left.getText();
                    return "(" + left + "∨" + rightLeft + ")∨" + rightRight;
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}