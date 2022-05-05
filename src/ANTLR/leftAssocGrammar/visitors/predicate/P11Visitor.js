/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getNewVariable from '@/js/IndVariables';

export default class P11Visitor extends antlr4.tree.ParseTreeVisitor {

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
        const ind = ctx.SYMBOL().getText();
        let formula = ctx.formula().getText();
        const newInd = getNewVariable();
        if (!newInd) {
            throw "Incompatible input!";
        }
        if (formula.includes(ind)) {
            formula = formula.replaceAll(ind, newInd);
        }
        return "∀" + newInd + formula;
				
	}

}