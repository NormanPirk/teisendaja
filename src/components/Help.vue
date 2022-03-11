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
            <div class="help-button-div">
              <button @click="toggleTexSymbols()" id="symbols">
              <div v-if="showTexSymbols">{{ $t("hideTexSymbols") }}</div>
              <div v-else>{{ $t("showTexSymbols") }}</div>
            </button>
            </div>
          </li>
          <div v-show="showTexSymbols" id="symbol-table">
            <table>
            <tr>
              <td>¬</td>
              <td>\neg</td>
            </tr>
             <tr>
              <td>∧</td>
              <td>\land</td>
            </tr>
             <tr>
              <td>∨</td>
              <td>\lor</td>
            </tr>
             <tr>
              <td>⇒</td>
              <td>\Rightarrow</td>
            </tr>
             <tr>
              <td>⇔</td>
              <td>\Leftrightarrow</td>
            </tr>
             <tr>
              <td>∃</td>
              <td>\exists</td>
            </tr>
            <tr>
              <td>∀</td>
              <td>\forall</td>
            </tr>
          </table>
          </div>
          <li>{{ $t("pressStartButtonGuide") }}</li>
          <li>{{ $t("conversionGuide") }}</li>
          <li>{{ $t("resultGuide") }}</li>
          <li>{{ $t("associativityGuide") }}</li>
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
      showTexSymbols: true
    };
  },
  methods: {
      toggleHelp() {
          this.showHelp = !this.showHelp;
      },
      toggleTexSymbols() {
        this.showTexSymbols = !this.showTexSymbols;
      }
  }
};
</script>

<style scoped>
.help-button-div {
    display: flex;
    justify-content: right;
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

#symbol-table {
  display: flex;
  justify-content: center;
}

td {
  text-align: left;
  padding-left: 1em;
}

</style>