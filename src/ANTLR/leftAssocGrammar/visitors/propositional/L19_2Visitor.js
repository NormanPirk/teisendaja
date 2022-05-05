/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

export default class L19_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let left = ctx.formula().getText();
        left = addParensAnd(ctx.formula().constructor.name, left);
        return left + "∧(";
	}
}