/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '../../../js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS10_2Visitor extends antlr4.tree.ParseTreeVisitor {

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
			const left = ctx.left;
            const right = ctx.right;
            if (left.constructor.name === "ParenContext" && right.constructor.name === "ParenContext") {
                const leftChild = (left.children && left.children[1])? left.children[1] : null;
                const rightChild = (right.children && right.children[1])? right.children[1] : null;
                if (leftChild && rightChild && leftChild.constructor.name === "OrContext" && rightChild.constructor.name === "OrContext") {
                    const leftLeft = leftChild.left.getText();
                    let leftRight = leftChild.right.getText();
                    const rightLeft = rightChild.left.getText();
                    let rightRight = rightChild.right.getText();
                    if (leftLeft === rightLeft) {
                        leftRight = addParensAnd(leftChild.right.constructor.name, leftRight);
                        rightRight = addParensAnd(rightChild.right.constructor.name, rightRight);
                        return leftLeft + "∨" + leftRight + "∧" + rightRight;
                    }
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}