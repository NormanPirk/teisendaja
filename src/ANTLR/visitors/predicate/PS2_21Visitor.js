/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class PS2_21Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "AndContext") {
                return this.visitAnd(ctx.formula());
            }
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitAnd(ctx) {
        const left = ctx.left;
        const right = ctx.right;
        if (left.constructor.name === "ForallContext" && right.constructor.name === "ForallContext") {
            const indLeft = left.IND().getText();
            const indRight = right.IND().getText();
            const leftValue = left.formula().getText();
            const rightValue = right.formula().getText();
            if (indLeft === indRight && leftValue.includes(indLeft) && rightValue.includes(indLeft)) {
                return "∀" + indLeft + "(" + leftValue + "∧" + rightValue + ")";
            }
        }
		throw "Incompatible input!";		
	}

}