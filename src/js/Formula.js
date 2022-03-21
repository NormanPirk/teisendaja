export default class Formula {
    constructor(formula) {
        this.formula = formula;
        this.selStart = formula.length;
        this.selEnd = 0;
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
}