<template>
  <div class="help-button-div">
    <button @click="toggleHelp()">
      <div v-if="showHelp">{{ $t("hideHelp") }}</div>
      <strong v-else>{{ $t("showHelp") }}</strong>
    </button>
  </div>

  <div id="help" v-show="showHelp">
    <strong>{{ $t("enteringFormulas") }}</strong>
    <ol>
      <li>
        {{ $t("insertFormulaGuide") }}
      </li>
      <div id="symbol-div">
        <div class="column">
          <div class="row">
            <span>\neg</span>
            <span>¬</span>
          </div>
          <div class="row">
            <span>\land</span>
            <span>∧</span>
          </div>
          <div class="row">
            <span>\or</span>
            <span>∨</span>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <span>\Rightarrow</span>
            <span>⇒</span>
          </div>
          <div class="row">
            <span>\Leftrightarrow</span>
            <span>⇔</span>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <span>\forall</span>
            <span>∀</span>
          </div>
          <div class="row">
            <span>\exists</span>
            <span>∃</span>
          </div>
        </div>
      </div>
      <li>{{ $t("pressStartButtonGuide") }}</li>
      <li>{{ $t("conversionGuide") }}</li>
      <li>{{ $t("resultGuide") }}</li>
      <li>{{ $t("associativityGuide") }}</li>
      <li>{{ $t("downloadGuide") }}</li>
    </ol>
    <strong>{{ $t("symbols") }}</strong>
    <ol>
      <li>{{ $t("pred") }}: A, B, ..., Y, Z.</li>
      <li>{{ $t("ind") }}: p, q, r, s, t, u, v, w, x, y, z.</li>
      <li>{{ $t("const") }}: a, b, c, d, e.</li>
      <li>{{ $t("funct") }}: f, g, h, i, j, k, l, m, n, o.</li>
      <li>{{ $t("truthValues") }}: 1, 0</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      showHelp: false,
      showTexSymbols: true,
    };
  },
  methods: {
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
    toggleTexSymbols() {
      this.showTexSymbols = !this.showTexSymbols;
    },
  },
};
</script>

<style scoped>
.help-button-div {
  display: flex;
  justify-content: right;
}

ol {
  font-size: 0.8em;
}

li {
  text-align: left;
  margin-bottom: 0.2em;
}

#help strong {
  text-align: justify;
  display: inline-block;
  margin-left: 2.5em;
}

#help {
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}

ul {
  list-style-type: none;
}

#symbols {
  display: flex;
  justify-content: center;
}

#symbol-div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1em 0;
  width: 100%;
}

td {
  text-align: left;
  padding-left: 1em;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.row {
  display: flex;
  justify-content: space-between;
}

.row span {
  margin: 0 0.5em;
}
</style>
