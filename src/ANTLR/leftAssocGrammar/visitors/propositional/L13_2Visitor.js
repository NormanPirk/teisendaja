/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L13_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
                const paren = ctx.children[1];
                if (paren.formula().constructor.name === "AndContext") {
                    const and = paren.children[1];
                    const rightChild = and.right;
                    if (rightChild.constructor.name === "NegContext") {
                        const left = and.left.getText();
                        const right = rightChild.formula().getText();
                        return left + "⇒" + right;
                    }
                }
            }
		}
        throw "Incompatible input"; 
	}
}