/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L18_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		return "(" + ctx.formula().getText() + ")";
	}
}