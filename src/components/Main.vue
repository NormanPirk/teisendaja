<template>
  <div id="editor">
    <div id="editor-left">
      <div class="shadow">
        <UserInput></UserInput>
        <ConversionButtons></ConversionButtons>
        <DeleteButtons></DeleteButtons>
        <hr>
        <Help></Help>
      </div>
    </div>

    <div id="editor-right">
      <Output></Output>
    </div>
  <ModalPrompt v-show="askNewFormula"></ModalPrompt>
  </div>
</template>

<script>
/* eslint-disable */
import ConversionButtons from "./ConversionButtons.vue";
import DeleteButtons from "./DeleteButtons.vue";
import Output from "./Output.vue";
import UserInput from "./UserInput.vue";
import Help from "./Help.vue";
import ModalPrompt from "./ModalPrompt.vue";

export default {
  name: "Main",
  data() {
    return {}
  },
  components: {
    ConversionButtons,
    DeleteButtons,
    Output,
    Help,
    UserInput,
    ModalPrompt
  },
  computed: {
    askNewFormula: {
      get() {
        return this.$store.getters.askNewFormula;
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
  width: 90%;
  margin: auto;
  border: none !important;
}
#editor div {
  min-height: 1em;
}

#editor-left {
  width: 50%;
  margin-right: 0.5em;
}
#editor-right {
  width: 50%;
  margin-left: 0.5em;
}

</style>
