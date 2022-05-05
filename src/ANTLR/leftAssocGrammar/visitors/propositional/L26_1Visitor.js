/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L26_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const left = ctx.left.getText();
			const right = ctx.right.getText();
            if (right === "0") {
                return left;
            }
			if (left === "0") {
				return right;
			}
		}
        throw "Incompatible input!";
		
	}
}