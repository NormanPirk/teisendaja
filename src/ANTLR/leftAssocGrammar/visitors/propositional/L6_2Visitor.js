/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd, addParensOr } from '@/js/Parentheses';

export default class L6_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let left = ctx.formula().getText();
        let rightLeft = ctx.formula().getText();
        left = addParensOr(ctx.formula().constructor.name, left);
        rightLeft = addParensAnd(ctx.formula().constructor.name, rightLeft);
        return left + "∨" + rightLeft + "∧";
	}
}