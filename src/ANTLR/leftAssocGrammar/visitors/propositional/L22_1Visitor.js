/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { isContradiction } from '@/js/ContradictionAndTautology';

export default class L22_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitAnd(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitAnd(ctx) {
		if (ctx.constructor.name === "AndContext") {
			if (isContradiction(ctx)) {
				return "0";
			}
        }
        throw "Incompatible input!";
    }
}