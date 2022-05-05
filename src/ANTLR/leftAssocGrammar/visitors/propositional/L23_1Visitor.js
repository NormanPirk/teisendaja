/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L23_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const left = ctx.left.getText();
			const right = ctx.right.getText();
            if (right === "1") {
                return left;
            }
			if (left === "1") {
				return right;
			}
		}
        throw "Incompatible input!";
		
	}
}