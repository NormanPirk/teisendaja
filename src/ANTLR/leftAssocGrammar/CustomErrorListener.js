/* eslint-disable */
import antlr4 from "antlr4";

export default class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
      throw { message: "Syntactical error!", index: column }  
      }
}