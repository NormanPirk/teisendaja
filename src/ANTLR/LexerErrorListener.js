/*eslint no-unused-vars: ["error", { "caughtErrors": "none" }]*/
import antlr4 from "antlr4";

export default class LexerErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw err;
    }

}