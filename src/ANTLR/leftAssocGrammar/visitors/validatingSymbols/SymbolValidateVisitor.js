/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

const functions = new Map();
const otherSymbols = new Set();
const predicates = new Map();

function clearSymbols() {
    functions.clear();
    otherSymbols.clear();
    predicates.clear();
}

export default class SymbolValidateVisitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        this.visit(ctx.formula());
        const intersect = intersection(new Set(functions.keys()), otherSymbols);
        clearSymbols();
        if (intersect.size > 0) {
            const symbol = intersect.values().next().value;
            throw { message: "Functional symbol in several roles", symbol: symbol };
        }
    }

    visitNeg(ctx) {
        this.visit(ctx.formula());
    }

    visitImpl(ctx) {
        this.visit(ctx.left);
        this.visit(ctx.right);
    }

    visitParen(ctx) {
        this.visit(ctx.formula());
    }


    visitOr(ctx) {
        this.visit(ctx.left);
        this.visit(ctx.right);
    }

    visitPred(ctx) {
        this.visitPredicate(ctx.predicate());
    }


    visitAnd(ctx) {
        this.visit(ctx.left);
        this.visit(ctx.right);
    }


    visitForall(ctx) {
        otherSymbols.add(ctx.SYMBOL().getText());
        this.visit(ctx.formula());
    }

    visitTrue(ctx) {
        
    }

    visitFalse(ctx) {
        
    }

    visitExists(ctx) {
        otherSymbols.add(ctx.SYMBOL().getText());
        this.visit(ctx.formula());
    }

    visitEq(ctx) {
        this.visit(ctx.left);
        this.visit(ctx.right);
    }

    visitPredicate(ctx) {
        const predicate = ctx.PRED().getText();
        let argCount = 0;
        for (let child of ctx.children) {
            if (child.constructor.name === "TermContext") {
                this.visitTerm(child);
                argCount++;
            }
        }
        if (predicates.get(predicate) || predicates.get(predicate) === 0) {
            const existingCount = predicates.get(predicate);
            if (argCount !== existingCount) {
                clearSymbols();
                throw { message: "Predicate argument count mismatch!", symbol: predicate, index: ctx.start.tokenIndex }
            }
        } else {
            predicates.set(predicate, argCount);
        }
    }

    visitTerm(ctx) {
        if (ctx.funct()) {
            this.visit(ctx.funct())
        } else {
            otherSymbols.add(ctx.SYMBOL().getText());
        }
    }

    visitFunct(ctx) {
        const funct = ctx.SYMBOL().getText();
        let argCount = 0;
        for (let child of ctx.children) {
            if (child.constructor.name === "TermContext") {
                this.visitTerm(child);
                argCount++;
            }
        }
        if (functions.get(funct) || functions.get(funct) === 0) {
            const existingCount = functions.get(funct);
            if (argCount !== existingCount) {
                clearSymbols();
                throw { message: "Function argument count mismatch!", symbol: funct, index: ctx.start.tokenIndex }
            }
        } else {
            functions.set(funct, argCount);
        }
    }

}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)))
}