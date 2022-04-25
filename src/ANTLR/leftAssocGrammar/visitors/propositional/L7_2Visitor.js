/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L7_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitOr(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitOr(ctx) {
		if (ctx.constructor.name === "OrContext") {
			const left = ctx.left;
            const right = ctx.right;
            if (left.constructor.name === "AndContext" && right.constructor.name === "AndContext") {
                const leftLeft = left.left.getText();
                const leftRight = left.right.getText();
                const rightLeft = right.left.getText();
                const rightRight = right.right.getText();
                
                if (leftLeft === rightLeft) {
                    return leftLeft + "∧(" + leftRight + "∨" + rightRight + ")"; 
                }
				if (leftLeft === rightRight) {
					return leftLeft + "∧(" + leftRight + "∨" + rightLeft + ")";
				}
				if (leftRight === rightLeft) {
					return leftRight + "∧(" + leftLeft + "∨" + rightRight + ")";
				}
				if (leftRight === rightRight) {
					return leftRight + "∧(" + leftLeft + "∨" + rightLeft + ")";
				}
            }
		}
        throw "Incompatible input"; 
		
	}
}