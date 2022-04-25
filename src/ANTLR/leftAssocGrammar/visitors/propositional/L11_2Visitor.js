/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L11_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (left.constructor.name === "NegContext" && right.constructor.name === "NegContext") {
                const leftValue = ctx.left.formula().getText();
                const rightValue = ctx.right.formula().getText();
                return "¬(" + leftValue + "∨" + rightValue + ")"
            }
		}
        throw "Incompatible input"; 
	}
}