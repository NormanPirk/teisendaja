<template>
  <div>
    <button @click="addSymbol('\\neg')" v-tooltip="'shift+F4'">¬</button>
    <button @click="addSymbol('\\land')" v-tooltip="'shift+F5'">∧</button>
    <button @click="addSymbol('\\lor')" v-tooltip="'shift+F6'">∨</button>
    <button @click="addSymbol('\\Rightarrow')" v-tooltip="'shift+F7'">⇒</button>
    <button @click="addSymbol('\\Leftrightarrow')" v-tooltip="'shift+F8'">
      ⇔
    </button>
    <button @click="addSymbol('\\forall')" v-tooltip="'shift+F9'">∀</button>
    <button @click="addSymbol('\\exists')" v-tooltip="'shift+F10'">∃</button>
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
