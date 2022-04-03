import { mathSymbolsToTex } from "./MathSymbolConverter.js";

export default class Formula {
  constructor(formula, selStart = formula.length, selEnd = 0, ct = "") {
    this.formula = formula;
    this.selStart = selStart;
    this.selEnd = selEnd;
    this.ct = ct;
  }
  getStart() {
    return this.formula.substring(0, this.selStart);
  }
  getUnderlined() {
    if (this.selEnd > this.selStart) {
      return this.formula.substring(this.selStart, this.selEnd);
    }
    return "";
  }
  getEnding() {
    if (this.selEnd > 0) {
      return this.formula.substring(this.selEnd, this.formula.length);
    }
    return "";
  }
  getAppliedConversion() {
    return this.ct;
  }

  toTex() {
    const start = mathSymbolsToTex(this.getStart());
    const underlined = mathSymbolsToTex(this.getUnderlined());
    const ending = mathSymbolsToTex(this.getEnding());
    const ct = this.ct;

    let result = start;
    result += underlined ? "\\underline{" + underlined + "}" : "";
    result += ending ? ending : "";
    result += ct ? "^{\\;\\;\\;" + ct + "}" : "";
    return result;
  }

  removeMetaInfo() {
    this.selStart = this.formula.length;
    this.selEnd = 0;
    this.ct = "";
  }

  getPDFContent(addEquals) {
    return {
      text: [
        { text: addEquals ? "≡\t" + this.getStart() : this.getStart() },
        { text: this.getUnderlined(), decoration: "underline" },
        this.getEnding(),
        { text: "\t" + this.getAppliedConversion() + "\n", style: "small"}
      ]
    }
  }

}