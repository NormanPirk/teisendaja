<template>
  <div class="intro">
    <div>{{ $t("input") }}</div>
  </div>
  <div id="buttons" v-if="showStartButton()">
    <SymbolButtons target="formula"></SymbolButtons>
    <button @click="start" v-show="showStartButton()" class="yellow" data-cy="start-conversions" v-tooltip="'Ctrl+Enter'">
      {{ $t("startConversions") }}
    </button>
  </div>
  <DeleteButtons v-else></DeleteButtons>
  <div v-if="showStartButton()">
    <textarea
      id="input-field"
      v-model="formula"
      :placeholder="$t('inputDescription')"
      :class="{ faulty: !isCorrect() }"
      @input="
        renderMathSymbols();
        isCorrect();
      "
      data-cy="insertFormula"
      @mousedown="clearErrors()"
    ></textarea>
  </div>
  <div v-else @mousedown="clearErrors()" id="selectable" data-cy="selectable" v-html="paintParens(formula)"></div>
  <div v-show="showStartButton()" id="file-uploader" @click="clearErrors()">
    <input type="file" @change="loadDataFromJson" accept=".json" :placeholder="$t('inputDescription')" id="file" data-cy="uploadJSON" />
    <label for="file" v-tooltip="'Ctrl+U'">{{ $t("fileInputDescription") }} </label>
  </div>
  <div class="error-message-div">
    <ErrorMessages type="1"></ErrorMessages>
  </div>
</template>

<script>
/* eslint-disable */
import SymbolButtons from "./SymbolButtons.vue";
import ErrorMessages from "./ErrorMessages.vue";
import DeleteButtons from "./DeleteButtons.vue";
import validateInput from "../js/InputValidator.js";
import getNewPosition from "../js/CursorPosition.js";
import texAndDigitsToMathSymbols from "../js/MathSymbolConverter.js";
import Formula from "../js/Formula.js";
import getParseTree from "../ANTLR/leftAssocGrammar/ParseTree.js";
import ColorParensVisitor from "../ANTLR/leftAssocGrammar/visitors/coloringParens/ColorParensVisitor.js";
import getErrorMessage from "@/js/ErrorMessageHelper.js";

export default {
  name: "UserInput",
  data() {
    return {
      uploadFile: false,
    };
  },
  components: {
    ErrorMessages,
    SymbolButtons,
    DeleteButtons,
  },
  mounted() {
    document.addEventListener("keydown", this.inputShortcuts);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.inputShortcuts);
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
      set(formulas) {
        this.$store.commit("updateFormulas", formulas);
      },
    },
  },
  methods: {
    showFileUploader() {
      this.uploadFile = true;
    },
    showStartButton() {
      return this.formulas.length === 0;
    },
    isCorrect() {
      if (this.formula.length !== 0) {
        try {
          validateInput(this.formula);
          this.clearErrors();
          return true;
        } catch (error) {
          const errorMessage = getErrorMessage(error, this.formula);
          this.$store.commit("setError", { message: errorMessage, type: "1" });
          return false;
        }
      }
      this.clearErrors();
      return true;
    },
    clearErrors() {
      this.$store.commit("clearErrors");
    },
    start() {
      if (this.formula.length !== 0) {
        if (this.formulas.length === 0) {
          try {
            validateInput(this.formula);
            this.$store.commit("addFormula");
            this.clearErrors();
          } catch (error) {
            const errorMessage = getErrorMessage(error, this.formula);
            this.$store.commit("setError", { message: errorMessage, type: "1" });
          }
        }
      } else {
        this.$store.commit("setError", { message: this.$i18n.t("noInput"), type: "1" });
      }
    },
    renderMathSymbols() {
      let el = document.getElementById("input-field");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.formula = texAndDigitsToMathSymbols(this.formula);
      this.$nextTick(() => {
        el.selectionEnd = newPosition;
      });
    },
    loadDataFromJson(event) {
      try {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
          try {
            const res = JSON.parse(reader.result);
            const formulas = res.map((f) => {
              if (f.formula && validateInput(f.formula) && validateInput(f.formula.substring(f.selStart, f.selEnd))) {
                return new Formula(f.formula, f.selStart, f.selEnd, f.ct);
              } else {
                throw "Unexpected file content!";
              }
            });
            this.formulas = formulas;
            this.formula = formulas[formulas.length - 1].formula;
            this.uploadFile = false;
          } catch (error) {
            console.log(error);
            this.$store.commit("setError", { message: this.$i18n.t("inputFileError"), type: "1" });
          }
        });
        document.getElementById("file").value = "";
        reader.readAsText(file);
      } catch (error) {
        console.log(error);
      }
    },
    paintParens(formula) {
      const tree = getParseTree(formula);
      const visitor = new ColorParensVisitor();
      const result = visitor.visit(tree);
      return result;
    },
    inputShortcuts(e) {
      if (e.ctrlKey || e.metaKey) {
        switch (e.keyCode) {
          case 13:
            e.preventDefault();
            this.start();
            break;
          case 85:
            e.preventDefault();
            document.getElementById("file").click();
            break;
          default:
            return;
        }
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 95%;
  border: none;
  outline: none;
  resize: vertical;
  text-align: left !important;
  vertical-align: middle !important;
  margin-top: 1em;
  margin-right: 0;
  font-size: 1.2em;
  letter-spacing: 0.08em;
  max-height: 10em;
}

#guide {
  opacity: 0.75;
}

#buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

#selectable.error {
  color: #2c3e50;
}

#selectable.error::selection {
  color: rgb(252, 74, 74);
  background-color: transparent;
}

#selectable {
  font-size: 1.2em;
  overflow-wrap: break-word;
  text-align: left;
  padding: 0.5em 0;
  margin: 0.5em 1em 0.5em 1em;
  letter-spacing: 0.04em;
}

#file-uploader {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 1em;
}

#file-uploader input {
  display: none;
}

#file-uploader label {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  height: 2em;
  padding: 0 0.5em;
  font-size: 0.8em;
  background-color: rgb(247, 248, 249);
}

#file-uploader label:hover {
  transform: scale(1.02);
}

::placeholder {
  letter-spacing: normal;
}
</style>
