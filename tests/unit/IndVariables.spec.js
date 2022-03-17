import getNewVariable, { getFreeIndVars } from "../../src/js/IndVariables";
import getParseTree from "../../src/ANTLR/ParseTree.js";


describe("New variables tests", () => {

    test("Gets new variable for a formula with the quantifier ∀", () => {
        const input = "∀xF(x)";
        expect(getNewVariable(input)).toBe("y");
    });
    
});

describe("Free variables tests", () => {

    test("Recognises a single free variable in a formula with the quantifier ∀", () => {
        const input = getParseTree("∀xF(x,y)");
        expect(getFreeIndVars(input)).toEqual(new Set("y"));
    });
    
});