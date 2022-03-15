/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '../../../js/IndVariables';

export default class PS4_7Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "ExistsContext") {
                return this.visitExists(ctx.formula());
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    visitExists(ctx) {
        if (ctx.formula().constructor.name === "ParenContext") {
            const impl = ctx.formula().formula();
            if (impl.constructor.name === "ImplContext") {
                const freeVarsLeft = getFreeIndVars(impl.left);
                const freeVarsRight = getFreeIndVars(impl.right);
                const ind = ctx.IND().getText();
                if (freeVarsRight.has(ind) && !freeVarsLeft.has(ind)) {
                    const left = impl.left.getText();
                    const right = impl.right.getText();
                    return left + "⇒∃" + ind + right;
                }
            }
        }

        throw "Incompatible input!";
    }

}