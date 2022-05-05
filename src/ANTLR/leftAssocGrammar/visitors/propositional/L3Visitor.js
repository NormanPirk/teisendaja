/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import getOperation from '@/js/OperationGetter';

export default class L3Visitor extends antlr4.tree.ParseTreeVisitor {

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