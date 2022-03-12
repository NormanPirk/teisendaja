import getParseTree from "../ANTLR/ParseTree";

export default function addParensToNewFormula(conversionType, newFormula) {
    const mainOp = getParseTree(newFormula).formula().constructor.name;
    if (conversionType === 'LS7_2') {
        if (["OrContext", "ImplContext", "EqContext"].includes(mainOp)) {
            newFormula = "(" + newFormula + ")";
        }
        newFormula += ")";
    } else if (["LS8_2", "LS20_2", "LS21_2"].includes(conversionType)) {
        if (["AndContext","OrContext", "ImplContext", "EqContext"].includes(mainOp)) {
            newFormula = "(" + newFormula + ")";
        }
    }
    return newFormula;
}