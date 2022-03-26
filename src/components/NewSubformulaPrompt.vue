<template>
  <div class="background">
    <div class="foreground">
      <div class="intro">
        <div>{{ $t("insertNew") }}</div>
      </div>
      <div class="btns-err">
        <SymbolButtons target="newFormula"></SymbolButtons>
        <strong v-show="incorrectNewFormula" class="error">{{
          $t("newIsIncorrect")
        }}</strong>
      </div>

      <div>
        <textarea
          id="selectable-new"
          v-model="newFormula"
          :class="{ faulty: !isFaulty() }"
          @input="
            renderMathSymbols();
            clearNewFormulaError();
          "
          @click="clearNewFormulaError()"
          :placeholder="$t('newInputDescription')"
        ></textarea>
      </div>
      <div class="confirm-btns">
        <button @click="cancelConversion">{{ $t("cancel") }}</button>
        <button id="add-new-formula">{{ $t("ready") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import SymbolButtons from "./SymbolButtons.vue";
import getNewPosition from "../js/CursorPosition.js";
import validateInput from "../js/InputValidator.js";
import texAndDigitsToMathSymbols from "@/js/MathSymbolConverter.js";

export default {
  name: "NewSubformulaPrompt",
  data() {
    return {};
  },
  components: {
    SymbolButtons,
  },
  computed: {
    newFormula: {
      get() {
        return this.$store.getters.newFormula;
      },
      set(value) {
        this.$store.commit("updateNewFormula", value);
      },
    },
    incorrectNewFormula: {
      get() {
        return this.$store.getters.incorrectNewFormula;
      },
    },
  },
  methods: {
    cancelConversion() {
      this.newFormula = "";
      this.clearNewFormulaError();
      this.$store.commit("newFormulaAdded");
    },
    isFaulty() {
      return this.newFormula.length === 0
        ? true
        : validateInput(this.newFormula);
    },
    clearNewFormulaError() {
      this.$store.commit("clearNewFormulaError");
    },
    renderMathSymbols() {
      let el = document.getElementById("selectable-new");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.newFormula = texAndDigitsToMathSymbols(this.newFormula);
      this.$nextTick(() => {
        el.selectionEnd = newPosition;
      });
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  text-align: left !important;
  vertical-align: middle !important;
  margin-top: 1em;
  font-size: 1em;
}

.btns-err {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
