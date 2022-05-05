/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L2_1Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            return this.visitOr(ctx.formula());
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    visitOr(ctx) {
        if (ctx.constructor.name === "OrContext") {
            const left = ctx.left.getText();
            const right = ctx.right.getText();
            if (left === right) {
                return left;
            } else {
                throw "Left and right subformula do not match!";
            }
        }
        throw "Incompatible input!";
    }

}