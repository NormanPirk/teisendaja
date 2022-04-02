/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L30_2Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
      try {
          return this.visitParen(ctx.formula());
      } catch (err) {
          console.log(err);
          return null;
      }
	}

    // Visit a parse tree produced by PredGrammarParser#paren.
	visitParen(ctx) {
        if (ctx.constructor.name === "ParenContext") {
            const value = ctx.formula().getText();
            return value;
        }
        throw "Incompatible input!";        
	}
}