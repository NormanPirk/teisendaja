/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS16_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (ctx.left.constructor.name === "NegContext") {
                const left = ctx.left.formula().getText();
                let right = ctx.right.getText();
				if (ctx.right.constructor.name === "OrContext") {
					right = "(" + right + ")";
				}
                return left + "∨" + right;
            }
		}
        throw "Incompatible input"; 
	}
}