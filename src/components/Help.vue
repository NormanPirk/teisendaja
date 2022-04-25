<template>
  <div id="help">
    <div id="hider">
      <a href="#main">
        <button @click="hideHelp()" class="yellow" data-cy="help-hider">
          {{ $t("hideHelp") }}
        </button>
      </a>
    </div>
    <div id="instructions">
      <div class="shadow inserting-formula">
        <div class="intro">
          <div>{{ $t("enteringFormulas") }}</div>
        </div>
        <ol data-cy="insertFormulaGuide">
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
                <span>\land, \wedge, \&</span>
                <span>∧</span>
              </div>
              <div class="row">
                <span>\lor, \vee</span>
                <span>∨</span>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <span>\Rightarrow, \implies</span>
                <span>⇒</span>
              </div>
              <div class="row">
                <span>\Leftrightarrow, \iff</span>
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
          <li>{{ $t("metaCharsGuide") }}</li>
        </ol>
      </div>
      <div class="right">
        <div class="right-upper">
          <div class="shadow symbols">
            <div class="intro help-intro">
              <div>{{ $t("symbols") }}</div>
            </div>
            <ol data-cy="allowedSymbols">
              <li>{{ $t("pred") }}: A, B, ..., Y, Z.</li>
              <li>{{ $t("ind") }}: p, q, r, s, t, u, v, w, x, y, z.</li>
              <li>{{ $t("const") }}: a, b, c, d, e.</li>
              <li>{{ $t("funct") }}: f, g, h, i, j, k, l, m, n, o.</li>
              <li>{{ $t("truthValues") }}: 1, 0</li>
            </ol>
          </div>
          <div class="shadow saving">
            <div class="intro help-intro">
              <div>{{ $t("resultSaveGuide") }}</div>
            </div>

            <ol data-cy="downloadResultGuide">
              <li>{{ $t("downloadGuide") }}</li>
              <li>{{ $t("itermediateDownloadGuide") }}</li>
            </ol>
          </div>
        </div>
        <div class="shadow commutation">
          <div class="intro help-intro">
            <div>{{ $t("additionalGuide") }}</div>
          </div>
          <ol>
            <li>{{ $t("commutationGuide") }}</li>
            <li>{{ $t("associativityGuide") }}</li>
          </ol>
        </div>
      </div>
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
  font-size: 0.8em;
}

#help strong {
  text-align: justify;
  display: inline-block;
  margin-left: 2.5em;
}

#help {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
}

#instructions {
  display: flex;
}

#help .shadow {
  margin: 1em;
  height: fit-content;
}

.inserting-formula,
.commutation,
.symbols,
.saving {
  transition-duration: 0.5s;
}

.inserting-formula:hover,
.commutation:hover {
  transform: scale(1.05);
}

.symbols:hover,
.saving:hover {
  transform: scale(1.1);
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

.inserting-formula {
  width: 45%;
}

.right {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.right-upper {
  display: flex;
}

.symbols {
  width: 55%;
}

.saving {
  width: 45%;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: left;
  border-left: 1px solid #2c3e50;
}

.row {
  display: flex;
  justify-content: space-between;
}

.row span {
  margin: 0 1em;
  font-size: 0.8em;
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
