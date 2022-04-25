/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg } from '@/js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L27_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
        let value = ctx.formula().getText();
        value = addParensNeg(ctx.formula().constructor.name, value);
        return "¬¬" + value;
	}
}