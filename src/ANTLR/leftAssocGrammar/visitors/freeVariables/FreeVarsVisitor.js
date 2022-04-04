/* eslint-disable */
// Generated from PredGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class FreeVarsVisitor extends antlr4.tree.ParseTreeVisitor {

        // Visit a parse tree produced by PredGrammarParser#start.
        visitStart(ctx) {
                const freeVars = this.visit(ctx.formula());
                return freeVars;
        }


        // Visit a parse tree produced by PredGrammarParser#neg.
        visitNeg(ctx) {
                const freeVars = this.visit(ctx.formula());
                return freeVars;
        }


        // Visit a parse tree produced by PredGrammarParser#impl.
        visitImpl(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }


        // Visit a parse tree produced by PredGrammarParser#paren.
        visitParen(ctx) {
                return this.visit(ctx.formula());
        }


        // Visit a parse tree produced by PredGrammarParser#or.
        visitOr(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }


        // Visit a parse tree produced by PredGrammarParser#pred.
        visitPred(ctx) {
                return this.visit(ctx.predicate());
        }


        // Visit a parse tree produced by PredGrammarParser#and.
        visitAnd(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }


        // Visit a parse tree produced by PredGrammarParser#forall.
        visitForall(ctx) {
                const ind = new Set(ctx.IND().getText());
                const indVars = this.visit(ctx.formula());
                return difference(indVars, ind);
        }


        // Visit a parse tree produced by PredGrammarParser#true.
        visitTrue(ctx) {
                return newSet();
        }


        // Visit a parse tree produced by PredGrammarParser#false.
        visitFalse(ctx) {
                return newSet();
        }


        // Visit a parse tree produced by PredGrammarParser#exists.
        visitExists(ctx) {
                const ind = new Set(ctx.IND().getText());
                const indVars = this.visit(ctx.formula());
                return difference(indVars, ind);
        }


        // Visit a parse tree produced by PredGrammarParser#eq.
        visitEq(ctx) {
                const freeVarsLeft = this.visit(ctx.left);
                const freeVarsRight = this.visit(ctx.right);
                return union(freeVarsLeft, freeVarsRight);
        }


        // Visit a parse tree produced by PredGrammarParser#predicate.
        visitPredicate(ctx) {
                let freeVars = new Set();
                for (let child of ctx.children) {
                        if (child.constructor.name === "TermContext") {
                                freeVars = union(freeVars, this.visitTerm(child));
                        }
                }
                return freeVars;
        }


        // Visit a parse tree produced by PredGrammarParser#term.
        visitTerm(ctx) {
                if (ctx.IND()) {
                        return new Set(ctx.IND().getText());
                }
                if (ctx.funct()) {
                        return this.visitFunct(ctx.funct());
                }
                return new Set();
        }


        // Visit a parse tree produced by PredGrammarParser#funct.
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