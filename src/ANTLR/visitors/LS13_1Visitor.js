/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS13_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitImpl(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitImpl(ctx) {
		if (ctx.constructor.name === "ImplContext") {
            let left = ctx.left.getText();
            let right = ctx.right.getText();
			if (["AndContext", "OrContext", "ImplContext"].includes(ctx.left.constructor.name)) {
				left = "(" + left + ")";
			}
			if (["AndContext", "OrContext"].includes(ctx.right.constructor.name)) {
				right = "(" + right + ")";
			}
            return "¬(" + left + "∧¬" + right + ")"
		}
        throw "Incompatible input"; 
	}
}