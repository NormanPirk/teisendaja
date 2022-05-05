/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensOr } from '@/js/Parentheses';

export default class L26_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let value = ctx.formula().getText();
		value = addParensOr(ctx.formula().constructor.name, value);
        return value + "∨0";
	}
}