/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L10_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (left.constructor.name === "NegContext" && right.constructor.name === "NegContext") {
                const leftValue = ctx.left.formula().getText();
                const rightValue = ctx.right.formula().getText();
                return "¬(" + leftValue + "∧" + rightValue + ")"
            }
		}
        throw "Incompatible input"; 
		
	}
}