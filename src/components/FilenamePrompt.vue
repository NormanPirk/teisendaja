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
        <input
          @click="clearFilenameError"
          type="text"
          v-model="filename"
          id="new-filename"
          :placeholder="$t('fileNamePlaceholder')"
        />
        <strong v-show="invalidFilename" class="error">{{
          $t("invalidFilename")
        }}</strong>
      </div>
      <div class="confirm-btns">
        <button @click="cancelDownload">{{ $t("cancel") }}</button>
        <button id="add-filename">{{ $t("ready") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import forbiddenChars from "@/assets/illegalCharacters.json";

export default {
  name: "FilenamePrompt",
  data() {
    return {
      forbiddenChars: forbiddenChars.symbols,
    };
  },
  computed: {
    invalidFilename: {
      get() {
        return this.$store.getters.invalidFilename;
      },
    },
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
      this.$store.commit("clearFilename");
      this.$store.commit("clearInvalidFilenameError");
      this.$store.commit("hideFilenamePrompt");
    },
    clearFilenameError() {
      this.$store.commit("clearInvalidFilenameError");
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
