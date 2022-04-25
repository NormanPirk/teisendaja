<template>
  <div class="btn-container">
    <ConvTypeMarker
      :convType="this.conversionTypeL.split('_')[0]"
      class="item1"
    ></ConvTypeMarker>
    <button
      class="item2"
      @click="clearErrors(); startConversion(this.conversionTypeL);"
      :disabled="isDisabled"
      :data-cy="dataCy1"
    >
      <div class="button-item2">
        {{ this.left }}
        <sub v-if="this.left === '¬T'">1</sub>
      </div>
      
      <i class="fa-solid fa-angle-right button-item3"></i>
    </button>
    <div class="item3">≡</div>
    <button
      class="item4"
      @click="clearErrors(); startConversion(this.conversionTypeR);"
      :disabled="isDisabled"
      :data-cy="dataCy2"
    >
      <i class="fa-solid fa-angle-left button-item1"></i>
      <div class="button-item2">
        {{ this.right }}
        <sub v-if="this.right === 'T'">2</sub>
      </div>
    </button>
  </div>
</template>

<script>
import validateInput from "@/js/InputValidator.js";
import matchInput from "@/js/InputMatcher.js";
import conversionAllowed from "@/js/ConversionValidator.js";
import ConvTypeMarker from "./ConvTypeMarker.vue";
import specialConversions from "@/assets/specialConversionCodes.json";
import getRangeIndices from "@/js/RangeIndices.js";

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
    formula: {
      get() {
        return this.$store.getters.formula;
      },
    },
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
    clearErrors() {
      this.$store.commit("clearErrors");
    },
    focusInput() {
      this.$nextTick(() => {
        document.getElementById("selectable-new").focus();
      });
    },
    isCorrectSelection(selection) {
      if (selection) {
        const div = document.getElementById("selectable");
        return (
          div.contains(selection.getRangeAt(0).startContainer) &&
          div.contains(selection.getRangeAt(0).endContainer)
        );
      }
      return false;
    },
    userInputNeeded(conversionType) {
      return specialConversions.withUserInput.includes(conversionType);
    },
    newFormulaValidation() {
      return new Promise((resolve) => {
        document.getElementById("add-new-formula").onclick = () => {
          let f = this.$store.getters.newFormula;
          try {
            validateInput(f);
            resolve(f);
          } catch (error) {
            this.$store.dispatch("setError", "incorrectNewFormula");
          }
        };
      });
    },
    async startConversion(conversionType) {
      this.$store.commit("setSelectedConversion", conversionType.split("_")[0]);
      const selection = document.getSelection();
      if (selection && selection.toString().length > 0) {
        if (this.isCorrectSelection(selection)) {
          const indices = getRangeIndices(selection.getRangeAt(0));
          if (indices.start < indices.end) {
            const formula = this.formula;
            const selection = document.getSelection();
            const origStart = indices.start;
            const origEnd = indices.end;
            const subFormula = selection.toString();

            if (subFormula) {
              let matchingChild = matchInput(
                formula,
                subFormula,
                origStart,
                origEnd
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
                      origStart,
                      origEnd
                    );
                  } else {
                    this.convert(
                      subFormula,
                      matchingChild,
                      conversionType,
                      origStart,
                      origEnd
                    );
                  }
                } else {
                  if (
                    specialConversions.withZeroOrOne.includes(conversionType)
                  ) {
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
            this.$store.dispatch("setError", "noSubformula");
          }
        } else {
          this.$store.dispatch("setError", "selectionNotFromCorrectField");
        }
      } else {
        this.$store.dispatch("setError", "noSubformula");
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

.button-content {
  display: flex;
}

.button-text {
  width: 100%;
  color: rgb(247, 248, 249);
}

sub {
  color: rgb(247, 248, 249);
}

i {
  height: 1em;
  opacity: 0.6;
}

button {
  display: inline-grid;
  grid-template-columns: 10% 80% 10%;
  min-width: fit-content;
  align-items: center;
  font-size: 0.8em;
  background-color: #5b6d81;
}

.button-item1 {
  grid-column: 1;
}

.button-item2 {
  grid-column: 2;
  color: rgb(247, 248, 249);
}

.button-item3 {
  grid-column: 3;
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
