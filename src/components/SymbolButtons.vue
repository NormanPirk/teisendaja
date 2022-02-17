<template>
  <div>
    <button @click="addSymbol('\\neg ')">
      <math-jax :latex="'\\neg'"></math-jax>
    </button>
    <button @click="addSymbol('\\land ')">
      <math-jax :latex="'\\land'"></math-jax>
    </button>
    <button @click="addSymbol('\\lor ')">
      <math-jax :latex="'\\lor'"></math-jax>
    </button>
    <button @click="addSymbol('\\Rightarrow ')">
      <math-jax :latex="'\\Rightarrow'"></math-jax>
    </button>
    <button @click="addSymbol('\\Leftrightarrow ')">
      <math-jax :latex="'\\Leftrightarrow'"></math-jax>
    </button>
    <button @click="addSymbol('\\exists ')">
      <math-jax :latex="'\\exists'"></math-jax>
    </button>
    <button @click="addSymbol('\\forall ')">
      <math-jax :latex="'\\forall'"></math-jax>
    </button>
  </div>
</template>

<script>
export default {
  name: "SymbolButtons",
  data() {
    return {};
  },
  methods: {
    addSymbol: function (value) {
      this.$store.commit("addSymbol", value);
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 0;
  height: 2em;
}
button {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>
