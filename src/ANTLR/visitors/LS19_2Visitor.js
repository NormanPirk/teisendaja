/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS19_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
        let value = ctx.formula().getText();
		if (["AndContext", "OrContext", "ImplContext", "EqContext"].includes(ctx.formula().context.name)) {
			value = "(" + value + ")";
		}
        return value + "∧1";
	}
}