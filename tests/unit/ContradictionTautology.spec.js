import isTautology, { isContradiction } from "@/js/ContradictionAndTautology.js";
import getParseTree from "@/ANTLR/leftAssocGrammar/ParseTree.js";

describe("contradiction and tautology recognizer tests", () => {

    test("returns false with B∨C", () => {
        const input = getParseTree("B∨C").formula();

        expect(isTautology(input)).toBeFalsy();
    });

    test("returns false with B∧C", () => {
        const input = getParseTree("B∧C").formula();
        expect(isContradiction(input)).toBeFalsy();
    });

});