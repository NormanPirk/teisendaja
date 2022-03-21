import convert from "../../src/js/Converter.js";

describe("LS27_1 tests", () => {

    test("Converts ¬0 to 1", () => {
        const input = "¬0";
        expect(convert(input, 'LS27_1')).toBe("1");
    });

    test("Returns null if input is A", () => {
        const input = "A";
        expect(convert(input, 'LS27_1')).toBe(null);
    });
 
});