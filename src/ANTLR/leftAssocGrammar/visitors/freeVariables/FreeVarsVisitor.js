/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

export default class FreeVarsVisitor extends antlr4.tree.ParseTreeVisitor {

        visitStart(ctx) {
                const freeVars = this.visit(ctx.formula());
                return freeVars;
        }

        visitNeg(ctx) {
                const freeVars = this.visit(ctx.formula());
                return freeVars;
        }

        visitImpl(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }

        visitParen(ctx) {
                return this.visit(ctx.formula());
        }

        visitOr(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }

        visitPred(ctx) {
                return this.visit(ctx.predicate());
        }

        visitAnd(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }

        visitForall(ctx) {
                const ind = new Set(ctx.SYMBOL().getText());
                const indVars = this.visit(ctx.formula());
                return difference(indVars, ind);
        }

        visitTrue(ctx) {
                return new Set();
        }

        visitFalse(ctx) {
                return new Set();
        }

        visitExists(ctx) {
                const ind = new Set(ctx.SYMBOL().getText());
                const indVars = this.visit(ctx.formula());
                return difference(indVars, ind);
        }

        visitEq(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }

        visitPredicate(ctx) {
                let freeVars = new Set();
                for (let child of ctx.children) {
                        if (child.constructor.name === "TermContext") {
                                freeVars = union(freeVars, this.visitTerm(child));
                        }
                }
                return freeVars;
        }

        visitTerm(ctx) {
                if (ctx.funct()) {
                        return this.visitFunct(ctx.funct());
                }
                return new Set(ctx.SYMBOL().getText());
        }

        visitFunct(ctx) {
                let freeVars = new Set();
                for (let child of ctx.children) {
                        if (child.constructor.name === "TermContext") {
                                freeVars = union(freeVars, this.visitTerm(child));
                        }
                }
                return freeVars;
        }

}


// The following two functions are from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function union(setA, setB) {
        let union = new Set(setA)
        for (let el of setB) {
                union.add(el)
        }
        return union
}

function difference(setA, setB) {
        let difference = new Set(setA)
        for (let el of setB) {
                difference.delete(el)
        }
        return difference
}