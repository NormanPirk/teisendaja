<template>
  <div id="editor">
    <div id="editor-left">
      <SymbolButtons></SymbolButtons>
      <div class="shadow">
        <div class="intro">
          <strong>{{ $t("input") }}</strong>
          <button @click="start" v-show="showStartButton()">{{ $t("startConversions") }}</button>
        </div>
        <hr>
        <textarea id="selectable" v-model="formula" :placeholder="$t('inputDescription')"></textarea>
        <p><math-jax :latex="formula"></math-jax></p>
      </div>
      <Output></Output>
    </div>

    <div id="editor-right">
      <ConversionButtons></ConversionButtons>
    </div>
  </div>
</template>

<script>
import ConversionButtons from "./ConversionButtons.vue";
import SymbolButtons from "./SymbolButtons.vue";
import Output from "./Output.vue";

export default {
  name: "Input",
  data() {
    return {};
  },
  components: {
    SymbolButtons,
    ConversionButtons,
    Output,
  },
  computed: {
    formula: {
      get() {
        return this.$store.getters.formula;
      },
      set(value) {
        this.$store.commit("updateFormula", value);
      },
    },
    formulas: {
      get() {
        return this.$store.getters.formulas;
      },
    },
  },
  methods: {
    start: function () {
      if (this.formulas.length === 0) {
        this.$store.commit("addFormula");
      }
    },
    showStartButton: function () {
      console.log(this.formulas.length);
      return this.formulas.length === 0;
    },
  }
};
</script>

<style scoped>
#editor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: auto;
  border: none !important;
}
#editor div {
  min-height: 2em;
}

textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: vertical;
  text-align: left !important;
}

#editor-left {
  width: 60%;
}
#editor-right {
  width: 40%;
}

#guide {
  font-size: smaller;
  opacity: 0.75;
}

</style>
