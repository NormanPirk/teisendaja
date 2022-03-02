<template>
  <div id="editor">
    <div id="editor-left">
      <div class="shadow">
        <div class="intro">
          <strong>{{ $t("input") }}</strong>
          <strong v-show="noInput" class="error">{{ $t("noInput") }}</strong>
          <strong v-show="faultyInput" class="error">{{ $t("faultyInput") }}</strong>
        </div>
        <hr />
        <div id="buttons">
          <SymbolButtons></SymbolButtons>
          <button @click="start" v-show="showStartButton()">
            {{ $t("startConversions") }}
          </button>
        </div>
        <textarea
          id="selectable"
          v-model="formula"
          :placeholder="$t('inputDescription')"
          @input="clearErrors"
        ></textarea>
        <p id="rendered">
          <math-jax
            :latex="'\\displaylines{' + formula + '}'"
            .block="true"
            :class="{ faulty: !isFaulty() }"
          ></math-jax>
        </p>
        <ConversionButtons></ConversionButtons>
        <DeleteButtons></DeleteButtons>
        <hr>
        <Help></Help>
      </div>
    </div>

    <div id="editor-right">
      <Output></Output>
    </div>
  </div>
</template>

<script>
import ConversionButtons from "./ConversionButtons.vue";
import SymbolButtons from "./SymbolButtons.vue";
import DeleteButtons from "./DeleteButtons.vue";
import Output from "./Output.vue";
import Help from "./Help.vue";
import validateInput from "../ANTLR/InputValidator.js";

export default {
  name: "UserInput",
  data() {
    return {};
  },
  components: {
    SymbolButtons,
    ConversionButtons,
    DeleteButtons,
    Output,
    Help,
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
    noInput: {
      get() {
        return this.$store.getters.noInput;
      }
    },
    faultyInput: {
      get() {
        return this.$store.getters.faultyInput;
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
            this.$store.commit("showFaultyInput");
          }          
        }
      } else {
        this.$store.commit("showNoInput");
      }
    },
    showStartButton() {
      return this.formulas.length === 0;
    },
    isFaulty() {
      return this.formula.length === 0 ? true : validateInput(this.formula);
    },
    clearErrors() {
      this.$store.commit("clearErrors");
    }
  },
};
</script>

<style scoped>
#editor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: auto;
  border: none !important;
}
#editor div {
  min-height: 1em;
}

textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: vertical;
  text-align: left !important;
  vertical-align: middle !important;
  margin-top: 1em;
}

#editor-left {
  width: 55%;
  margin-right: 0.5em;
}
#editor-right {
  width: 45%;
  margin-left: 0.5em;
}

#guide {
  font-size: smaller;
  opacity: 0.75;
}

.faulty {
  background-color: rgba(252, 74, 74, 0.288);
}

#buttons {
  display: flex;
  justify-content: space-between;
}

.error {
  color: rgb(252, 74, 74);
}


</style>
