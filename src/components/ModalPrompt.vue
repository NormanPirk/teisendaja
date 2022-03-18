<template>
  <div class="background">
    <div class="foreground">
      <div class="intro">
        <strong>{{ $t("insertNew") }}</strong>
        <strong v-show="incorrectNewFormula" class="error">{{ $t("newIsIncorrect") }}</strong>
      </div>
      <SymbolButtons target="newFormula"></SymbolButtons>
      <textarea
        id="selectable-new"
        v-model="newFormula"
        :class="{ faulty: !isFaulty() }"
        @input="renderMathSymbols(); clearNewFormulaError()"
        @click="clearNewFormulaError()"
        :placeholder="$t('newInputDescription')"
      ></textarea>
      <div id="confirm-btns">
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

export default {
  name: "ModalPrompt",
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
      }
    }
  },
  methods: {
    cancelConversion() {
      this.newFormula = "";
      this.clearNewFormulaError();
      this.$store.commit("newFormulaAdded");
    },
    isFaulty() {
      return this.newFormula.length === 0 ? true : validateInput(this.newFormula);
    },
    clearNewFormulaError() {
      this.$store.commit("clearNewFormulaError");
    },
    renderMathSymbols() {
      let el = document.getElementById("selectable-new");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.newFormula = this.newFormula
        .replaceAll("\\neg", "¬")
        .replaceAll("\\land", "∧")
        .replaceAll("\\lor", "∨")
        .replaceAll("\\Rightarrow", "⇒")
        .replaceAll("\\Leftrightarrow", "⇔")
        .replaceAll("\\forall", "∀")
        .replaceAll("\\exists", "∃")
        .replaceAll(" ", "");
      this.$nextTick(() => {
        el.selectionEnd = newPosition;
      });
    },
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(136, 135, 135, 0.5);
}

.foreground {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  height: 9em;
  width: 40%;
  margin-top: 10%;
  padding: 2em;
  background-color: #ffffff;
  border-radius: 10px;
}

#confirm-btns {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  text-align: left !important;
  vertical-align: middle !important;
  margin-top: 1em;
  font-size: 1.2em;
  /* font-family: "Computer Modern Sans", sans-serif; */
}

.faulty {
  color: rgb(252, 74, 74);
}

.error {
  color: rgb(252, 74, 74);
}

</style>