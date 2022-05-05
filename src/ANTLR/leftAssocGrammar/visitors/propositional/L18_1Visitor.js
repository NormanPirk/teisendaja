/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class L18_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
      try {
          return this.visitParen(ctx.formula());
      } catch (err) {
          console.log(err);
          return null;
      }
	}

	visitParen(ctx) {
        if (ctx.constructor.name === "ParenContext") {
            const value = ctx.formula().getText();
            return value;
        }
        throw "Incompatible input!";        
	}
}