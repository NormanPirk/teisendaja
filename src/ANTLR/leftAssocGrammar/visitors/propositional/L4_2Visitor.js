/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getOperation from '@/js/OperationGetter';
import { isCommutativeOperation } from '@/js/OperationGetter';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L4_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			const operation = ctx.formula().constructor.name;
			return this.visitOperation(ctx.formula(), operation);
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitOperation(ctx, opName) {
		if (isCommutativeOperation(opName)) {
			const right = ctx.right;
            if (right.constructor.name === "ParenContext") {
                if (right.formula().constructor.name === opName) {
                    const rightLeft = right.formula().left.getText();
                    const rightRight = right.formula().right.getText();
                    const left = ctx.left.getText();
					const op = getOperation(opName);
                    return "(" + left + op + rightLeft + ")" + op + rightRight;
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}