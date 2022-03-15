/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getNewVariable from '../../../js/IndVariables';

export default class PS5_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "ForallContext") {
                return this.visitForall(ctx.formula());
            }
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitForall(ctx) {
        const ind = ctx.IND().getText();
        const formula = ctx.formula().getText();
        if (formula.includes(ind)) {
            const newInd = getNewVariable(formula);
            if (newInd) {
                const newFormula = formula.replaceAll(ind, newInd);
                return "∀" + newInd + newFormula;
            }
        }
		throw "Incompatible input!";		
	}

}