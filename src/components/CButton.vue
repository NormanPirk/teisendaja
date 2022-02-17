<template>
  <button @click="convert(buttonText)" :disabled="isDisabled">
    <math-jax :latex="buttonText"></math-jax>
    <div>
      <img @click.stop="switchButtonText" src="/switch.png" />
    </div>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: ["f1", "f2"],
  data() {
    return {
      buttonText: this.f1,
    };
  },
  computed: {
    isDisabled: function () {
      console.log(this.$store.getters.formulas.length === 0);
      return this.$store.getters.formulas.length === 0;
    },
  },
  methods: {
    switchButtonText: function () {
      this.buttonText = this.buttonText === this.f1 ? this.f2 : this.f1;
    },
    convert: function (value) {
      console.log("clicked");
      this.$store.commit("convert", value);
      this.$store.commit("addFormula");
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: space-between;
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