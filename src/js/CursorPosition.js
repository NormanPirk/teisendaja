export default function getNewPosition(subFormula, oldPosition) {
  let newPosition = oldPosition;
  if (subFormula.endsWith("\\neg")) {
    newPosition = oldPosition - 3;
  } else if (subFormula.endsWith("\\land")) {
    newPosition = oldPosition - 4;
  } else if (subFormula.endsWith("\\wedge")) {
    newPosition = oldPosition - 5;
  } else if (subFormula.endsWith("\\lor")) {
    newPosition = oldPosition - 3;
  } else if (subFormula.endsWith("\\vee")) {
    newPosition = oldPosition - 3;
  } else if (subFormula.endsWith("\\Rightarrow")) {
    newPosition = oldPosition - 10;
  } else if (subFormula.endsWith("\\implies")) {
    newPosition = oldPosition - 7;
  } else if (subFormula.endsWith("\\Leftrightarrow")) {
    newPosition = oldPosition - 14;
  } else if (subFormula.endsWith("\\iff")) {
    newPosition = oldPosition - 3;
  } else if (subFormula.endsWith("\\forall")) {
    newPosition = oldPosition - 6;
  } else if (subFormula.endsWith("\\exists")) {
    newPosition = oldPosition - 6;
  }
  return newPosition;
}
