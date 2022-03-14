/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class PS1_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "ForallContext") {
                return this.visitForall(ctx.formula());
            } else if (ctx.formula().constructor.name === "ExistsContext") {
                return this.visitExists(ctx.formula());
            }
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitForall(ctx) {
		if (ctx.constructor.name === "ForallContext") {
            if (ctx.formula().constructor.name === "NegContext") {
                const ind = ctx.IND().getText();
                const value = ind + ctx.formula().formula().getText();
                return "¬∃" + value;
            }
		}
		throw "Incompatible input!";
		
	}

    visitExists(ctx) {
		if (ctx.constructor.name === "ExistsContext") {
            if (ctx.formula().constructor.name === "NegContext") {
                const ind = ctx.IND().getText();
                const value = ind + ctx.formula().formula().getText();
                return "¬∀" + value;
            }
		}
		throw "Incompatible input!";
		
	}
}