/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L9_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (ctx.formula().constructor.name === "TrueContext") {
                return "0";
            }
			if (ctx.formula().constructor.name === "FalseContext") {
				return "1";
			}
		}
        throw "Incompatible input!";
		
	}
}