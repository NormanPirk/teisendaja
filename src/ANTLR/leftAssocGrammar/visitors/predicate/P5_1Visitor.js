/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';
import { getOperationConjDisj } from '@/js/OperationGetter';

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
            const operation = ctx.formula().formula();
            try {
                const op = getOperationConjDisj(operation.constructor.name);
                const freeVarsLeft = getFreeIndVars(operation.left);
                const freeVarsRight = getFreeIndVars(operation.right);
                const ind = ctx.IND().getText();
                const left = operation.left.getText();
                const right = operation.right.getText();
                if (freeVarsLeft.has(ind) && !freeVarsRight.has(ind)) {
                    return "∀" + ind + left + op + right;
                }
                if (!freeVarsLeft.has(ind) && freeVarsRight.has(ind)) {
                    return left + op + "∀" + ind + right;
                }
            } catch (err) {
                throw err;
            }
        }
        throw "Incompatible input!";
    }

}