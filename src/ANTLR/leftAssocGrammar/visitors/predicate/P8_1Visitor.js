/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeIndVars } from '@/js/IndVariables';

export default class P8_1Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "ExistsContext") {
                return this.visitExists(ctx.formula());
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    visitExists(ctx) {
        if (ctx.formula().constructor.name === "ParenContext") {
            const and = ctx.formula().formula();
            if (and.constructor.name === "OrContext") {
                const freeVarsRight = getFreeIndVars(and.right);
                const ind = ctx.IND().getText();
                if (!freeVarsRight.has(ind)) {
                    const left = and.left.getText();
                    const right = and.right.getText();
                    return "∃" + ind + left + "∨" + right;
                }
            }
        }

        throw "Incompatible input!";
    }

}