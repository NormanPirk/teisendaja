<template>
  <div>
    <button @click="addSymbol('\\neg')">
      <math-jax :latex="'\\neg'"></math-jax>
    </button>
    <button @click="addSymbol('\\land')">
      <math-jax :latex="'\\land'"></math-jax>
    </button>
    <button @click="addSymbol('\\lor')">
      <math-jax :latex="'\\lor'"></math-jax>
    </button>
    <button @click="addSymbol('\\Rightarrow')">
      <math-jax :latex="'\\Rightarrow'"></math-jax>
    </button>
    <button @click="addSymbol('\\Leftrightarrow')">
      <math-jax :latex="'\\Leftrightarrow'"></math-jax>
    </button>
    <button @click="addSymbol('\\forall')">
      <math-jax :latex="'\\forall'"></math-jax>
    </button>
    <button @click="addSymbol('\\exists')">
      <math-jax :latex="'\\exists'"></math-jax>
    </button>
  </div>
</template>

<script>
export default {
  name: "SymbolButtons",
  props: {
    target: String
  },
  data() {
    return {};
  },
  methods: {
    addSymbol: function (value) {
      if (this.target === "formula") {
        this.$store.commit("addSymbol", value);
      } else if (this.target === "newFormula") {
        this.$store.commit("addSymbolToNew", value);
      }
      
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 0;
  height: 2em;
}
button {
  width: 2em;
}
</style>
