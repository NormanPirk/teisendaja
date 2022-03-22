export default function texToMathSymbols(formula) {
  return formula
    .replaceAll("\\neg", "¬")
    .replaceAll("\\land", "∧")
    .replaceAll("\\lor", "∨")
    .replaceAll("\\Rightarrow", "⇒")
    .replaceAll("\\Leftrightarrow", "⇔")
    .replaceAll("\\forall", "∀")
    .replaceAll("\\exists", "∃")
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
