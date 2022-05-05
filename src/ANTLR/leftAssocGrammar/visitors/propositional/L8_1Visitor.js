/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L8_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const right = ctx.right;
			const left = ctx.left;
            if (right.constructor.name === "AndContext") {
                const leftValue = left.getText();
                const rightLeft = right.left.getText();
                const rightRight = right.right.getText();
                return "(" + leftValue + "∨" + rightLeft + ")∧(" + leftValue + "∨" + rightRight + ")";
            }
			if (left.constructor.name === "AndContext") {
				const rightValue = right.getText();
				const leftLeft = left.left.getText();
				const leftRight = left.right.getText();
				return "(" + rightValue + "∨" + leftLeft + ")∧(" + rightValue + "∨" + leftRight + ")";
			}
		}
        throw "Incompatible input"; 
		
	}
}