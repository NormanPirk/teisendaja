/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P5_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "AndContext") {
                return this.visitAnd(ctx.formula());
            }
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    visitAnd(ctx) {
        if (ctx.left.constructor.name === "ForallContext") {
            const freeVarsLeft = getFreeIndVars(ctx.left.formula());
            const freeVarsRight = getFreeIndVars(ctx.right);
            const ind = ctx.left.IND().getText();
            if (freeVarsLeft.has(ind) && !freeVarsRight.has(ind)) {
                const left = ctx.left.formula().getText();
                const right = ctx.right.getText();
                return "∀" + ind + "(" + left + "∧" + right + ")";
            }
        }
        throw "Incompatible input!";
    }

}