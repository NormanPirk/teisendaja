/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd, addParensNeg } from '../../../js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS13_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitImpl(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitImpl(ctx) {
		if (ctx.constructor.name === "ImplContext") {
            let left = ctx.left.getText();
            let right = ctx.right.getText();
			left = addParensAnd(ctx.left.constructor.name, left);
			right = addParensNeg(ctx.right.constructor.name, right);
            return "¬(" + left + "∧¬" + right + ")"
		}
        throw "Incompatible input"; 
	}
}