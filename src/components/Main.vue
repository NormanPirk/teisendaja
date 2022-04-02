<template>
  <div id="editor">
    <div id="editor-left">
      <div class="shadow">
        <UserInput></UserInput>
        <ConversionButtons></ConversionButtons>
      </div>
    </div>

    <div id="editor-right">
      <Help v-show="this.showHelp"></Help>
      <Output></Output>
    </div>
    <NewSubformulaPrompt v-show="askNewFormula"></NewSubformulaPrompt>
    <FilenamePrompt v-show="askFilename"></FilenamePrompt>
  </div>
</template>

<script>
/* eslint-disable */
import ConversionButtons from "./ConversionButtons.vue";
import Output from "./Output.vue";
import UserInput from "./UserInput.vue";
import Help from "./Help.vue";
import NewSubformulaPrompt from "./NewSubformulaPrompt.vue";
import FilenamePrompt from "./FilenamePrompt.vue";

export default {
  name: "Main",
  data() {
    return {}
  },
  components: {
    ConversionButtons,
    Output,
    Help,
    UserInput,
    NewSubformulaPrompt,
    FilenamePrompt
  },
  computed: {
    askNewFormula: {
      get() {
        return this.$store.getters.askNewFormula;
      }
    },
    askFilename: {
      get() {
        return this.$store.getters.askFilename;
      }
    },
    showHelp: {
      get() {
        return this.$store.getters.showHelp;
      }
    }
  }
};
</script>

<style scoped>


#editor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 95%;
  margin: auto;
  border: none !important;
}
#editor div {
  min-height: 1em;
}

#editor-left {
  width: 55%;
  margin-right: 0.5em;
}
#editor-right {
  width: 45%;
  margin-left: 0.5em;
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
  transition: opacity 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
