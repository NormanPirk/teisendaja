<template>
  <div class="shadow">
    <div>
      <div class="intro">
        <strong>{{ $t("conversions") }}</strong>
      </div>
      <hr />
    </div>
    <div id="action-buttons">
      <!-- <button @click="downloadTEX">{{ $t("downloadTeX") }}</button> -->
    </div>
    <div>
      <div id="last">
        <p>{{ formulas[formulas.length - 1] }}</p>
      </div>
      <hr />
      <div id="pdf">
        <p v-for="(formula, index) in formulas" :key="formula">{{ (index === 0)? formula : "≡  " + formula }}</p>
      </div>
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
  min-height: 4em;
  overflow-x: scroll;
  overflow: overlay;
  max-height: 30em;
}

#last {
  overflow-x: scroll;
  overflow: overlay;
}

#action-buttons {
  display: flex;
  justify-content: right;
}

p {
  font-size: 1.2em;
  font-family: "Computer Modern Sans", sans-serif;
  padding: 0.2em;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
}
</style>
