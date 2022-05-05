/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';
import { getOperationConjDisj } from '@/js/OperationGetter';

export default class P6_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
            const operation = ctx.formula().formula();
            try {
                const op = getOperationConjDisj(operation.constructor.name);
                const freeVarsLeft = getFreeVars(operation.left);
                const freeVarsRight = getFreeVars(operation.right);
                const ind = ctx.SYMBOL().getText();
                const left = operation.left.getText();
                const right = operation.right.getText();
                if (freeVarsLeft.has(ind) && !freeVarsRight.has(ind)) {
                    return "∃" + ind + left + op + right;
                }
                if (!freeVarsLeft.has(ind) && freeVarsRight.has(ind)) {
                    return left + op + "∃" + ind + right;
                }
            } catch (err) {
                throw err;
            }
        }
        throw "Incompatible input!";
    }

}