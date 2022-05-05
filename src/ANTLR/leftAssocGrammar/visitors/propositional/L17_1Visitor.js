/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensImpl } from '@/js/Parentheses';

export default class L17_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitEq(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitEq(ctx) {
		if (ctx.constructor.name === "EqContext") {
			let left = ctx.left.getText();
			let right = ctx.right.getText();
			left = addParensImpl(ctx.left.constructor.name, left);
			right = addParensImpl(ctx.right.constructor.name, right);
			return "(" + left + "⇒" + right + ")∧(" + right + "⇒" + left + ")";
		}
        throw "Incompatible input!";
		
	}
}