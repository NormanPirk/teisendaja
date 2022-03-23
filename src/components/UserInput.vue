<template>
  <div class="intro">
    <strong>{{ $t("input") }}</strong>
    <ErrorMessages></ErrorMessages>
  </div>
  <hr />
  <div id="buttons" v-if="showStartButton()">
    <SymbolButtons target="formula"></SymbolButtons>
    <button @click="start" v-show="showStartButton()">
      {{ $t("startConversions") }}
    </button>
  </div>
  <DeleteButtons v-else></DeleteButtons>
  <textarea
    id="input-field"
    v-if="showStartButton()"
    v-model="formula"
    :placeholder="$t('inputDescription')"
    :class="{ faulty: !isFaulty(), error: errorExists() }"
    @input="
      renderMathSymbols();
      clearErrors();
    "
    @keyup.shift="addSymbolsFromKeyboard"
    @click="clearErrors()"
  ></textarea>
  <div
    v-else
    id="selectable"
    :class="{ error: errorExists() }"
    @click="clearErrors()"
  >
    {{ formula }}
  </div>
  <div v-show="showStartButton()" id="file-uploader" @click="clearErrors()">
    <input
      type="file"
      @change="loadDataFromJson"
      accept=".json"
      :placeholder="$t('inputDescription')"
      id="file"
    />
    <label for="file">{{ $t("fileInputDescription") }}</label>
  </div>
</template>

<script>
import SymbolButtons from "./SymbolButtons.vue";
import ErrorMessages from "./ErrorMessages.vue";
import DeleteButtons from "./DeleteButtons.vue";
import validateInput from "../js/InputValidator.js";
import getNewPosition from "../js/CursorPosition.js";
import insertTextAtCursor from "insert-text-at-cursor";
import texToMathSymbols from "../js/MathSymbolConverter.js";
import Formula from "../js/Formula.js";

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
    errorWithConversion: {
      get() {
        return this.$store.getters.errorWithConversion;
      },
    },
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
    showFileUploader() {
      this.uploadFile = true;
    },
    showStartButton() {
      return this.formulas.length === 0;
    },
    isFaulty() {
      return this.formula.length === 0 ? true : validateInput(this.formula);
    },
    errorExists() {
      if (this.errorWithConversion) {
        return true;
      }
      return false;
    },
    loadDataFromJson(event) {
      try {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
          console.log(event);
          try {
            const res = JSON.parse(reader.result);
            const formulas = res.map((f) => {
              if (f.formula && validateInput(f.formula)) {
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
            this.$store.commit("showInputFileError");
          }
        });
        reader.readAsText(file);
      } catch (error) {
        console.log(error);
      }
    },
    renderMathSymbols() {
      let el = document.getElementById("input-field");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.formula = texToMathSymbols(this.formula);
      this.$nextTick(() => {
        el.selectionEnd = newPosition;
      });
    },
    addSymbolsFromKeyboard(event) {
      const el = document.getElementById("input-field");
      try {
        switch (event.key) {
          case "F4":
            insertTextAtCursor(el, "\\neg");
            break;
          case "F5":
            insertTextAtCursor(el, "\\land");
            break;
          case "F6":
            insertTextAtCursor(el, "\\lor");
            break;
          case "F7":
            insertTextAtCursor(el, "\\Rightarrow");
            break;
          case "F8":
            insertTextAtCursor(el, "\\Leftrightarrow");
            break;
          case "F9":
            insertTextAtCursor(el, "\\forall");
            break;
          case "F10":
            insertTextAtCursor(el, "\\exists");
            break;
        }
      } catch (err) {
        console.log(err);
      }
    },
    clearErrors() {
      this.$store.commit("clearErrors");
    },
  },
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
  font-size: 1em;
}

#guide {
  opacity: 0.75;
}

.faulty {
  color: rgb(252, 74, 74);
}

#buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#selectable::selection {
  background-color: #7ff389;
}

#selectable.error::selection {
  color: rgb(252, 74, 74);
  background-color: transparent;
}

#selectable {
  font-size: 1em;
  overflow-wrap: break-word;
  text-align: left;
  padding: 0.5em 0;
  margin: 0.5em 0;
}

#file-uploader {
  display: flex;
  justify-content: left;
  align-items: center;
}

#file-uploader input {
  display: none;
}

#file-uploader label {
  display: flex;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(85, 85, 85);
  border-radius: 5px;
  height: 2em;
  padding: 0 0.5em;
  font-size: 0.8em;
}
</style>
