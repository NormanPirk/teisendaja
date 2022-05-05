/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';

export default class P10_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
        if (ctx.formula().constructor.name === "ParenContext") {
            const impl = ctx.formula().formula();
            if (impl.constructor.name === "ImplContext") {
                const freeVarsLeft = getFreeVars(impl.left);
                const freeVarsRight = getFreeVars(impl.right);
                const ind = ctx.SYMBOL().getText();
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