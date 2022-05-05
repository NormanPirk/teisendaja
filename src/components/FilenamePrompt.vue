<template>
  <div class="background">
    <div
      class="foreground"
      id="filename-prompt"
      v-tooltip="{
        text: $t('forbiddenChars', { symbols: this.forbiddenChars.toString() }),
        theme: { 'font-size': '1em' },
      }"
    >
      <div class="intro">
        <div>{{ $t("insertFilename") }}</div>
      </div>
      <div id="input-err-div">
        <input @click="clearError" @input="clearError" type="text" v-model="filename" id="new-filename" data-cy="new-filename" :placeholder="$t('fileNamePlaceholder')" @keyup.enter="pressReady" />
      </div>
      <div class="confirm-btns">
        <button @click="cancelDownload" data-cy="cancel-download">
          {{ $t("cancel") }}
        </button>
        <button id="add-filename" data-cy="confirm-download">
          {{ $t("ready") }}
        </button>
      </div>
      <div class="error-message-div">
        <ErrorMessages type="2"></ErrorMessages>
      </div>
    </div>
  </div>
</template>

<script>
import forbiddenChars from "@/assets/illegalCharacters.json";
import ErrorMessages from "./ErrorMessages.vue";

export default {
  name: "FilenamePrompt",
  data() {
    return {
      forbiddenChars: forbiddenChars.symbols,
    };
  },
  components: {
    ErrorMessages,
  },
  computed: {
    filename: {
      get() {
        return this.$store.getters.filename;
      },
      set(value) {
        this.$store.commit("setFilename", value);
      },
    },
  },
  methods: {
    cancelDownload() {
      this.$store.commit("restoreDefaultFilename");
      this.clearError();
      this.$store.commit("hideFilenamePrompt");
    },
    clearError() {
      this.$store.commit("clearErrors");
    },
    pressReady() {
      document.getElementById("add-filename").click();
    },
  },
};
</script>

<style scoped>
input {
  width: 40%;
  border: none;
  outline: none;
  text-align: left !important;
  vertical-align: middle !important;
  margin: 1em 0;
  font-size: 1em;
}

#filename-prompt {
  width: 35%;
  height: 11em;
}

#input-err-div {
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}
</style>
