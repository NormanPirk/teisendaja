/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

export default class L1_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let value = ctx.formula().getText();
        value = addParensAnd(ctx.formula().constructor.name, value);
        return value + "∧" + value;
	}
}