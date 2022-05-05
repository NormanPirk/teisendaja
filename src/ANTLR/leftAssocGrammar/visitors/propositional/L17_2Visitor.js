/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L17_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitAnd(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitAnd(ctx) {
		if (ctx.constructor.name === "AndContext") {
            if (ctx.left.constructor.name === "ParenContext" && ctx.right.constructor.name === "ParenContext") {
                const left = ctx.left.formula();
                const right = ctx.right.formula();
                if (left.constructor.name === "ImplContext" && right.constructor.name === "ImplContext") {
                    const leftLeft = left.left.getText();
                    const leftRight = left.right.getText();
                    const rightLeft = right.left.getText();
                    const rightRight = right.right.getText();
                    if (leftLeft === rightRight && leftRight === rightLeft) {
                        return leftLeft + "⇔" + leftRight;
                    }
                }
            }
		}
		throw "Incompatible input!";
	}
}