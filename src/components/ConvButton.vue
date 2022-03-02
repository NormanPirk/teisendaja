<template>
  <button @click="convert(buttonText)" :disabled="isDisabled">
    <math-jax :latex="buttonText"></math-jax>
  </button>
</template>

<script>
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
    convert: function (value) {
      this.$store.commit("convert", value);
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
  justify-content: center;
  width: 7em;
}

div {
  height: 20px;
  background: transparent;
  margin-left: 5px;
}

img {
  height: 100%;
}
</style>