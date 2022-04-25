/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P13Visitor extends antlr4.tree.ParseTreeVisitor {

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
        if (ctx.formula().constructor.name === "ForallContext") {
            const indOuter = ctx.IND().getText();
            const indInner = ctx.formula().IND().getText();
            const value = ctx.formula().formula().getText();
            return "∀" + indInner + "∀" + indOuter + value;
        }
		throw "Incompatible input!";		
	}

}