/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L13_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (ctx.left.constructor.name === "NegContext") {
                const left = ctx.left.formula().getText();
                const right = ctx.right.getText();
                return left + "⇒" + right;
            }
			if (ctx.right.constructor.name === "NegContext") {
				const left = ctx.left.getText();
				const right = ctx.right.formula().getText();
				return right + "⇒" + left;
			}
		}
        throw "Incompatible input"; 
	}
}