/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg, addParensOr } from '@/js/Parentheses';

export default class L13_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitImpl(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitImpl(ctx) {
		if (ctx.constructor.name === "ImplContext") {
            let left = ctx.left.getText();
            let right = ctx.right.getText();
			left = addParensNeg(ctx.left.constructor.name, left);
			right = addParensOr(ctx.right.constructor.name, right);
            return "¬" + left + "∨" + right;
		}
        throw "Incompatible input"; 
	}
}