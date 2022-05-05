/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L6_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
                const rightLeft = right.left.getText();
                const rightRight = right.right.getText();
				const leftValue = left.getText();

                if (leftValue === rightLeft || leftValue === rightRight) {
                    return leftValue;
                }
            }
			if (left.constructor.name === "AndContext") {
				const leftLeft = left.left.getText();
				const leftRight = left.right.getText();
				const rightValue = right.getText();

				if (rightValue === leftLeft || rightValue === leftRight) {
					return rightValue;
				}
			}
		}
        throw "Incompatible input"; 
		
	}
}