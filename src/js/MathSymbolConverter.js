export default function texAndDigitsToMathSymbols(formula) {
  return formula
    .replaceAll("\\neg", "¬")
    .replaceAll("2", "¬")
    .replaceAll("\\land", "∧")
    .replaceAll("\\wedge", "∧")
    .replaceAll("\\&", "∧")
    .replaceAll("3", "∧")
    .replaceAll("\\lor", "∨")
    .replaceAll("\\vee", "∨")
    .replaceAll("4", "∨")
    .replaceAll("\\Rightarrow", "⇒")
    .replaceAll("\\implies", "⇒")
    .replaceAll("5", "⇒")
    .replaceAll("\\Leftrightarrow", "⇔")
    .replaceAll("\\iff", "⇔")
    .replaceAll("6", "⇔")
    .replaceAll("\\forall", "∀")
    .replaceAll("7", "∀")
    .replaceAll("\\exists", "∃")
    .replaceAll("8", "∃")
    .replaceAll(" ", "");
}

export function mathSymbolsToTex(formula) {
  return formula.replaceAll("¬", "\\neg ").replaceAll("∧", "\\land ").replaceAll("∨", "\\lor ").replaceAll("⇒", "\\Rightarrow ").replaceAll("⇔", "\\Leftrightarrow ").replaceAll("∀", "\\forall ").replaceAll("∃", "\\exists ");
}
