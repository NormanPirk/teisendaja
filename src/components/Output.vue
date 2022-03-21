<template>
  <div class="shadow">
    <div>
      <div class="intro">
        <strong>{{ $t("conversions") }}</strong>
      </div>
      <hr />
    </div>
    <div id="action-buttons">
      <button @click="downloadPDF">{{ $t("downloadPDF") }}</button>
    </div>
    <div>
      <div id="last">
        {{ formulas[formulas.length - 1]?.formula }}
      </div>
      <hr />
      <div id="pdf">
        <p v-for="(formula, index) in formulas" :key="formula">
          {{ index === 0 ? formula.getStart() : "≡  " + formula.getStart()
          }}<u>{{ formula.getUnderlined() }}</u
          >{{ formula.getEnding() }}<sup v-if="formula.ct"
          >&nbsp;&nbsp;&nbsp;{{ formula.ct}}</sup>
        </p>

      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import * as html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
    downloadPDF() {
      const el = document.getElementById("pdf");
      html2canvas(el).then((canvas) => {
        let img = canvas.toDataURL();
        let doc = new jsPDF();
        doc.addImage(img, "PNG", 10, 10);
        doc.save("sample.pdf");
      });
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
  text-align: left;
  font-size: 1.2em;
  padding: 0.5em 0;
  margin: 0.5em 0;
}

u {
  text-decoration-skip-ink: none;
}

#action-buttons {
  display: flex;
  justify-content: right;
}

sup {
  font-size: 0.6em;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
}

</style>
