import isValidFilename from "@/js/FilenameValidator.js";
import illegalChars from "@/assets/illegalCharacters.json";

describe("detects illegal characters in filename", () => {
  test("detects valid filename", () => {
    const input = "filename";
    expect(isValidFilename(input)).toBeTruthy();
  });

  test("detects invalid characters in a filename", () => {
    const chars = illegalChars.symbols;
    for (let s of chars) {
      const input = "file" + s + "name";
      expect(isValidFilename(input)).toBeFalsy();
    }
  });

  test("detects whitespaces in a filename", () => {
    const ws = illegalChars.ws;
    for (let s of ws) {
      const input = "file" + s + "name";
      expect(isValidFilename(input)).toBeFalsy();
    }
  });

  test("detects empty filename", () => {
    const input = "";
    expect(isValidFilename(input)).toBeFalsy();
  });
});
