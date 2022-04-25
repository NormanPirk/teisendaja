/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getOperation from '@/js/OperationGetter';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L3Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			const operation = getOperation(ctx.formula().constructor.name);
			return this.visitOperation(ctx.formula(), operation);
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitOperation(ctx, op) {
		const left = ctx.left.getText();
		const right = ctx.right.getText();
		return right + op + left;
	}

}