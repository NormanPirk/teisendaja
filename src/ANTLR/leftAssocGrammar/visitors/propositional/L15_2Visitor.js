/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

export default class L15_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
            if (ctx.left.constructor.name === "NegContext") {
                const left = ctx.left.formula().getText();
                let right = ctx.right.getText();
				right = addParensAnd(ctx.right.constructor.name, right);
                return left + "∨" + right;
            }
		}
        throw "Incompatible input"; 
	}
}