/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';
import { getOperationConjDisj } from '@/js/OperationGetter';

export default class P5_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            const op = getOperationConjDisj(ctx.formula().constructor.name);
            return this.visitOperation(ctx.formula(), op);
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    visitOperation(ctx, op) {
        if (ctx.left.constructor.name === "ForallContext") {
            const freeVarsLeft = getFreeVars(ctx.left.formula());
            const freeVarsRight = getFreeVars(ctx.right);
            const ind = ctx.left.SYMBOL().getText();
            if (freeVarsLeft.has(ind) && !freeVarsRight.has(ind)) {
                const left = ctx.left.formula().getText();
                const right = ctx.right.getText();
                return "∀" + ind + "(" + left + op + right + ")";
            }
        }
        if (ctx.right.constructor.name === "ForallContext") {
            const freeVarsLeft = getFreeVars(ctx.left);
            const freeVarsRight = getFreeVars(ctx.right.formula());
            const ind = ctx.right.SYMBOL().getText();
            if (!freeVarsLeft.has(ind) && freeVarsRight.has(ind)) {
                const left = ctx.left.getText();
                const right = ctx.right.formula().getText();
                return "∀" + ind + "(" + left + op + right + ")";
            }
        }
        throw "Incompatible input!";
    }

}