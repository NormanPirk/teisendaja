describe("All necessary elements exist on the page", () => {
    
    beforeEach(() => {
        cy.visit("/");
    });
    
    it('Title exists', () => {
        cy.get('[data-cy=title]').should("exist");
    });

    it('Field for inserting formula exists', () => {
        cy.get('[data-cy=insertFormula]').should("exist");
    });

    it('Buttons for inserting math symbols exist', () => {
        cy.get('[data-cy=not]').should("exist");
        cy.get('[data-cy=and]').should("exist");
        cy.get('[data-cy=or]').should("exist");
        cy.get('[data-cy=impl]').should("exist");
        cy.get('[data-cy=equiv]').should("exist");
        cy.get('[data-cy=forall]').should("exist");
        cy.get('[data-cy=exists]').should("exist");
    });

    it('File input field for uploading an existing solution from JSON exists', () => {
        cy.get('[data-cy=uploadJSON]').should("exist");
    });

    it('Buttons for converting formulas according to the main equivalences of propositional logic exist', () => {
        cy.get('[data-cy=L1_1]').should("exist");
        cy.get('[data-cy=L1_2]').should("exist");
        cy.get('[data-cy=L2_1]').should("exist");
        cy.get('[data-cy=L2_2]').should("exist");
        cy.get('[data-cy=L3_1]').should("exist");
        cy.get('[data-cy=L3_2]').should("exist");
        cy.get('[data-cy=L4_1]').should("exist");
        cy.get('[data-cy=L4_2]').should("exist");
        cy.get('[data-cy=L5_1]').should("exist");
        cy.get('[data-cy=L5_2]').should("exist");
        cy.get('[data-cy=L6_1]').should("exist");
        cy.get('[data-cy=L6_2]').should("exist");
        cy.get('[data-cy=L7_1]').should("exist");
        cy.get('[data-cy=L7_2]').should("exist");
        cy.get('[data-cy=L8_1]').should("exist");
        cy.get('[data-cy=L8_2]').should("exist");
        cy.get('[data-cy=L9_1]').should("exist");
        cy.get('[data-cy=L9_2]').should("exist");
        cy.get('[data-cy=L11_1]').should("exist");
        cy.get('[data-cy=L11_2]').should("exist");
        cy.get('[data-cy=L12_1]').should("exist");
        cy.get('[data-cy=L12_2]').should("exist");
        cy.get('[data-cy=L13_1]').should("exist");
        cy.get('[data-cy=L13_2]').should("exist");
        cy.get('[data-cy=L14_1]').should("exist");
        cy.get('[data-cy=L14_2]').should("exist");
        cy.get('[data-cy=L15_1]').should("exist");
        cy.get('[data-cy=L15_2]').should("exist");
        cy.get('[data-cy=L16_1]').should("exist");
        cy.get('[data-cy=L16_2]').should("exist");
        cy.get('[data-cy=L17_1]').should("exist");
        cy.get('[data-cy=L17_2]').should("exist");
        cy.get('[data-cy=L18_1]').should("exist");
        cy.get('[data-cy=L18_2]').should("exist");
        cy.get('[data-cy=L19_1]').should("exist");
        cy.get('[data-cy=L19_2]').should("exist");
        cy.get('[data-cy=L20_1]').should("exist");
        cy.get('[data-cy=L20_2]').should("exist");
        cy.get('[data-cy=L21_1]').should("exist");
        cy.get('[data-cy=L21_2]').should("exist");
        cy.get('[data-cy=L22_1]').should("exist");
        cy.get('[data-cy=L22_2]').should("exist");
        cy.get('[data-cy=L23_1]').should("exist");
        cy.get('[data-cy=L23_2]').should("exist");
        cy.get('[data-cy=L24_1]').should("exist");
        cy.get('[data-cy=L24_2]').should("exist");
        cy.get('[data-cy=L25_1]').should("exist");
        cy.get('[data-cy=L25_2]').should("exist");
        cy.get('[data-cy=L26_1]').should("exist");
        cy.get('[data-cy=L26_2]').should("exist");
        cy.get('[data-cy=L27_1]').should("exist");
        cy.get('[data-cy=L27_2]').should("exist");
        cy.get('[data-cy=L28_1]').should("exist");
        cy.get('[data-cy=L28_2]').should("exist");
    });

    it('Buttons for converting formulas according to the main equivalences of predicate logic exist', () => {
        cy.get('[data-cy=P1_1]').should("exist");
        cy.get('[data-cy=P1_2]').should("exist");
        cy.get('[data-cy=P2_1]').should("exist");
        cy.get('[data-cy=P2_2]').should("exist");
        cy.get('[data-cy=P3_1]').should("exist");
        cy.get('[data-cy=P3_2]').should("exist");
        cy.get('[data-cy=P4_1]').should("exist");
        cy.get('[data-cy=P4_2]').should("exist");
        cy.get('[data-cy=P5_1]').should("exist");
        cy.get('[data-cy=P5_2]').should("exist");
        cy.get('[data-cy=P6_1]').should("exist");
        cy.get('[data-cy=P6_2]').should("exist");
        cy.get('[data-cy=P7_1]').should("exist");
        cy.get('[data-cy=P7_2]').should("exist");
        cy.get('[data-cy=P8_1]').should("exist");
        cy.get('[data-cy=P8_2]').should("exist");
        cy.get('[data-cy=P9_1]').should("exist");
        cy.get('[data-cy=P9_2]').should("exist");
        cy.get('[data-cy=P11_1]').should("exist");
        cy.get('[data-cy=P11_2]').should("exist");
        cy.get('[data-cy=P12_1]').should("exist");
        cy.get('[data-cy=P12_2]').should("exist");
        cy.get('[data-cy=P13_1]').should("exist");
        cy.get('[data-cy=P13_2]').should("exist");
        cy.get('[data-cy=P14_1]').should("exist");
        cy.get('[data-cy=P14_2]').should("exist");
        cy.get('[data-cy=P15_1]').should("exist");
        cy.get('[data-cy=P15_2]').should("exist");
        cy.get('[data-cy=P16_1]').should("exist");
        cy.get('[data-cy=P16_2]').should("exist");
    });

    it('Button for starting conversions exists', () => {
        cy.get('[data-cy=startConversions]').should("exist");
    });

    it('Button showing help exists', () => {
        cy.get('[data-cy=showHelpBtn]').should("exist");
    });

    it('Buttons for downloading JSON, TeX and PDF exist', () => {
        cy.get('[data-cy=downloadJSON]').should("exist");
        cy.get('[data-cy=downloadTEX]').should("exist");
        cy.get('[data-cy=downloadPDF]').should("exist");
    });

    it('buttons for deleting last and all conversion steps are not visible at first', () => {
        cy.get('[data-cy=deleteLast]').should("not.exist");
        cy.get('[data-cy=deleteAll]').should("not.exist");
    });

    it('buttons for deleting last and all conversion steps exist after inserting a formula', () => {
        cy.get('[data-cy=insertFormula]').type("A");
        cy.get('[data-cy=startConversions]').click();
        cy.get('[data-cy=deleteLast]').should("exist");
        cy.get('[data-cy=deleteAll]').should("exist");
    });

    it('help area contains information about inserting formulas, downloading results and allowed symbols', () => {
        cy.get('[data-cy=showHelpBtn]').click();
        
        cy.get('[data-cy=insertFormulaGuide]').click();
        cy.get('[data-cy=downloadResultGuide]').should("exist");
        cy.get('[data-cy=allowedSymbols]').should("exist");
    });

  });