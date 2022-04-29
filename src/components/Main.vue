<template>
  <div id="editor">
    <div id="editor-left">
      <div class="shadow eq-height">
        <PropButtons></PropButtons>
        <PredButtons></PredButtons>
      </div>
    </div>

    <div id="editor-right">
      <div class="shadow eq-height">
        <UserInput></UserInput>
        <Output></Output>
      </div>
    </div>
    <NewSubformulaPrompt v-show="askNewFormula"></NewSubformulaPrompt>
    <FilenamePrompt v-show="askFilename"></FilenamePrompt>
    <DeleteAllConfirmationPrompt v-show="askDeleteAllConfirmation"></DeleteAllConfirmationPrompt>
  </div>
  <Help v-show="this.showHelp"></Help>
</template>

<script>
/* eslint-disable */
//import ConversionButtons from "./ConversionButtons.vue";
import Output from "./Output.vue";
import UserInput from "./UserInput.vue";
import Help from "./Help.vue";
import NewSubformulaPrompt from "./NewSubformulaPrompt.vue";
import FilenamePrompt from "./FilenamePrompt.vue";
import PropButtons from "./PropButtons.vue";
import PredButtons from "./PredButtons.vue";
import DeleteAllConfirmationPrompt from "./DeleteAllConfirmationPrompt.vue";

export default {
  name: "Main",
  data() {
    return {}
  },
  components: {
    //ConversionButtons,
    Output,
    Help,
    UserInput,
    NewSubformulaPrompt,
    FilenamePrompt,
    PropButtons,
    PredButtons,
    DeleteAllConfirmationPrompt
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
    askDeleteAllConfirmation: {
      get() {
        return this.$store.getters.askDeleteAllConfirmation;
      }
    },
    showHelp: {
      get() {
        return this.$store.getters.showHelp;
      }
    }
  },
};
</script>

<style scoped>


#editor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  border: none !important;
  height: 41em;
  max-height: 41em;
  width: 100%;
}

#editor-left {
  width: 52%;
  margin-right: 1em;
  min-width: 700px;
}
#editor-right {
  width: 45%;
  margin-left: 1em;
  min-width: 300px;
}

.eq-height {
  height: 100%;
}

</style>
