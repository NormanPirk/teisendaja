/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L7_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitAnd(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitAnd(ctx) {
		if (ctx.constructor.name === "AndContext") {
			const right = ctx.right;
			const left = ctx.left;
            if (right.constructor.name === "ParenContext") {
                if (right.formula().constructor.name === "OrContext") {
                    const leftValue = left.getText();
                    let rightLeft = right.formula().left.getText();
                    let rightRight = right.formula().right.getText();
                    rightLeft = addParensAnd(right.formula().left.constructor.name, rightLeft);
                    rightRight = addParensAnd(right.formula().right.constructor.name, rightRight);
                    return leftValue + "∧" + rightLeft + "∨" + leftValue + "∧" + rightRight;
                }
            }
			if (left.constructor.name === "ParenContext") {
				if (left.formula().constructor.name === "OrContext") {
					const rightValue = right.getText();
					let leftLeft = left.formula().left.getText();
					let leftRight = left.formula().right.getText();
					leftLeft = addParensAnd(left.formula().left.constructor.name, leftLeft);
					leftRight = addParensAnd(left.formula().right.constructor.name, leftRight);
					return rightValue + "∧" + leftLeft + "∨" + rightValue + "∧" + leftRight;
				}
			}
		}
        throw "Incompatible input"; 
		
	}
}