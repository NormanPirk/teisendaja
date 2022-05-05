/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P1_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitExists(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitExists(ctx) {
		if (ctx.constructor.name === "ExistsContext") {
			if (ctx.formula().constructor.name === "NegContext") {
				const ind = ctx.SYMBOL().getText();
                const formula = ctx.formula().formula().getText();
                return "¬∀" + ind + formula;
			}
		}
		throw "Incompatible input!";
	}
}