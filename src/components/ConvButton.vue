<template>
  <div class="btn-container">
    <ConvTypeMarker
      :convType="this.conversionTypeL.split('_')[0]"
      class="item1"
    ></ConvTypeMarker>
    <button
      class="item2"
      @click="startConversion(this.conversionTypeL)"
      :disabled="isDisabled"
      :data-cy="dataCy1"
    >
      {{ this.left }}
    </button>
    <div class="item3">≡</div>
    <button
      class="item4"
      @click="startConversion(this.conversionTypeR)"
      :disabled="isDisabled"
      :data-cy="dataCy2"
    >
      {{ this.right }}
    </button>
  </div>
</template>

<script>
import validateInput from "@/js/InputValidator.js";
import matchInput from "@/js/InputMatcher.js";
import conversionAllowed from "@/js/ConversionValidator.js";
import ConvTypeMarker from "./ConvTypeMarker.vue";
import specialConversions from "@/assets/specialConversionCodes.json";

export default {
  name: "ConvButton",
  props: ["left", "right", "conversionTypeL", "conversionTypeR"],
  data() {
    return {
      operationToRight: this.left + " \\equiv " + this.right,
      operationToLeft: this.right + " \\equiv " + this.left,
    };
  },
  components: {
    ConvTypeMarker,
  },
  computed: {
    isDisabled() {
      return this.$store.getters.formulas.length === 0;
    },
    dataCy1() {
      return this.conversionTypeL.split("_")[0] + "_1";
    },
    dataCy2() {
      return this.conversionTypeL.split("_")[0] + "_2";
    },
  },
  methods: {
    switchButtonText() {
      if (this.f2) {
        this.buttonText = this.buttonText === this.f1 ? this.f2 : this.f1;
      }
    },
    focusInput() {
      this.$nextTick(() => {
        document.getElementById("selectable-new").focus();
      });
    },
    isCorrectSelection(selection) {
      return (
        selection.anchorNode.parentElement.id === "selectable" &&
        selection.focusNode.parentElement.id === "selectable"
      );
    },
    userInputNeeded(conversionType) {
      return specialConversions.withUserInput.includes(conversionType);
    },
    newFormulaValidation() {
      return new Promise((resolve) => {
        document.getElementById("add-new-formula").onclick = () => {
          let f = this.$store.getters.newFormula;
          if (validateInput(f)) {
            resolve(f);
          } else {
            this.$store.dispatch("setError", "incorrectNewFormula");
          }
        };
      });
    },
    async startConversion(conversionType) {
      this.$store.commit("setSelectedConversion", conversionType.split("_")[0]);
      const selection = document.getSelection();
      if (this.isCorrectSelection(selection)) {
        const el = document.getElementById("selectable");
        const formula = el.innerHTML.toString();
        const selection = document.getSelection();
        const sel = selection.getRangeAt(0);
        const startIndex = sel.startOffset;
        const endIndex = sel.endOffset;
        const subFormula = selection.toString();

        if (subFormula) {
          let matchingChild = matchInput(
            formula,
            subFormula,
            startIndex,
            endIndex
          );
          if (matchingChild) {
            if (conversionAllowed(matchingChild, conversionType)) {
              if (this.userInputNeeded(conversionType)) {
                this.$store.commit("setAskNewFormulaTrue");
                this.focusInput();
                await this.newFormulaValidation();
                this.$store.commit("newFormulaAdded");
                this.convert(
                  subFormula,
                  matchingChild,
                  conversionType,
                  startIndex,
                  endIndex
                );
              } else {
                this.convert(
                  subFormula,
                  matchingChild,
                  conversionType,
                  startIndex,
                  endIndex
                );
              }
            } else {
              if (["L24_2", "L25_2"].includes(conversionType)) {
                this.$store.dispatch("setError", "faultyConversion");
              } else {
                this.$store.dispatch("setError", "conversionNotAllowed");
              }
            }
          } else {
            this.$store.dispatch("setError", "notSubformula");
          }
        } else {
          this.$store.dispatch("setError", "noSubformula");
        }
      } else {
        this.$store.dispatch("setError", "selectionNotFromCorrectField");
      }
    },
    convert(subFormula, matchingChild, conversionType, origStart, origEnd) {
      this.$store.commit("convert", {
        subFormula,
        matchingChild,
        conversionType,
        origStart,
        origEnd,
      });
      if (this.$store.getters.converted) {
        this.$store.commit("addFormula");
        this.$store.commit("finishConversion");
      }
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: inline-grid;
  grid-template-columns: 10% 43% 4% 43%;
  height: 2em;
  width: fit-content;
  align-items: center;
}

.item1 {
  grid-column: 1;
  text-align: left;
  font-size: 0.8em;
}

.item2 {
  grid-column: 2;
}

.item3 {
  grid-column: 3;
  text-align: center;
}

.item4 {
  grid-column: 4;
}

button {
  min-width: fit-content;
  font-size: 0.9em;
  background-color: #5b6d81;
  color: rgb(247, 248, 249);
  padding: 0.2em;
}

button:hover {
  transform: scale(1.05);
}

button:disabled:hover {
  transform: scale(1);
}

button:disabled {
  box-shadow: none;
  opacity: 0.7;
}
</style>
