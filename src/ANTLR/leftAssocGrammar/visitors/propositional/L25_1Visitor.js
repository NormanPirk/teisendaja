/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L25_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const right = ctx.right.getText();
			const left = ctx.left.getText();
            if (right === "0" || left === "0") {
                return "0";
            }
		}
        throw "Incompatible input!";
	}
}