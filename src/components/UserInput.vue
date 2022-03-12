<template>
  <div class="intro">
    <strong>{{ $t("input") }}</strong>
    <ErrorMessages></ErrorMessages>
  </div>
  <hr />
  <div id="buttons">
    <SymbolButtons target="formula"></SymbolButtons>
    <button @click="start" v-show="showStartButton()">
      {{ $t("startConversions") }}
    </button>
  </div>
  <textarea
    id="selectable"
    v-model="formula"
    :placeholder="$t('inputDescription')"
    :class="{ faulty: !isFaulty(), error: errorExists() }"
    @input="
      renderMathSymbols();
      clearErrors();
    "
    @click="clearErrors()"
  ></textarea>
</template>

<script>
import SymbolButtons from "./SymbolButtons.vue";
import ErrorMessages from "./ErrorMessages.vue";
import validateInput from "../js/InputValidator.js";
import getNewPosition from "../js/CursorPosition.js";

export default {
  name: "UserInput",
  data() {
    return {};
  },
  components: {
      ErrorMessages,
      SymbolButtons
  },
  computed: {
    formula: {
      get() {
        return this.$store.getters.formula;
      },
      set(value) {
        this.$store.commit("updateFormula", value);
      },
    },
    formulas: {
      get() {
        return this.$store.getters.formulas;
      },
    },
    errorWithConversion: {
      get() {
        return this.$store.getters.errorWithConversion;
      }
    }
  },
  methods: {
    start() {
      if (this.formula.length !== 0) {
        if (this.formulas.length === 0) {
          if (validateInput(this.formula)) {
            this.$store.commit("addFormula");
          } else {
            this.$store.commit("showFaultyInputError");
          }          
        }
      } else {
        this.$store.commit("showNoInputError");
      }
    },
    showStartButton() {
      return this.formulas.length === 0;
    },
    isFaulty() {
      return this.formula.length === 0 ? true : validateInput(this.formula);
    },
    errorExists() {
      if (this.errorWithConversion) {
        const el = document.getElementById("selectable");
        el.setSelectionRange(el.selectionStart, el.selectionEnd);
        el.focus();
        return true;
      }
      return false;
    },
    renderMathSymbols() {
      let el = document.getElementById("selectable");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.formula = this.formula.replaceAll("\\neg", "¬")
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
    clearErrors() {
      this.$store.commit("clearErrors");
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: vertical;
  text-align: left !important;
  vertical-align: middle !important;
  margin-top: 1em;
  font-size: 1.2em;
  font-family: "Computer Modern Sans", sans-serif;
}

#guide {
  font-size: smaller;
  opacity: 0.75;
}

.faulty {
  color: rgb(252, 74, 74);
}

#buttons {
  display: flex;
  justify-content: space-between;
}

textarea::selection {
  background-color: #7ff389;
}

.error::selection {
  color: rgb(252, 74, 74);
  background-color: transparent;
}
</style>