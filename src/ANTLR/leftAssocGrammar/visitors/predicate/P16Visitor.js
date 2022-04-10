/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P16Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "ExistsContext") {
                return this.visitExists(ctx.formula());
            }
		} catch (err) {
			console.log(err);
		}
        return null;
	}

    visitExists(ctx) {
        if (ctx.formula().constructor.name === "ExistsContext") {
            const indOuter = ctx.IND().getText();
            const indInner = ctx.formula().IND().getText();
            const value = ctx.formula().formula().getText();
            return "∃" + indInner + "∃" + indOuter + value;
        }
		throw "Incompatible input!";
		
	}
}