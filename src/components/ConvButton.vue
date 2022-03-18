<template>
<div class="btn-container">
  <ConvTypeMarker :convType="this.conversionTypeL.split('_')[0]"></ConvTypeMarker>
  <div class="conv-btn">
    <button
      @click="startConversion(this.conversionTypeL)"
      :disabled="isDisabled"
    >
    {{ this.left }}
    </button>
    ≡
    <button
      @click="startConversion(this.conversionTypeR)"
      :disabled="isDisabled"
    >
    {{ this.right }}
    </button>
  </div>
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
    ConvTypeMarker
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
      const el = document.getElementById("selectable");
      const startIndex = el.selectionStart;
      const endIndex = el.selectionEnd;
      const formula = el.value.toString();
      let subFormula = el.value.toString().substring(startIndex, endIndex);
      if (subFormula) {
        let replacable = matchInput(formula, subFormula, startIndex, endIndex);
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
              this.convert(subFormula, replacable, conversionType);
            } else {
              this.convert(subFormula, replacable, conversionType);
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
    },
    convert(subFormula, replacable, conversionType) {
      this.$store.commit("convert", { subFormula, replacable, conversionType });
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
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.5em;
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(85, 85, 85);
  height: 2em;
  border-radius: 5px;
}


button {
  height: 2em;
  align-items: center;
  margin: 0.1em;
  font-size: 1em;
}

img {
  height: 100%;
  transform: rotate(90deg);
}

.conv-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.conv-btn button {
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