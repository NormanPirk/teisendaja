<template>
  <div class="intro conv-intro">
    <div>{{ $t("predicateLogic") }}</div>
  </div>
  <div class="conversion-btns pred">
    <ConvButton v-for="btnText in predBtnTexts" :key="btnText.conversionTypeL" :left="btnText.left" :right="btnText.right" :conversionTypeL="btnText.conversionTypeL" :conversionTypeR="btnText.conversionTypeR"></ConvButton>
  </div>
</template>

<script>
import ConvButton from "./ConvButton.vue";
import PredBtnTexts from "@/assets/predLogicButtonTexts.json";

export default {
  name: "PredButtons",
  data() {
    return {
      predBtnTexts: PredBtnTexts,
    };
  },
  components: {
    ConvButton,
  },
};
</script>

<style>
.conversion-btns {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
}

.conversion-btns div {
  flex: 0 0 31%;
}

.pred div {
  flex: 0 0 42%;
}

.conv-intro {
  margin: 0;
  justify-content: space-between;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  cursor: default;
}

.margin-right {
  margin-right: 1em;
}

button i {
  color: #2c3e50;
}
</style>
