/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L24_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const right = ctx.right.getText();
			const left = ctx.left.getText();
            if (right === "1" || left === "1") {
                return "1";
            }
		}
        throw "Incompatible input!";	
	}
}