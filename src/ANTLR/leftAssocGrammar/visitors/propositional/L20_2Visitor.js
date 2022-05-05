/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensOr } from '@/js/Parentheses';

export default class L20_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let left = ctx.formula().getText();
        left = addParensOr(ctx.formula().constructor.name, left);
        return left + "∨";
	}
}