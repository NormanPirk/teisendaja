import createSelection from "../custom/custom_functions.js";

describe("Selecting subformulas and converting formula to prenex normal form works", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can convert ¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z)) to prenex normal form", () => {
    cy.get("[data-cy=insertFormula]").type("¬(∀x∃yP(x,y,z)∨∃x∀y¬Q(x,y,z))");
    cy.get("[data-cy=start-conversions]").click();

    //Negations in front of predicates
    createSelection("[data-cy=selectable]", 0, 29);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬∀x∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 0, 13);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x¬∃yP(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 2, 13);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧¬∃x∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 14, 28);
    cy.get("[data-cy=P2_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀x¬∀y¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 16, 28);
    cy.get("[data-cy=P1_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀x∃y¬¬Q(x,y,z)");
    createSelection("[data-cy=selectable]", 18, 28);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀x∃yQ(x,y,z)");

    //Rename individual variables
    createSelection("[data-cy=selectable]", 14, 26);
    cy.get("[data-cy=P11_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀u∃yQ(u,y,z)");
    createSelection("[data-cy=selectable]", 16, 26);
    cy.get("[data-cy=P12_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀u∃vQ(u,v,z)");

    //Move quantifiers in front of the formula
    createSelection("[data-cy=selectable]", 0, 26);
    cy.get("[data-cy=P6_2").click();
    cy.get("[data-cy=selectable]").contains("∃x(∀y¬P(x,y,z)∧∀u∃vQ(u,v,z))");

    createSelection("[data-cy=selectable]", 3, 27);
    cy.get("[data-cy=P5_2").click();
    cy.get("[data-cy=selectable]").contains("∃x(∀y(¬P(x,y,z)∧∀u∃vQ(u,v,z)))");

    createSelection("[data-cy=selectable]", 2, 30);
    cy.get("[data-cy=L18_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(¬P(x,y,z)∧∀u∃vQ(u,v,z))");

    createSelection("[data-cy=selectable]", 5, 27);
    cy.get("[data-cy=L3_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(∀u∃vQ(u,v,z)∧¬P(x,y,z))");

    createSelection("[data-cy=selectable]", 5, 27);
    cy.get("[data-cy=P5_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(∀u(∃vQ(u,v,z)∧¬P(x,y,z)))");

    createSelection("[data-cy=selectable]", 4, 30);
    cy.get("[data-cy=L18_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀u(∃vQ(u,v,z)∧¬P(x,y,z))");

    createSelection("[data-cy=selectable]", 7, 27);
    cy.get("[data-cy=P6_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀u(∃v(Q(u,v,z)∧¬P(x,y,z)))");

    createSelection("[data-cy=selectable]", 6, 30);
    cy.get("[data-cy=L18_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀u∃v(Q(u,v,z)∧¬P(x,y,z))");
  });
});
