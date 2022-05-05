/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P1_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
            if (ctx.formula().constructor.name === "ForallContext") {
				const forall = ctx.formula();
				const ind = forall.SYMBOL().getText();
				const value = ind + "¬" + forall.formula().getText();
				return "∃" + value;
            }
		}
		throw "Incompatible input!";
		
	}
}