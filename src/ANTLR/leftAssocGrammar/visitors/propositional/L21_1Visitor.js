/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import isTautology from '@/js/ContradictionAndTautology';

export default class L21_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
			if (isTautology(ctx)) {
				return "1";
			}
        }
        throw "Incompatible input!";
    }
}