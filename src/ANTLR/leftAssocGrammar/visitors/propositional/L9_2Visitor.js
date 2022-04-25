/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L9_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			if (ctx.formula().constructor.name === "TrueContext") {
				return this.visitTrue(ctx.formula());
			}
			return this.visitFalse(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitFalse(ctx) {
		if (ctx.constructor.name === "FalseContext") {
            return "¬1";
		}
        throw "Incompatible input!";
	}

	visitTrue(ctx) {
		if (ctx.constructor.name === "TrueContext") {
            return "¬0";
		}
        throw "Incompatible input!";
	}
}