/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

export const colors = ["#e39e21", "#E32137", "#7AB0E0", "#84B900", "#CC35A9", "#FFBEF5", "#00924C", "#004C74"];
export let index = 0;

export function increaseIndex() {
    index = index>=colors.length? 0 : index + 1;
}

export function resetIndex() {
    index = 0;
}

export default class ColorParensVisitor extends antlr4.tree.ParseTreeVisitor {

  visitStart(ctx) {
      resetIndex();
      const result = this.visit(ctx.formula());
      return result;
  }

  visitNeg(ctx) {
      return "¬" + this.visit(ctx.formula());
  }

  visitImpl(ctx) {
      const left = this.visit(ctx.left);
      const right = this.visit(ctx.right);
      return left + "⇒" + right;
  }

  visitParen(ctx) {
      const content = this.visit(ctx.formula());
      const color = colors[index];
      increaseIndex();
      return "<span style='color:" + color + ";font-weight:bold;'>(</span>" + content + "<span style='color:" + color + ";font-weight:bold;'>)</span>";
  }

  visitOr(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "∨" + right;
  }

  visitPred(ctx) {
    return ctx.predicate().getText();
  }

  visitAnd(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "∧" + right;
  }

  visitForall(ctx) {
      const content = this.visit(ctx.formula());
      return "∀" + ctx.IND() + content;
  }

  visitTrue(ctx) {
      return "1";
  }

  visitFalse(ctx) {
      return "0";
  }

  visitExists(ctx) {
    const content = this.visit(ctx.formula());
    return "∃" + ctx.IND() + content;
  }

  visitEq(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return left + "⇔" + right;
  }

}
