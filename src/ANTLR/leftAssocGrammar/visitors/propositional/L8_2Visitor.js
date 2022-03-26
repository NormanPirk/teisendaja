/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd, addParensOr } from '@/js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L8_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
        let left = ctx.formula().getText();
        let rightLeft = ctx.formula().getText();
        left = addParensOr(ctx.formula().constructor.name, left);
        rightLeft = addParensAnd(ctx.formula().constructor.name, rightLeft);
        return left + "∨" + rightLeft + "∧";
	}
}