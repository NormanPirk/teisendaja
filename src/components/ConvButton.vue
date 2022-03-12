<template>
  <div class="conv-btn">
    <button
      @click="startConversion(this.operationToRight)"
      :disabled="isDisabled"
    >
      <math-jax :latex="this.left"></math-jax>
    </button>
    <math-jax :latex="'\\equiv'"></math-jax>
    <button
      @click="
        startConversion(
          isOnlyLeftToRightOp ? this.operationToRight : this.operationToLeft
        )
      "
      :disabled="isDisabled"
    >
      <math-jax :latex="this.right"></math-jax>
    </button>
  </div>
</template>

<script>
import getConversionType from "../js/ConversionType.js";
import validateInput from "../js/InputValidator.js";

export default {
  name: "ConvButton",
  props: ["left", "right"],
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
    isOnlyLeftToRightOp() {
      return [
        "\\mathcal{G} \\land \\mathcal{F}",
        "\\mathcal{G} \\lor \\mathcal{F}",
      ].includes(this.right);
    },
  },
  methods: {
    switchButtonText() {
      if (this.f2) {
        this.buttonText = this.buttonText === this.f1 ? this.f2 : this.f1;
      }
    },
    async startConversion(conversion) {
      const conversionType = getConversionType(conversion);
      if (["LS7_2", "LS8_2", "LS20_2", "LS21_2"].includes(conversionType)) {
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
        this.convert(conversionType);
      } else {
        this.convert(conversionType);
      }
    },
    convert(conversionType) {
      this.$store.commit("convert", conversionType);
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