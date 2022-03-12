/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS12_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
                if (paren.formula().constructor.name === "OrContext") {
                    const and = paren.formula();
                    let left = and.left.getText();
					if (["AndContext", "OrContext"].includes(and.left.constructor.name)) {
						left = "(" + left + ")";
					}
                    let right = and.right.getText();
					if (and.right.constructor.name === "AndContext") {
						right = "(" + right + ")";
					}
                    return "¬" + left + "∧¬" + right;
                }
            }
		}
        throw "Incompatible input"; 
	}
}