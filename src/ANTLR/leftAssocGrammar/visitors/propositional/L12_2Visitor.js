/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L12_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
                if (paren.formula().constructor.name === "AndContext") {
                    const and = paren.formula();
                    const rightChild = and.right;
					const leftChild = and.left;
                    if (rightChild.constructor.name === "NegContext") {
                        const left = leftChild.getText();
                        const right = rightChild.formula().getText();
                        return left + "⇒" + right;
                    }
					if (leftChild.constructor.name === "NegContext") {
						const left = leftChild.formula().getText();
						const right = rightChild.getText();
						return right + "⇒" + left;
					}
                }
            }
		}
        throw "Incompatible input"; 
	}
}