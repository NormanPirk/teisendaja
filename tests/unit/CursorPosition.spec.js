import getNewPosition from "@/js/CursorPosition.js";

describe("finds correct cursor position", () => {
  
  test("finds correct cursor position for \\neg", () => {
    const input = "A\\neg";
    expect(getNewPosition(input, 4)).toEqual(1);
  });

  test("finds correct cursor position for \\land", () => {
    const input = "A\\land";
    expect(getNewPosition(input, 5)).toEqual(1);
  });

  test("finds correct cursor position for \\wedge", () => {
    const input = "A\\wedge";
    expect(getNewPosition(input, 6)).toEqual(1);
  });

  test("finds correct cursor position for \\lor", () => {
    const input = "A\\lor";
    expect(getNewPosition(input, 4)).toEqual(1);
  });

  test("finds correct cursor position for \\vee", () => {
    const input = "A\\vee";
    expect(getNewPosition(input, 4)).toEqual(1);
  });

  test("finds correct cursor position for \\Rightarrow", () => {
    const input = "A\\Rightarrow";
    expect(getNewPosition(input, 11)).toEqual(1);
  });

  test("finds correct cursor position for \\implies", () => {
    const input = "A\\implies";
    expect(getNewPosition(input, 8)).toEqual(1);
  });

  test("finds correct cursor position for \\Leftrightarrow", () => {
    const input = "A\\Leftrightarrow";
    expect(getNewPosition(input, 15)).toEqual(1);
  });

  test("finds correct cursor position for \\iff", () => {
    const input = "A\\iff";
    expect(getNewPosition(input, 4)).toEqual(1);
  });

  test("finds correct cursor position for \\forall", () => {
    const input = "A\\land\\forall";
    expect(getNewPosition(input, 7)).toEqual(1);
  });

  test("finds correct cursor position for \\exists", () => {
    const input = "A\\land\\exists";
    expect(getNewPosition(input, 7)).toEqual(1);
  });

  test("does not change cursor position if TeX is not in the end of the input", () => {
    const input = "A(x)⇒B∨C";
    expect(getNewPosition(input, 7)).toEqual(7);
  });

});