import getParseTree from "@/ANTLR/leftAssocGrammar/ParseTree.js";
import ColorParensVisitor, {
  colors,
  index,
  increaseIndex,
  resetIndex,
} from "@/ANTLR/leftAssocGrammar/visitors/coloringParens/ColorParensVisitor.js";

describe("Coloring parentheses around expression", () => {
  test("adds color to parentheses around (¬∀xF(x)∧B∨C⇔∃yD(y)⇒H∧1∧0)", () => {
    const input = "(¬∀xF(x)∧B∨C⇔∃yD(y)⇒H∧1∧0)";
    const tree = getParseTree(input);
    const visitor = new ColorParensVisitor();
    expect(visitor.visit(tree)).toBe(
      "<span style='color:#E39E21;font-weight:bold;'>(</span>¬∀xF(x)∧B∨C⇔∃yD(y)⇒H∧1∧0<span style='color:#E39E21;font-weight:bold;'>)</span>"
    );
    resetIndex();
  });

  test("does not let color picking index go out of range", () => {
    const limit = colors.length;
    for (let i = 0; i < limit; i++) {
      expect(index).toBe(i);
      increaseIndex();
    }
    increaseIndex();
    expect(index).toBe(0);
    resetIndex();
  });
});
