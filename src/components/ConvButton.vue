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
    >
      {{ this.left }}
    </button>
    <div class="item3">≡</div>
    <button
      class="item4"
      @click="startConversion(this.conversionTypeR)"
      :disabled="isDisabled"
    >
      {{ this.right }}
    </button>
  </div>
</template>

<script>
import validateInput from "../js/InputValidator.js";
import matchInput from "../js/InputMatcher.js";
import conversionAllowed from "../js/ConversionValidator.js";
import ConvTypeMarker from "./ConvTypeMarker.vue";

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
  },
  methods: {
    switchButtonText() {
      if (this.f2) {
        this.buttonText = this.buttonText === this.f1 ? this.f2 : this.f1;
      }
    },
    async startConversion(conversionType) {
      const selection = document.getSelection();
      if (
        selection.anchorNode.parentElement.id === "selectable" &&
        selection.focusNode.parentElement.id === "selectable"
      ) {
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
              if (
                ["LS7_2", "LS8_2", "LS20_2", "LS21_2"].includes(conversionType)
              ) {
                this.$store.commit("setAskNewFormulaTrue");
                await new Promise((resolve) => {
                  document.getElementById("add-new-formula").onclick = () => {
                    let f = this.$store.getters.newFormula;
                    if (validateInput(f)) {
                      resolve(f);
                    } else {
                      this.$store.commit("showNewFormulaError");
                    }
                  };
                });
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
              if (["LS20_2", "LS21_2"].includes(conversionType)) {
                this.$store.commit("showFaultyConversionError");
              } else {
                this.$store.commit("showConversionNotAllowedError");
              }
            }
          } else {
            this.$store.commit("showNotSubformulaError");
          }
        } else {
          this.$store.commit("showNoSubformulaError");
        }
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
}

.item4 {
  grid-column: 4;
}

button {
  min-width: fit-content;
  font-size: 0.8em;

  font-weight: bold;
}

button:hover {
  transform: scale(1.05);
}
</style>