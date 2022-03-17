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
        {{ formulas[formulas.length - 1] }}
      </div>
      <hr />
      <div id="pdf">
        <div v-for="(formula, index) in formulas" :key="formula">{{ (index === 0)? formula : "≡  " + formula }}</div>
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
  overflow: scroll;;
  max-height: 30em;
  font-size: 1.2em;
}

#pdf div {
  text-align: left;
  padding: 0.4em 0;
}

#last {
  min-height: 3em;
  overflow-x: scroll;
  font-size: 1.5em;
  text-align: left;
}

#action-buttons {
  display: flex;
  justify-content: right;
}

p {
  font-size: 1.2em;
  padding: 0.2em;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
}
</style>
