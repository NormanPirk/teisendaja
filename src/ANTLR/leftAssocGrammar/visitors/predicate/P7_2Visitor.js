/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';

export default class P7_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "ImplContext") {
                return this.visitImpl(ctx.formula());
            }
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    visitImpl(ctx) {
        if (ctx.left.constructor.name === "ExistsContext") {
            const freeVarsLeft = getFreeVars(ctx.left.formula());
            const freeVarsRight = getFreeVars(ctx.right);
            const ind = ctx.left.SYMBOL().getText();
            if (!freeVarsRight.has(ind) && freeVarsLeft.has(ind)) {
                const left = ctx.left.formula().getText();
                const right = ctx.right.getText();
                return "∀" + ind + "(" + left + "⇒" + right + ")"
            }
        }

        throw "Incompatible input!";
    }

}