/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P4_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
            const or = ctx.formula().formula();
            if (or.constructor.name === "OrContext") {
                const ind = ctx.SYMBOL().getText();
                const left = or.left.getText();
                const right = or.right.getText();
                if (left.includes(ind) && right.includes(ind)) {
                    return "∃" + ind + left + "∨∃" + ind + right;
                }
            }
        }
        throw "Incompatible input!";
    }
}