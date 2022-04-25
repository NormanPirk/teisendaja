/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg } from '@/js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L11_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
			if (ctx.formula().constructor.name === "ParenContext") {
                const paren = ctx.formula();
                if (paren.formula().constructor.name === "OrContext") {
                    const or = paren.formula();
                    let left = or.left.getText();
					let right = or.right.getText();
					left = addParensNeg(or.left.constructor.name, left);
					right = addParensNeg(or.right.constructor.name, right);
                    return "¬" + left + "∧¬" + right;
                }
            }
		}
        throw "Incompatible input"; 
	}
}