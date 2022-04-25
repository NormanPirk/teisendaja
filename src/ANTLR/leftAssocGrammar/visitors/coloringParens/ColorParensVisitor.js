/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

const colors = ["#e39e21", "#E32137", "#7AB0E0", "#84B900", "#CC35A9", "#FFBEF5", "#00924C", "#004C74"];
let index = 0;

function increaseIndex() {
    index = index>colors.length? 0 : index + 1;
}

function resetIndex() {
    index = 0;
}

export default class ColorParensVisitor extends antlr4.tree.ParseTreeVisitor {
  // Visit a parse tree produced by PredGrammarParser#start.

  visitStart(ctx) {
      resetIndex();
      const result = this.visit(ctx.formula());
      return result;
  }

  // Visit a parse tree produced by PredGrammarParser#neg.
  visitNeg(ctx) {
      return "¬" + this.visit(ctx.formula());
  }

  // Visit a parse tree produced by PredGrammarParser#impl.
  visitImpl(ctx) {
      const left = this.visit(ctx.left);
      const right = this.visit(ctx.right);
      return left + "⇒" + right;
  }

  // Visit a parse tree produced by PredGrammarParser#paren.
  visitParen(ctx) {
      const content = this.visit(ctx.formula());
      const color = colors[index];
      increaseIndex();
      return "<span style='color:" + color + ";font-weight:bold;'>(</span>" + content + "<span style='color:" + color + ";font-weight:bold;'>)</span>";
  }

  // Visit a parse tree produced by PredGrammarParser#or.
  visitOr(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "∨" + right;
  }

  // Visit a parse tree produced by PredGrammarParser#pred.
  visitPred(ctx) {
    return ctx.predicate().getText();
  }

  // Visit a parse tree produced by PredGrammarParser#and.
  visitAnd(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "∧" + right;
  }

  // Visit a parse tree produced by PredGrammarParser#forall.
  visitForall(ctx) {
      const content = this.visit(ctx.formula());
      return "∀" + ctx.IND() + content;
  }

  // Visit a parse tree produced by PredGrammarParser#true.
  visitTrue(ctx) {
      return "1";
  }

  // Visit a parse tree produced by PredGrammarParser#false.
  visitFalse(ctx) {
      return "0";
  }

  // Visit a parse tree produced by PredGrammarParser#exists.
  visitExists(ctx) {
    const content = this.visit(ctx.formula());
    return "∃" + ctx.IND() + content;
  }

  // Visit a parse tree produced by PredGrammarParser#eq.
  visitEq(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "⇔" + right;
  }

  // Visit a parse tree produced by PredGrammarParser#predicate.

}
