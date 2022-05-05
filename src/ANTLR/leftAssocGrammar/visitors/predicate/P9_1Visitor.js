/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';

export default class P9_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
        if (ctx.formula().constructor.name === "ParenContext") {
            const impl = ctx.formula().formula();
            if (impl.constructor.name === "ImplContext") {
                const freeVarsLeft = getFreeVars(impl.left);
                const freeVarsRight = getFreeVars(impl.right);
                const ind = ctx.SYMBOL().getText();
                if (!freeVarsLeft.has(ind) && freeVarsRight.has(ind)) {
                    const left = impl.left.getText();
                    const right = impl.right.getText();
                    return left + "⇒∀" + ind +  right;
                }
            }
        }

        throw "Incompatible input!";
    }

}