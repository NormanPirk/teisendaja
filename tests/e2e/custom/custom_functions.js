// this function is based on code from here https://github.com/cypress-io/cypress/issues/2839
export default function createSelection(datacy, start, end) {
  cy.get(datacy)
    .trigger("mousedown")
    .then(($el) => {
      const el = $el[0].childNodes;
      const document = $el[0].firstChild.ownerDocument;
      const range = document.createRange();
      
      let i = 0;
      let j = 0;
      while (i < end) {
        const child = el[j];
        for (let l = 0; l < child.textContent.length; l++) {
          if (i === start) {
            range.setStart(child, l);
          }
          if (i === end -1) {
            range.setEnd(child, l + 1);
          }
          i++;
        }
        j += 1;
      }

      document.getSelection().removeAllRanges(range);
      document.getSelection().addRange(range);
    })
    .trigger("mouseup");
  cy.document().trigger("selectionchange");
}
