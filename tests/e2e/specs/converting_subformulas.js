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
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀a∃yQ(a,y,z)");
    createSelection("[data-cy=selectable]", 16, 26);
    cy.get("[data-cy=P12_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y¬P(x,y,z)∧∀a∃bQ(a,b,z)");

    //Move quantifiers in front of the formula
    createSelection("[data-cy=selectable]", 0, 26);
    cy.get("[data-cy=P6_2").click();
    cy.get("[data-cy=selectable]").contains("∃x(∀y¬P(x,y,z)∧∀a∃bQ(a,b,z))");

    createSelection("[data-cy=selectable]", 3, 27);
    cy.get("[data-cy=P5_2").click();
    cy.get("[data-cy=selectable]").contains("∃x(∀y(¬P(x,y,z)∧∀a∃bQ(a,b,z)))");

    createSelection("[data-cy=selectable]", 2, 30);
    cy.get("[data-cy=L18_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(¬P(x,y,z)∧∀a∃bQ(a,b,z))");

    createSelection("[data-cy=selectable]", 5, 27);
    cy.get("[data-cy=L3_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(∀a∃bQ(a,b,z)∧¬P(x,y,z))");

    createSelection("[data-cy=selectable]", 5, 27);
    cy.get("[data-cy=P5_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y(∀a(∃bQ(a,b,z)∧¬P(x,y,z)))");

    createSelection("[data-cy=selectable]", 4, 30);
    cy.get("[data-cy=L18_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀a(∃bQ(a,b,z)∧¬P(x,y,z))");

    createSelection("[data-cy=selectable]", 7, 27);
    cy.get("[data-cy=P6_2").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀a(∃b(Q(a,b,z)∧¬P(x,y,z)))");

    createSelection("[data-cy=selectable]", 6, 30);
    cy.get("[data-cy=L18_1").click();
    cy.get("[data-cy=selectable]").contains("∃x∀y∀a∃b(Q(a,b,z)∧¬P(x,y,z))");
  });

  // example from Palm, R., Prank R. 2004. Matemaatilise loogika alused, page 30
  it("Can convert ¬B⇔¬A∨¬B⇒C∧A to disjunctive normal form", () => {
    cy.get("[data-cy=insertFormula]").type("¬B⇔¬A∨¬B⇒C∧A");
    cy.get("[data-cy=start-conversions]").click();

    
    createSelection("[data-cy=selectable]", 0, 12);
    cy.get("[data-cy=L16_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬A∨¬B⇒C∧A)∨¬¬B∧¬(¬A∨¬B⇒C∧A)");

    createSelection("[data-cy=selectable]", 4, 13);
    cy.get("[data-cy=L13_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬(¬A∨¬B)∨C∧A)∨¬¬B∧¬(¬A∨¬B⇒C∧A)");

    createSelection("[data-cy=selectable]", 24, 33);
    cy.get("[data-cy=L13_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬(¬A∨¬B)∨C∧A)∨¬¬B∧¬(¬(¬A∨¬B)∨C∧A)");

    createSelection("[data-cy=selectable]", 4, 12);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬¬A∧¬¬B∨C∧A)∨¬¬B∧¬(¬(¬A∨¬B)∨C∧A)");

    createSelection("[data-cy=selectable]", 23, 31);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬¬A∧¬¬B∨C∧A)∨¬¬B∧¬(¬¬A∧¬¬B∨C∧A)");

    createSelection("[data-cy=selectable]", 21, 35);
    cy.get("[data-cy=L11_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬¬A∧¬¬B∨C∧A)∨¬¬B∧¬(¬¬A∧¬¬B)∧¬(C∧A)");

    createSelection("[data-cy=selectable]", 21, 31);
    cy.get("[data-cy=L10_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬¬A∧¬¬B∨C∧A)∨¬¬B∧(¬¬¬A∨¬¬¬B)∧¬(C∧A)");

    createSelection("[data-cy=selectable]", 33, 39);
    cy.get("[data-cy=L10_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(¬¬A∧¬¬B∨C∧A)∨¬¬B∧(¬¬¬A∨¬¬¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 4, 7);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(A∧¬¬B∨C∧A)∨¬¬B∧(¬¬¬A∨¬¬¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 6, 9);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(A∧B∨C∧A)∨¬¬B∧(¬¬¬A∨¬¬¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 13, 16);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(A∧B∨C∧A)∨B∧(¬¬¬A∨¬¬¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 16, 20);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(A∧B∨C∧A)∨B∧(¬A∨¬¬¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 19, 23);
    cy.get("[data-cy=L27_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧(A∧B∨C∧A)∨B∧(¬A∨¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 0, 12);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧A∧B∨¬B∧C∧A∨B∧(¬A∨¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 14, 23);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧A∧B∨¬B∧C∧A∨(B∧¬A∨B∧¬B)∧(¬C∨¬A)");

    createSelection("[data-cy=selectable]", 14, 33);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧A∧B∨¬B∧C∧A∨(B∧¬A∨B∧¬B)∧¬C∨(B∧¬A∨B∧¬B)∧¬A");

    createSelection("[data-cy=selectable]", 14, 28);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧A∧B∨¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨(B∧¬A∨B∧¬B)∧¬A");

    createSelection("[data-cy=selectable]", 30, 44);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧A∧B∨¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 0, 4);
    cy.get("[data-cy=L3_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧B∨¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 2, 6);
    cy.get("[data-cy=L22_1").click();
    cy.get("[data-cy=selectable]").contains("A∧0∨¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 0, 3);
    cy.get("[data-cy=L25_1").click();
    cy.get("[data-cy=selectable]").contains("0∨¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 0, 8);
    cy.get("[data-cy=L26_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬C∧B∧¬B∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 18, 22);
    cy.get("[data-cy=L22_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬C∧0∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 15, 19);
    cy.get("[data-cy=L25_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨0∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 7, 16);
    cy.get("[data-cy=L26_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧B∧¬A∨¬A∧B∧¬B");

    createSelection("[data-cy=selectable]", 26, 30);
    cy.get("[data-cy=L22_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧B∧¬A∨¬A∧0");

    createSelection("[data-cy=selectable]", 23, 27);
    cy.get("[data-cy=L25_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧B∧¬A∨0");

    createSelection("[data-cy=selectable]", 15, 24);
    cy.get("[data-cy=L26_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧B∧¬A");

    createSelection("[data-cy=selectable]", 18, 22);
    cy.get("[data-cy=L3_2").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧¬A∧B");

    createSelection("[data-cy=selectable]", 15, 20);
    cy.get("[data-cy=L1_1").click();
    cy.get("[data-cy=selectable]").contains("¬B∧C∧A∨¬C∧B∧¬A∨¬A∧B");

    createSelection("[data-cy=selectable]", 0, 6);
    cy.get("[data-cy=L3_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨¬C∧B∧¬A∨¬A∧B");

    createSelection("[data-cy=selectable]", 7, 11);
    cy.get("[data-cy=L3_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨B∧¬C∧¬A∨¬A∧B");

    createSelection("[data-cy=selectable]", 7, 14);
    cy.get("[data-cy=L3_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨¬A∧B∧¬C∨¬A∧B");

    createSelection("[data-cy=selectable]", 7, 19);
    cy.get("[data-cy=L6_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨¬A∧B");

    createSelection("[data-cy=selectable]", 7, 11);
    cy.get("[data-cy=L19_2").click();
    cy.get("[data-cy=selectable-new]").type("C{enter}");
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨¬A∧B∧(C∨¬C)");

    createSelection("[data-cy=selectable]", 7, 18);
    cy.get("[data-cy=L7_1").click();
    cy.get("[data-cy=selectable]").contains("A∧¬B∧C∨¬A∧B∧C∨¬A∧B∧¬C");
    
  });

});
