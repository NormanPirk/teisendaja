/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L16_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (ctx.left.constructor.name === "AndContext" && ctx.right.constructor.name === "AndContext") {
				const left = ctx.left;
				const right = ctx.right;
                if (right.left.constructor.name === "NegContext" && right.right.constructor.name === "NegContext") {
                    const leftLeft = left.left.getText();
                    const leftRight = left.right.getText();
                    const rightLeft = right.left.formula().getText();
                    const rightRight = right.right.formula().getText();
                    if (leftLeft === rightLeft && leftRight === rightRight) {
                        return leftLeft + "⇔" + leftRight;
                    }
					if (leftLeft === rightRight && leftRight === rightLeft) {
						return leftLeft + "⇔" + leftRight;
					}
                }
				if (left.left.constructor.name === "NegContext" && left.right.constructor.name === "NegContext") {
					const leftLeft = left.left.formula().getText();
					const leftRight = left.right.formula().getText();
					const rightLeft = right.left.getText();
					const rightRight = right.right.getText();
					if (leftLeft === rightLeft && leftRight === rightRight) {
                        return leftLeft + "⇔" + leftRight;
                    }
					if (leftLeft === rightRight && leftRight === rightLeft) {
						return leftLeft + "⇔" + leftRight;
					}
				}
            }
		}
        throw "Incompatible input!";
		
	}
}