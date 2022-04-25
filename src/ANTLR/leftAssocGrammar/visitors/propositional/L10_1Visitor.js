/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg } from '@/js/Parentheses';


export default class L10_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
			if (ctx.formula().constructor.name === "ParenContext") {
                const paren = ctx.formula();
                if (paren.formula().constructor.name === "AndContext") {
                    const and = paren.formula();
                    let left = and.left.getText();
					const right = and.right.getText();
					left = addParensNeg(and.left.constructor.name, left);
                    return "¬" + left + "∨¬" + right;
                }
            }
		}
        throw "Incompatible input"; 
	}
}