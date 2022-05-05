describe("Hiding and showing help", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("hides and shows help", () => {
    cy.get("[data-cy=showHelpBtn]").click();
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });

    cy.get("[data-cy=showHelpBtn]").click();
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(false);
    });

    cy.get("[data-cy=showHelpBtn]").click();
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });

    cy.get("[data-cy=help-hider]").click();
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(false);
    });
  });

  it("hides and shows help with shortcut key Ctrl+H", () => {
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(false);
    });
    cy.get("[data-cy=insertFormula]").type("{ctrl}H");
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
    cy.get("[data-cy=insertFormula]").type("{ctrl}H");
    cy.get("[data-cy=downloadResultGuide]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(false);
    });
  });
});
