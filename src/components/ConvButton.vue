<template>
  <div class="conv-btn">
    <button
      @click="startConversion(this.conversionTypeL)"
      :disabled="isDisabled"
    >
      <math-jax :latex="this.left"></math-jax>
    </button>
    <math-jax :latex="'\\equiv'"></math-jax>
    <button
      @click="startConversion(this.conversionTypeR)"
      :disabled="isDisabled"
    >
      <math-jax :latex="this.right"></math-jax>
    </button>
  </div>
</template>

<script>
import validateInput from "../js/InputValidator.js";
import matchInput from "../js/InputMatcher.js";
import conversionAllowed from "../js/ConversionValidator.js";

export default {
  name: "ConvButton",
  props: ["left", "right", "conversionTypeL", "conversionTypeR"],
  data() {
    return {
      operationToRight: this.left + " \\equiv " + this.right,
      operationToLeft: this.right + " \\equiv " + this.left,
    };
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
          let replacable = matchInput(
            formula,
            subFormula,
            startIndex,
            endIndex
          );
          if (replacable) {
            if (conversionAllowed(replacable, conversionType)) {
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
                  replacable,
                  conversionType,
                  startIndex,
                  endIndex
                );
              } else {
                this.convert(
                  subFormula,
                  replacable,
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
    convert(subFormula, replacable, conversionType, origStart, origEnd) {
      this.$store.commit("convert", {
        subFormula,
        replacable,
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
button {
  display: flex;
  justify-content: space-between;
  height: 2em;
  font-size: medium;
  align-items: center;
  margin: 0.5em;
}

div {
  height: 1em;
  background: transparent;
  margin-left: 5px;
}

img {
  height: 100%;
  transform: rotate(90deg);
}

.conv-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(85, 85, 85);
  height: 2em;
  border-radius: 5px;
}

.conv-btn button {
  margin: 0.5em;
  padding: 0.5em;
  background: transparent;
  border: none;
}

.conv-btn button:hover {
  transform: scale(1.1);
}

.conv.btn button:disabled {
  background: #ffffff;
}
</style>