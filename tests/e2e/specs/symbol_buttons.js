import createSelection from "../custom/custom_functions.js";

describe("Adding symbols by clicking on symbol buttons", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can insert all logic symbols by using buttons", () => {
    cy.get("[data-cy=not]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("A");
    cy.get("[data-cy=and]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("B");
    cy.get("[data-cy=or]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("C");
    cy.get("[data-cy=impl]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("D");
    cy.get("[data-cy=equiv]").eq(0).click();
    cy.get("[data-cy=forall]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("x");
    cy.get("[data-cy=exists]").eq(0).click();
    cy.get("[data-cy=insertFormula]").type("yF(x,y)");
    cy.get("[data-cy=insertFormula]").should("have.value", "¬A∧B∨C⇒D⇔∀x∃yF(x,y)");
  });

  it("Can insert all logic symbols to new subformula by using buttons", () => {
    cy.get("[data-cy=insertFormula]").type("H");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 1);
    cy.get("[data-cy=L5_2]").click();

    cy.get("[data-cy=not]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("A");
    cy.get("[data-cy=and]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("B");
    cy.get("[data-cy=or]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("C");
    cy.get("[data-cy=impl]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("D");
    cy.get("[data-cy=equiv]").eq(0).click();
    cy.get("[data-cy=forall]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("x");
    cy.get("[data-cy=exists]").eq(0).click();
    cy.get("[data-cy=selectable-new]").type("yF(x,y)");

    cy.get("[data-cy=add-new-formula]").click();

    cy.get("[data-cy=selectable]").contains("H∧(H∨(¬A∧B∨C⇒D⇔∀x∃yF(x,y)))");
  });

});
