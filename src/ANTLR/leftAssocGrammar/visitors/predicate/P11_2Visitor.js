/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P11_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "ImplContext") {
                return this.visitImpl(ctx.formula());
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    visitImpl(ctx) {
        if (ctx.right.constructor.name === "ForallContext") {
            const freeVarsLeft = getFreeIndVars(ctx.left);
            const freeVarsRight = getFreeIndVars(ctx.right.formula());
            const ind = ctx.right.IND().getText();
            if (!freeVarsLeft.has(ind) && freeVarsRight.has(ind)) {
                const left = ctx.left.getText();
                const right = ctx.right.formula().getText();
                return "∀" + ind + "(" + left + "⇒" + right + ")"
            }
        }

        throw "Incompatible input!";
    }

}