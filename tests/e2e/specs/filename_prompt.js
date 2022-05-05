import createSelection from "../custom/custom_functions.js";

describe("Inserting filenames", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("filename prompt is opened", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("body").type("{ctrl}{enter}");
    cy.get("body").type("{ctrl}X");
    cy.get("[data-cy=new-filename]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(true);
    });
  });

  it("inserting filename can be cancelled", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");

    cy.get("body").type("{ctrl}P");
    cy.get("[data-cy=new-filename]").type("testing_filename");
    cy.get("[data-cy=cancel-download").click();
    cy.get("[data-cy=new-filename]").then(($el) => {
      expect(Cypress.dom.isVisible($el)).to.equal(false);
    });
  });

});
