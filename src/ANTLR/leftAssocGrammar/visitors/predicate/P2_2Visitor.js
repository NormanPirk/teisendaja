/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P2_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "ForallContext") {
                return this.visitForall(ctx.formula());
            }
		} catch (err) {
			console.log(err);
		}
        return null;
	}

    visitForall(ctx) {
        if (ctx.formula().constructor.name === "NegContext") {
            const ind = ctx.SYMBOL().getText();
            const value = ind + ctx.formula().formula().getText();
            return "¬∃" + value;
        }
		throw "Incompatible input!";		
	}
}