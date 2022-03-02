<template>
  <div id="help-button-div">
    <button @click="toggleHelp()">
        <strong v-if="showHelp">{{ $t("hideHelp") }}</strong>
        <strong v-else>{{ $t("showHelp") }}</strong>
    </button>
  </div>

  <div id="help" v-show="showHelp">
      <strong>{{ $t("enteringFormulas") }}</strong>
      <ol>
          <li>{{ $t("insertFormulaGuide") }}</li>
          <li>{{ $t("pressStartButtonGuide") }}</li>
          <li>{{ $t("conversionGuide") }}</li>
          <li>{{ $t("resultGuide") }}</li>
      </ol>
      <strong>{{ $t("symbols") }}</strong>
      <ol>
          <li>{{ $t("ind") }}: <math-jax :latex="'p, q, r, s, t, u, v, w, x, y, z'"></math-jax>.</li>
          <li>{{ $t("const") }}: <math-jax :latex="'a, b, c, d, e'"></math-jax>.</li>
          <li>{{ $t("funct") }}: <math-jax :latex="'f, g, h, i, j, k, l, m, n, o'"></math-jax>.</li>
          <li>{{ $t("pred") }}: <math-jax :latex="'A, B, ..., Y, Z'"></math-jax>.</li>
      </ol>
      
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      showHelp: false,
    };
  },
  methods: {
      toggleHelp() {
          this.showHelp = !this.showHelp;
      } 
  }
};
</script>

<style scoped>
#help-button-div {
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

</style>