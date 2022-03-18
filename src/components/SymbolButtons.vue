<template>
  <div>
    <button @click="addSymbol('\\neg')">¬</button>
    <button @click="addSymbol('\\land')">∧</button>
    <button @click="addSymbol('\\lor')">∨</button>
    <button @click="addSymbol('\\Rightarrow')">⇒</button>
    <button @click="addSymbol('\\Leftrightarrow')">⇔</button>
    <button @click="addSymbol('\\forall')">∀</button>
    <button @click="addSymbol('\\exists')">∃</button>
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
  flex-wrap: wrap;
}
button {
  width: 2em;
}
</style>
