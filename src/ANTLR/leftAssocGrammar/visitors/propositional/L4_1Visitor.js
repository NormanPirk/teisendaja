/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getOperation from '@/js/OperationGetter';
import { isCommutativeOperation } from '@/js/OperationGetter';

export default class L4_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			const operation = ctx.formula().constructor.name;
			return this.visitOperation(ctx.formula(), operation);
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitOperation(ctx, opName) {
		if (isCommutativeOperation(opName)) {
			const left = ctx.left;
            if (left.constructor.name === "ParenContext") {
                if (left.formula().constructor.name === opName) {
                    const leftLeft = left.formula().left.getText();
                    const leftRight = left.formula().right.getText();
                    const right = ctx.right.getText();
					const op = getOperation(opName);
                    return leftLeft + op + "(" + leftRight + op + right + ")";
                }
            }
		}
        throw "Incompatible input"; 	
	}
}