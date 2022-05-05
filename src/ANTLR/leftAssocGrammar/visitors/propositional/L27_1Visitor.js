/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L27_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const neg = ctx.formula();
            if (neg.constructor.name === "NegContext") {
                const value = neg.formula().getText();
                return value;
            }
		}
        throw "Incompatible input!";
		
	}
}