/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P5_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
            const and = ctx.formula().formula();
            if (and.constructor.name === "AndContext") {
                const freeVarsLeft = getFreeIndVars(and.left);
                const freeVarsRight = getFreeIndVars(and.right);
                const ind = ctx.IND().getText();
                if (freeVarsLeft.has(ind) && !freeVarsRight.has(ind)) {
                    const left = and.left.getText();
                    const right = and.right.getText();
                    return "∀" + ind + left + "∧" + right;
                }
            }
        }

        throw "Incompatible input!";
    }

}