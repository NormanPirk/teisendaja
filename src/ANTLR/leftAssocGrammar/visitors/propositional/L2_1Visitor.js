/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
//import PredGrammarParser from '../PredGrammarParser.js';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L2_1Visitor extends antlr4.tree.ParseTreeVisitor {

    // Visit a parse tree produced by PredGrammarParser#start.
    // Visit a parse tree produced by PredGrammarParser#start.
    visitStart(ctx) {
        try {
            return this.visitOr(ctx.formula());
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    // Visit a parse tree produced by PredGrammarParser#and.
    visitOr(ctx) {
        if (ctx.constructor.name === "OrContext") {
            const left = ctx.left.getText();
            const right = ctx.right.getText();
            if (left === right) {
                return left;
            } else {
                throw "Left and right subformula do not match!";
            }
        }
        throw "Incompatible input!";
    }

}