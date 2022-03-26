export default function texAndDigitsToMathSymbols(formula) {
  return formula
    .replaceAll("\\neg", "¬")
    .replaceAll("2", "¬")
    .replaceAll("\\land", "∧")
    .replaceAll("3", "∧")
    .replaceAll("\\lor", "∨")
    .replaceAll("4", "∨")
    .replaceAll("\\Rightarrow", "⇒")
    .replaceAll("5", "⇒")
    .replaceAll("\\Leftrightarrow", "⇔")
    .replaceAll("6", "⇔")
    .replaceAll("\\forall", "∀")
    .replaceAll("7", "∀")
    .replaceAll("\\exists", "∃")
    .replaceAll("8", "∃")
    .replaceAll(" ", "");
}

export function mathSymbolsToTex(formula) {
  return formula
    .replaceAll("¬", "\\neg ")
    .replaceAll("∧", "\\land ")
    .replaceAll("∨", "\\lor ")
    .replaceAll("⇒", "\\Rightarrow ")
    .replaceAll("⇔", "\\Leftrightarrow ")
    .replaceAll("∀", "\\forall ")
    .replaceAll("∃", "\\exists ");
}
