/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS15_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
			if (ctx.formula().constructor.name === "ParenContext") {
                const paren = ctx.formula();
                if (paren.formula().constructor.name === "ImplContext") {
                    const impl = paren.formula();
                    if (impl.right.constructor.name === "NegContext") {
                        let left = impl.left.getText();
                        const right = impl.right.formula().getText();
						if (["AndContext", "OrContext", "ImplContext"].includes(impl.left.constructor.name)) {
							left = "(" + left + ")";
						}
                        return left + "∧" + right;
                    }
                }
            }
		}
        throw "Incompatible input"; 
	}
}