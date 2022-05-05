import createSelection from "../custom/custom_functions.js";

describe("Correct error messages are displayed", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows error message when no formula is entered before clicking on the start conversions button", () => {
    cy.get("[data-cy=start-conversions]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains("Valem on sisestamata!");
  });

  it("Shows error message when incorrect formula is entered before clicking on the start conversions button", () => {
    cy.get("[data-cy=insertFormula]").type("A¬∧B");
    cy.get("[data-cy=start-conversions]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Valem ei ole süntaktiliselt korrektne!"
    );
  });

  it("Shows error message when there is a formula but no subformula is selected before clicking on conversion button", () => {
    cy.get("[data-cy=insertFormula]").type("∀x∃yP(x,y,z)");
    cy.get("[data-cy=start-conversions]").click();
    cy.get("[data-cy=L1_2]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains("Osavalem on valimata!");
  });

  it("Shows error message when incorrect part of the formula is selected", () => {
    cy.get("[data-cy=insertFormula]").type("∀xA(x)⇔B(y)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 7);
    cy.get("[data-cy=L2_2]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Valitud ei ole põhivalemi osavalemit!"
    );
  });

  it("Shows error message when incorrect conversion is chosen", () => {
    cy.get("[data-cy=insertFormula]").type("∀xA(x)⇔B(y)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 11);
    cy.get("[data-cy=L17_2]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Valitud teisendus L17 ei sobi sellele osavalemile!"
    );
  });

  it("Shows error when conversion is not allowed", () => {
    cy.get("[data-cy=insertFormula]").type("¬(A∧B)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 1, 6);
    cy.get("[data-cy=L18_1]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Valitud teisendus L18 ei ole lubatud!"
    );
  });

  it("Shows error selection is done from incorrect place", () => {
    cy.get("[data-cy=insertFormula]").type("¬(A∧B)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=line-0]", 1, 4);
    cy.get("[data-cy=L10_1]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Osavalem teisendamiseks tuleb valida töödeldava valemi alt!"
    );
  });

  it("Shows error when incorrect new formula is entered", () => {
    cy.get("[data-cy=insertFormula]").type("¬(A∧B)");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 2, 3);
    cy.get("[data-cy=L19_2]").click();
    cy.get("[data-cy=selectable-new]").type("Q(f(x)");
    cy.get("[data-cy=add-new-formula]").click();
    cy.get("[data-cy=error-message]").contains(
      "Valem ei ole süntaktiliselt korrektne!"
    );
  });

  it("Shows error when the subformula should be a truth value, but is not", () => {
    cy.get("[data-cy=insertFormula]").type("A∧B⇒C");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 4, 5);
    cy.get("[data-cy=L9_2]").click();
    cy.get("[data-cy=error-message]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=error-message]").contains(
      "Valitud teisendus L9 ei sobi sellele osavalemile!"
    );
  });

  it("Shows error if filename is invalid", () => {
    cy.get("[data-cy=insertFormula]").type("A∧B⇒C");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 5);
    cy.get("[data-cy=L13_1]").click();
    
    cy.get("body").type("{ctrl}J");
    cy.get("[data-cy=new-filename]").type(".");
    cy.get("[data-cy=confirm-download]").click();
    cy.get("[data-cy=error-message]").contains(
      "Sisestatud failinimi pole lubatud!"
    );
    cy.get("[data-cy=new-filename]").type("{backspace}:{enter}")
    cy.get("[data-cy=error-message]").contains(
      "Sisestatud failinimi pole lubatud!"
    );
    cy.get("[data-cy=cancel-download]").click();
  });

  it("Shows error if no new subformula is entered", () => {
    cy.get("[data-cy=insertFormula]").type("A∧B⇒C");
    cy.get("[data-cy=start-conversions]").click();
    createSelection("[data-cy=selectable]", 0, 1);
    cy.get("[data-cy=L5_2]").click();
    
    cy.get("[data-cy=selectable-new]").type("{enter}");
    cy.get("[data-cy=error-message]").contains(
      "Uus osavalem on sisestamata!"
    );
  });
});
