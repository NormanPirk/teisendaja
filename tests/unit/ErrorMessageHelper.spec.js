import getErrorMessage from "@/js/ErrorMessageHelper.js";

/* 
{ message: "Syntactical error!", index: column }
{ message: "Functional symbol in several roles", symbol: symbol }
{ message: "Predicate argument count mismatch!", symbol: predicate, index: ctx.start.tokenIndex }
{ message: "Function argument count mismatch!", symbol: funct, index: ctx.start.tokenIndex }

*/

describe("Tests getting correct error messages", () => {
  test("returns correct error message for predicate argument count mismatch", () => {
    const error = {
      message: "Predicate argument count mismatch!",
      symbol: "A",
      index: 0,
    };
    expect(getErrorMessage(error, "A∨A(x)")).toStrictEqual(
      "Viga predikaadi A argumentide arvus!"
    );
  });

  test("returns correct error message for function argument count mismatch", () => {
    const error = {
      message: "Function argument count mismatch!",
      symbol: "f",
      index: 2,
    };
    expect(getErrorMessage(error, "A(f(x),f(z,y))")).toStrictEqual(
      "Viga funktsiooni f argumentide arvus!"
    );
  });

  test("returns correct error message for function in several roles", () => {
    const error = {
      message: "Functional symbol in several roles",
      symbol: "g",
    };
    expect(getErrorMessage(error, "A(g(x),g)")).toStrictEqual(
      "Funktsionaalsümbol g on kasutusel ka konstandi või indiviidina!"
    );
  });

  test("returns correct error message for syntactical error", () => {
    const error = { message: "Syntactical error!", index: 2 };
    expect(getErrorMessage(error, "A∧")).toStrictEqual(
      "Valem ei ole süntaktiliselt korrektne! Viga on valemi lõpus."
    );
  });

  test("returns correct error message for syntactical error", () => {
    const error = { message: "Syntactical error!", index: 1 };
    expect(getErrorMessage(error, "A¬∧B")).toStrictEqual(
      "Valem ei ole süntaktiliselt korrektne! Viga kohal: 2; sümbol: ¬."
    );
  });

  test("returns correct error message not entered new formula", () => {
    const error = { message: "New subformula is not entered!" };
    expect(getErrorMessage(error, "")).toStrictEqual(
      "Uus osavalem on sisestamata!"
    );
  });
});
