// this function is based on code from here https://github.com/cypress-io/cypress/issues/2839
export default function createSelection(datacy, start, end) {
    cy.get(datacy)
    .trigger('mousedown')
      .then(($el) => {
        const el = $el[0].firstChild;
        const document = el.ownerDocument;
        const range = document.createRange();
        range.setStart(el, start);
        range.setEnd(el, end);
        document.getSelection().removeAllRanges(range);
        document.getSelection().addRange(range);
      })
      .trigger('mouseup');
      cy.document().trigger('selectionchange');
}