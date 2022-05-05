/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg } from '@/js/Parentheses';

export default class L27_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
        let value = ctx.formula().getText();
        value = addParensNeg(ctx.formula().constructor.name, value);
        return "¬¬" + value;
	}
}