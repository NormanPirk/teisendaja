/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P7_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
                const freeVarsLeft = getFreeIndVars(impl.left);
                const freeVarsRight = getFreeIndVars(impl.right);
                const ind = ctx.IND().getText();
                if (!freeVarsRight.has(ind) && freeVarsLeft.has(ind)) {
                    const left = impl.left.getText();
                    const right = impl.right.getText();
                    return "∃" + ind + left + "⇒" + right;
                }
            }
        }

        throw "Incompatible input!";
    }

}