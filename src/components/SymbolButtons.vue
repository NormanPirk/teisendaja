<template>
  <div>
    <button @click="addSymbol('\\neg')" v-tooltip="'ctrl+2'">¬</button>
    <button @click="addSymbol('\\land')" v-tooltip="'ctrl+3'">∧</button>
    <button @click="addSymbol('\\lor')" v-tooltip="'ctrl+4'">∨</button>
    <button @click="addSymbol('\\Rightarrow')" v-tooltip="'ctrl+5'">⇒</button>
    <button @click="addSymbol('\\Leftrightarrow')" v-tooltip="'ctrl+6'">
      ⇔
    </button>
    <button @click="addSymbol('\\forall')" v-tooltip="'ctrl+7'">∀</button>
    <button @click="addSymbol('\\exists')" v-tooltip="'ctrl+8'">∃</button>
  </div>
</template>

<script>
export default {
  name: "SymbolButtons",
  props: {
    target: String,
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
