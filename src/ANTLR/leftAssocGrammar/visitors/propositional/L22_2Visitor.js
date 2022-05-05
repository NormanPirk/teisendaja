/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L22_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitFalse(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitFalse(ctx) {
		if (ctx.constructor.name === "FalseContext") {
            return "";
        }
        throw "Incompatible input!";
    }
}