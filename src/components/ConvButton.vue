<template>
  <button @click="startConversion()" :disabled="isDisabled">
    <math-jax :latex="buttonText"></math-jax>
    <div v-if="f2">
      <img @click.stop="switchButtonText" src="/switch.png" />
    </div>
  </button>
</template>

<script>
import getConversionType from "../js/ConversionType.js";
import validateInput from "../js/InputValidator.js";

export default {
  name: "ConvButton",
  props: ["f1", "f2"],
  data() {
    return {
      buttonText: this.f1,
    };
  },
  computed: {
    isDisabled: function () {
      return this.$store.getters.formulas.length === 0;
    },
  },
  methods: {
    switchButtonText() {
      if (this.f2) {
        this.buttonText = this.buttonText === this.f1 ? this.f2 : this.f1;
      }
    },
    async startConversion() {
        const conversionType = getConversionType(this.buttonText);
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
</style>