import convert from "../../src/js/Converter.js";

describe("LS26_1 tests", () => {

    test("Converts ¬1 to 0", () => {
        const input = "¬1";
        expect(convert(input, 'LS26_1')).toBe("0");
    });

    test("Returns null if input is A", () => {
        const input = "A";
        expect(convert(input, 'LS26_1')).toBe(null);
    });
 
});