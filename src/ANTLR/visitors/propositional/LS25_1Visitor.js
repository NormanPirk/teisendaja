/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS25_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitEq(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitEq(ctx) {
		if (ctx.constructor.name === "EqContext") {
			const left = ctx.left;
            if (left.constructor.name === "ParenContext") {
                if (left.formula().constructor.name === "EqContext") {
                    const leftLeft = left.children[1].left.getText();
                    const leftRight = left.children[1].right.getText();
                    const right = ctx.right.getText();
                    return leftLeft + "⇔(" + leftRight + "⇔" + right + ")";
                }
            }
			
		}
        throw "Incompatible input"; 
		
	}
}