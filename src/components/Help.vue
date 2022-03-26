<template>
  <div id="help" class="shadow">
    <div class="intro">
      <div>{{ $t("enteringFormulas") }}</div>
    </div>
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
    </ol>
    <div class="intro help-intro">
      <div>{{ $t("resultSaveGuide") }}</div>
    </div>

    <ol>
      <li>{{ $t("downloadGuide") }}</li>
      <li>{{ $t("itermediateDownloadGuide") }}</li>
    </ol>
    <div class="intro help-intro">
      <div>{{ $t("symbols") }}</div>
    </div>
    <ol>
      <li>{{ $t("pred") }}: A, B, ..., Y, Z.</li>
      <li>{{ $t("ind") }}: p, q, r, s, t, u, v, w, x, y, z.</li>
      <li>{{ $t("const") }}: a, b, c, d, e.</li>
      <li>{{ $t("funct") }}: f, g, h, i, j, k, l, m, n, o.</li>
      <li>{{ $t("truthValues") }}: 1, 0</li>
    </ol>
    <div id="hider">
      <button @click="hideHelp()" class="yellow">{{ $t("hideHelp") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {};
  },
  methods: {
    hideHelp() {
      this.$store.commit("toggleHelp");
    },
  },
};
</script>

<style scoped>
ol {
  font-size: 1em;
  margin: 0 2em 1em 2em;
}

li {
  text-align: left;
  margin-bottom: 0.5em;
  font-size: 0.9em;
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
  font-size: 0.9em;
}

.yellow div {
  color: rgb(247, 248, 249);
}

.help-intro {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

button {
  width: fit-content;
  height: 2em;
}

#hider {
  display: flex;
  justify-content: right;
}
</style>
