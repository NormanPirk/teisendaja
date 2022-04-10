/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P3_1Visitor extends antlr4.tree.ParseTreeVisitor {

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
                const ind = ctx.IND().getText();
                const left = and.left.getText();
                const right = and.right.getText();
                if (left.includes(ind) && right.includes(ind)) {
                    return "∀" + ind + left + "∧∀" + ind + right;
                }
            }
        }
        throw "Incompatible input!";
    }
}