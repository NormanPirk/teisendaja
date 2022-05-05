/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L9_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitTrue(ctx.formula());
		} catch (err) {
			try {
				return this.visitFalse(ctx.formula());
			} catch (err) {
				console.log(err);
				return null;
			}
		}
	}

	visitFalse(ctx) {
		if (ctx.constructor.name === "FalseContext") {
            return "¬1";
		}
        throw "Incompatible input!";
	}

	visitTrue(ctx) {
		if (ctx.constructor.name === "TrueContext") {
            return "¬0";
		}
        throw "Incompatible input!";
	}
}