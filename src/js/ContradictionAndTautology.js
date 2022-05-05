export default function isTautology(or) {
  let orLeft = "";
  let orRight = "";
  if (or.right.constructor.name === "NegContext") {
    orLeft = or.left.getText();
    orRight = or.right.formula().getText();
  } else if (or.left.constructor.name === "NegContext") {
    orLeft = or.left.formula().getText();
    orRight = or.right.getText();
  }
  return orLeft && orRight ? orLeft === orRight : false;
}

export function isContradiction(and) {
  let andLeft = "";
  let andRight = "";
  if (and.right.constructor.name === "NegContext") {
    andLeft = and.left.getText();
    andRight = and.right.formula().getText();
  } else if (and.left.constructor.name === "NegContext") {
    andLeft = and.left.formula().getText();
    andRight = and.right.getText();
  }
  return andLeft && andRight ? andLeft === andRight : false;
}
