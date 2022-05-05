<template>
  <div class="btn-container">
    <ConvTypeMarker :convType="this.conversionTypeL.split('_')[0]" class="item1"></ConvTypeMarker>
    <button
      class="item2"
      @click="
        clearErrors();
        startConversion(this.conversionTypeL);
      "
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
      @click="
        clearErrors();
        startConversion(this.conversionTypeR);
      "
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
import convert from "@/js/Converter.js";
import handleNewFormula from "@/js/NewFormulaHandler.js";
import getErrorMessage from "@/js/ErrorMessageHelper.js";

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
    isCorrectSelection() {
      const selection = document.getSelection();
      const div = document.getElementById("selectable");
      return div.contains(selection.getRangeAt(0).startContainer) && div.contains(selection.getRangeAt(0).endContainer);
    },
    userInputNeeded(conversionType) {
      return specialConversions.withUserInput.includes(conversionType);
    },
    getResultForm(subFormula, conversionType, newFormula, startIndex, endIndex) {
      let result = convert(subFormula, conversionType);
      result = handleNewFormula(conversionType, newFormula, result);
      const beginning = this.formula.substring(0, startIndex);
      const ending = this.formula.substring(endIndex, this.formula.length);
      result = beginning + result + ending;
      return result;
    },
    newFormulaValidation(subFormula, conversionType, startIndex, endIndex) {
      return new Promise((resolve) => {
        document.getElementById("add-new-formula").onclick = () => {
          let f = this.$store.getters.newFormula;
          try {
            if (f === "") {
              throw { message: "New subformula is not entered!" };
            }
            validateInput(f);
            const result = this.getResultForm(subFormula, conversionType, f, startIndex, endIndex);
            validateInput(result);
            resolve(f);
          } catch (error) {
            const errorMessage = getErrorMessage(error, this.formula);
            this.$store.commit("setError", {
              message: errorMessage,
              type: "3",
            });
            document.getElementById("selectable-new").classList.add("faulty");
          }
        };
      });
    },
    async startConversion(conversionType) {
      this.$store.state.conversionType = conversionType;
      const selection = document.getSelection();
      if (selection && selection.toString().length > 0) {
        if (this.isCorrectSelection()) {
          const indices = getRangeIndices(document.getSelection().getRangeAt(0));
          const formula = this.formula;
          const selection = document.getSelection();
          const origStart = indices.start;
          const origEnd = indices.end;
          const subFormula = selection.toString();

          let matchingChild = matchInput(formula, subFormula, origStart, origEnd);
          if (matchingChild) {
            if (conversionAllowed(matchingChild, conversionType)) {
              if (this.userInputNeeded(conversionType)) {
                this.$store.commit("setAskNewFormulaTrue");
                this.focusInput();
                await this.newFormulaValidation(subFormula, conversionType, origStart, origEnd);
                this.$store.commit("newFormulaAdded");
                this.convert(subFormula, matchingChild, conversionType, origStart, origEnd);
              } else {
                this.convert(subFormula, matchingChild, conversionType, origStart, origEnd);
              }
            } else {
              if (specialConversions.withZeroOrOne.includes(conversionType)) {
                this.$store.commit("setError", {
                  message: this.$i18n.t("faultyConversion", {
                    conversion: conversionType.split("_")[0],
                  }),
                  type: "1",
                });
              } else {
                this.$store.commit("setError", {
                  message: this.$i18n.t("conversionNotAllowed", {
                    conversion: conversionType.split("_")[0],
                  }),
                  type: "1",
                });
              }
            }
          } else {
            this.$store.commit("setError", {
              message: this.$i18n.t("notSubformula"),
              type: "1",
            });
          }
        } else {
          this.$store.commit("setError", {
            message: this.$i18n.t("selectionNotFromCorrectField"),
            type: "1",
          });
        }
      } else {
        this.$store.commit("setError", {
          message: this.$i18n.t("noSubformula"),
          type: "1",
        });
      }
    },
    convert(subFormula, matchingChild, conversionType, origStart, origEnd) {
      this.$store.dispatch("convert", {
        subFormula,
        matchingChild,
        conversionType,
        origStart,
        origEnd,
      });
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
