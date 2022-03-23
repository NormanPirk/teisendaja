/*eslint no-unused-vars: ["error", { "caughtErrors": "none" }]*/
import antlr4 from "antlr4";
import { InputMismatchException } from "../../../node_modules/antlr4/src/antlr4/error/Errors.js";

export default class ParserErrorStrategy extends antlr4.error
  .DefaultErrorStrategy {
  recover(recognizer, err) {
    throw err;
  }

  recoverInline(recognizer) {
    throw new Error(new InputMismatchException(recognizer));
  }

  sync() {}
}
