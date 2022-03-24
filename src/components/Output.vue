<template>
  <div class="shadow">
    <div class="intro">
      <div>{{ $t("conversions") }}</div>
    </div>
    <div id="action-buttons">
      <button @click="downloadJSON" v-tooltip="$t('downloadJSON')">
        <i class="fa-solid fa-download"></i><div>JSON</div>
      </button>
      <button @click="downloadTEX" v-tooltip="$t('downloadTEX')">
        <i class="fa-solid fa-download"></i><div>TeX</div>
      </button>
      <button @click="downloadPDF" v-tooltip="$t('downloadPDF')">
        <i class="fa-solid fa-download"></i><div>PDF</div>
      </button>
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
          >{{ formula.getEnding()
          }}<sup v-if="formula.ct">&nbsp;&nbsp;&nbsp;{{ formula.ct }}</sup>
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
    downloadJSON() {
      const content = JSON.stringify(this.formulas);
      console.log(content);
      let blob = new Blob([content], {
        type: "application/json;charset=utf-8",
      });
      saveAs(blob, "sample.json");
    },
    downloadTEX() {
      let content =
        "\\documentclass{article}\n\\usepackage{amsmath}\n\\begin{document}\n\\begin{align*}\n";
      for (let [i, formula] of this.formulas.entries()) {
        if (i === 0) {
          content += "&" + formula.toTex() + "\\\\\n";
        } else {
          content += "&\\equiv " + formula.toTex() + "\\\\\n";
        }
      }
      content += "\\end{align*}\n\\end{document}";
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
  overflow: scroll;
  max-height: 30em;
  font-size: 1em;
}

#pdf div {
  text-align: left;
  padding: 0.4em 0;
}

#last {
  min-height: 3em;
  overflow-x: scroll;
  text-align: left;
  font-size: 1em;
  padding: 0.5em 0;
  margin: 0.5em 0;
}

u {
  text-decoration-skip-ink: none;
}

#action-buttons {
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
}

button {
  display: flex;
  align-items: center;
}

button * {
  margin: 0 0.3em;
}

sup {
  font-size: 0.5em;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(204, 204, 204);
}
</style>
