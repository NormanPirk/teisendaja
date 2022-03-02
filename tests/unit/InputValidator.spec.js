import validateInput from "../../src/ANTLR/InputValidator";

describe("Input validation tests", () => {

    test("recognises A", () => {
        const input = "A";
        expect(validateInput(input)).toBeTruthy();
    });

    test("does not recognise A x", () => {
        const input = "A x";
        expect(validateInput(input)).toBeFalsy();
    });
});