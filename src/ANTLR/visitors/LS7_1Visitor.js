/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS7_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const right = ctx.right;
            if (right.constructor.name === "ParenContext") {
                if (right.children && right.children[1] && right.children[1].constructor.name === "OrContext") {
                    const rightLeft = right.children[1].left.getText();
                    const left = ctx.left.getText();

                    if (left === rightLeft) {
                        return left;
                    }
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}