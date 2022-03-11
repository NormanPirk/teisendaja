/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS9_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
                if (right.formula().constructor.name === "OrContext") {
                    let rightLeft = right.formula().left.getText();
                    if (["AndContext", "OrContext", "ImplContext", "EqContext"].includes(right.formula().left.constructor.name)) {
                        rightLeft = "(" + rightLeft + ")";
                    }
                    let rightRight = right.formula().right.getText();
                    if (["AndContext", "OrContext", "ImplContext", "EqContext"].includes(right.formula().right.constructor.name)) {
                        rightRight = "(" + rightRight + ")";
                    }
                    const left = ctx.left.getText();

                    return left + "∧" + rightLeft + "∨" + left + "∧" + rightRight;
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}