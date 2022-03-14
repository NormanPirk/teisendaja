/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd, addParensNeg } from '../../../js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS17_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitEq(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitEq(ctx) {
		if (ctx.constructor.name === "EqContext") {
			let leftLeft = ctx.left.getText();
			let leftRight = ctx.right.getText();
			let rightLeft = ctx.left.getText();
			let rightRight = ctx.right.getText();
			leftLeft = addParensAnd(ctx.left.constructor.name, leftLeft);
			leftRight = addParensAnd(ctx.right.constructor.name, leftRight);
			rightLeft = addParensNeg(ctx.left.constructor.name, rightLeft);
			rightRight = addParensNeg(ctx.right.constructor.name, rightRight);
			return leftLeft + "∧" + leftRight + "∨¬" + rightLeft + "∧¬" + rightRight;
		}
        throw "Incompatible input!";
	}
}