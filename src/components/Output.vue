<template>
  <div class="shadow">
    <div>
      <div class="intro">
        <strong>{{ $t("conversions") }}</strong>
      </div>
      <hr />
    </div>

    <div id="pdf">
      <p v-for="formula in formulas" :key="formula">
        <math-jax :latex="formula"></math-jax>
      </p>
    </div>
    <hr>
    <div id="action-buttons">
      <button @click="downloadTEX">{{ $t("downloadTeX") }}</button>
    </div>
  </div>
  <div></div>
</template>

<script>
import { saveAs } from "file-saver";

export default {
  name: "Output",
  data() {
    return {};
  },
  computed: {
    formulas: {
      get() {
        return this.$store.getters.formulas;
      },
    },
  },
  methods: {
    downloadTEX() {
      let content =
        "\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\\begin{document}\n";
      this.formulas.forEach((formula) => {
        content += "$$" + formula + "$$\n";
      });
      content += "\\end{document}";
      let blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "sample.tex");
    },
  },
};
</script>

<style scoped>
#pdf {
  min-height: 2em;
}

#action-buttons {
  display: flex;
  justify-content: left;
}
</style>
