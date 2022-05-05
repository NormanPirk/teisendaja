/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

export default class L8_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitAnd(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitAnd(ctx) {
		if (ctx.constructor.name === "AndContext") {
			const left = ctx.left;
            const right = ctx.right;
            if (left.constructor.name === "ParenContext" && right.constructor.name === "ParenContext") {
                const leftChild = left.formula();
                const rightChild = right.formula();
                if (leftChild.constructor.name === "OrContext" && rightChild.constructor.name === "OrContext") {
                    let leftLeft = leftChild.left.getText();
                    let leftRight = leftChild.right.getText();
                    let rightLeft = rightChild.left.getText();
                    let rightRight = rightChild.right.getText();
                    if (leftLeft === rightLeft) {
                        leftRight = addParensAnd(leftChild.right.constructor.name, leftRight);
                        rightRight = addParensAnd(rightChild.right.constructor.name, rightRight);
                        return leftLeft + "∨" + leftRight + "∧" + rightRight;
                    }
                    if (leftLeft === rightRight) {
                        leftRight = addParensAnd(leftChild.right.constructor.name, leftRight);
                        rightLeft = addParensAnd(rightChild.left.constructor.name, rightLeft);
                        return leftLeft + "∨" + leftRight + "∧" + rightLeft;
                    }
                    if (leftRight === rightLeft) {
                        leftLeft = addParensAnd(leftChild.left.constructor.name, leftLeft);
                        rightRight = addParensAnd(rightChild.right.constructor.name, rightRight);
                        return leftRight + "∨" + leftLeft + "∧" + rightRight;
                    }
                    if (leftRight === rightRight) {
                        leftLeft = addParensAnd(leftChild.left.constructor.name, leftLeft);
                        rightLeft = addParensAnd(rightChild.left.constructor.name, rightLeft);
                        return leftRight + "∨" + leftLeft + "∧" + rightLeft;
                    }
                }
            }
		}
        throw "Incompatible input"; 
		
	}
}