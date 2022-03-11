/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS7_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
        let value = ctx.formula().getText();
        const symbols = ["∧", "∨", "⇒", "⇔"];
        for (let i = 0; i < symbols.length; i++) {
            if (value.includes(symbols[i])) {
                value = "(" + value + ")";
                break;
            }
        }
        return value + "∧(" + value + "∨";
	}
}