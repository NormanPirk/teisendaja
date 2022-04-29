<template>
  <div id="action-buttons">
    <button
      @click="download('JSON')"
      v-tooltip="$t('downloadJSON') + ' (Ctrl+J)'"
      data-cy="downloadJSON"
      v-bind:disabled="disableBtn"
    >
      <i class="fa-solid fa-download"></i>
      <div>JSON</div>
    </button>
    <button
      @click="download('TEX')"
      v-tooltip="$t('downloadTEX') + ' (Ctrl+X)'"
      data-cy="downloadTEX"
      v-bind:disabled="disableBtn"
    >
      <i class="fa-solid fa-download"></i>
      <div>TeX</div>
    </button>
    <button
      @click="download('PDF')"
      v-tooltip="$t('downloadPDF') + ' (Ctrl+P)'"
      data-cy="downloadPDF"
      v-bind:disabled="disableBtn"
    >
      <i class="fa-solid fa-download"></i>
      <div>PDF</div>
    </button>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import isValidFilename from "@/js/FilenameValidator.js";
import vfs_fonts from "@/assets/fonts/vfs_fonts.json";
import pdfMake from "pdfmake/build/pdfmake.js";
pdfMake.vfs = vfs_fonts.vfs;

export default {
  name: "Downloaders",
  data() {
    return {};
  },
  mounted() {
    document.addEventListener("keydown", this.downloadShorcuts);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.downloadShorcuts);
  },
  computed: {
    formulas: {
      get() {
        return this.$store.getters.formulas;
      },
    },
    disableBtn() {
      return this.formulas.length === 0;
    },
  },
  methods: {
    getFilenameFromUser() {
      return new Promise((resolve) => {
        document.getElementById("add-filename").onclick = () => {
          let filename = this.$store.getters.filename;
          if (isValidFilename(filename)) {
            resolve(filename);
          } else {
            this.$store.dispatch("setError", "invalidFilename");
          }
        };
      });
    },
    async download(type) {
      try {
        this.$store.commit("setAskFilenameTrue");
        this.$nextTick(() => {
          document.getElementById("new-filename").focus();
        });
        const fn = await this.getFilenameFromUser();
        switch (type) {
          case "JSON":
            this.downloadJSON(fn);
            break;
          case "TEX":
            this.downloadTEX(fn);
            break;
          case "PDF":
            this.downloadPDF(fn);
            break;
        }
        this.$store.commit("clearFilename");
        this.$store.commit("hideFilenamePrompt");
      } catch (error) {
        console.log(error);
        this.$store.dispatch("setError", "invalidFilename");
      }
    },
    getContentForPDF() {
      const content = [];
      for (let [i, f] of this.formulas.entries()) {
        content.push(f.getPDFContent(i !== 0));
      }
      return content;
    },
    downloadJSON(filename) {
      const content = JSON.stringify(this.formulas);
      let blob = new Blob([content], {
        type: "application/json;charset=utf-8",
      });
      saveAs(blob, filename + ".json");
    },
    downloadTEX(filename) {
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
      saveAs(blob, filename + ".tex");
    },
    downloadPDF(filename) {
      pdfMake.fonts = {
        NotoSansMath: {
          normal: "NotoSansMath-Regular.ttf",
          bold: "NotoSansMath-Regular.ttf",
          italics: "NotoSansMath-Regular.ttf",
          bolditalics: "NotoSansMath-Regular.ttf",
        },
      };
      let dd = {
        content: this.getContentForPDF(),
        defaultStyle: {
          font: "NotoSansMath",
          fontSize: 14,
        },
        styles: {
          small: {
            fontSize: 8,
          },
        },
      };
      pdfMake.createPdf(dd).download(filename + ".pdf");
    },
    downloadShorcuts(e) {
      if (e.ctrlKey || e.metaKey) {
        switch (e.keyCode) {
          case 74:
            e.preventDefault();
            this.download("JSON");
            break;
          case 88:
            e.preventDefault();
            this.download("TEX");
            break;
          case 80:
            e.preventDefault();
            this.download("PDF");
            break;
          default:
            return;
        }
      }
    },
  },
};
</script>

<style scoped>
#pdf {
  min-height: 4em;
  overflow-wrap: break-word;
  overflow-y: scroll;
  max-height: 30em;
  font-size: 1em;
}

#pdf div {
  text-align: left;
  padding: 0.4em 0;
}

#last {
  min-height: 3em;
  overflow-wrap: break-word;
  text-align: left;
  font-size: 1.2em;
  padding: 0.5em 0;
  margin: 0.5em 0;
}

.fit {
  width: 100%;
  margin: 0;
  padding: 0;
}

u {
  text-decoration-skip-ink: none;
}

#action-buttons {
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  align-items: center;
}

button {
  display: flex;
  align-items: center;
}

button * {
  margin: 0 0.3em;
}

sup {
  font-size: 0.7em;
}

::-webkit-scrollbar {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(204, 204, 204);
}

button:disabled:hover {
  transform: scale(1);
}

button:disabled {
  box-shadow: none;
  background-color: rgb(227, 228, 229);
}
</style>