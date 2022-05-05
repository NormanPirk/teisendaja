/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L21_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitTrue(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitTrue(ctx) {
		if (ctx.constructor.name === "TrueContext") {
            return "";
        }
        throw "Incompatible input!";
    }
}