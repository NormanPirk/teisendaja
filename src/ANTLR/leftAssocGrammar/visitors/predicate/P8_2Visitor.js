/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P8_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "OrContext") {
                return this.visitOr(ctx.formula());
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    visitOr(ctx) {
        if (ctx.left.constructor.name === "ExistsContext") {
            const freeVarsRight = getFreeIndVars(ctx.right);
            const ind = ctx.left.IND().getText();
            if (!freeVarsRight.has(ind)) {
                const left = ctx.left.formula().getText();
                const right = ctx.right.getText();
                return "∃" + ind + "(" + left + "∨" + right + ")";
            }
        }
        throw "Incompatible input!";
    }

}