<template>
  <div>
    <button @click="addSymbol('\\neg')" v-tooltip="'2'" data-cy="not">¬</button>
    <button @click="addSymbol('\\land')" v-tooltip="'3'" data-cy="and">∧</button>
    <button @click="addSymbol('\\lor')" v-tooltip="'4'" data-cy="or">∨</button>
    <button @click="addSymbol('\\Rightarrow')" v-tooltip="'5'" data-cy="impl">⇒</button>
    <button @click="addSymbol('\\Leftrightarrow')" v-tooltip="'6'" data-cy="equiv">⇔</button>
    <button @click="addSymbol('\\forall')" v-tooltip="'7'" data-cy="forall">∀</button>
    <button @click="addSymbol('\\exists')" v-tooltip="'8'" data-cy="exists">∃</button>
  </div>
</template>

<script>
import insertTextAtCursor from "insert-text-at-cursor";

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
        const el = document.getElementById("input-field");
        insertTextAtCursor(el, value);
      } else if (this.target === "newFormula") {
        const el = document.getElementById("selectable-new");
        insertTextAtCursor(el, value);
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

button:hover {
  transform: scale(1.12);
}
</style>
