<template>
  <div class="intro conv-intro">
    <div>{{ $t("propLogic") }}</div>
  </div>
  <div class="conversion-btns">
    <div class="col">
      <ConvButton v-for="btnText in propBtnTexts[0]" :key="btnText.conversionTypeL" :left="btnText.left" :right="btnText.right" :conversionTypeL="btnText.conversionTypeL" :conversionTypeR="btnText.conversionTypeR"></ConvButton>
    </div>
    <div class="col">
      <ConvButton v-for="btnText in propBtnTexts[1]" :key="btnText.conversionTypeL" :left="btnText.left" :right="btnText.right" :conversionTypeL="btnText.conversionTypeL" :conversionTypeR="btnText.conversionTypeR"></ConvButton>
    </div>
    <div class="col">
      <ConvButton v-for="btnText in propBtnTexts[2]" :key="btnText.conversionTypeL" :left="btnText.left" :right="btnText.right" :conversionTypeL="btnText.conversionTypeL" :conversionTypeR="btnText.conversionTypeR"></ConvButton>
    </div>
  </div>
</template>

<script>
import ConvButton from "./ConvButton.vue";
import PropBtnTexts from "@/assets/propLogicButtonTexts.json";

export default {
  name: "PropButtons",
  data() {
    return {
      propBtnTexts: PropBtnTexts,
    };
  },
  components: {
    ConvButton,
  },
};
</script>

<style scoped>
.conversion-btns {
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
  margin-bottom: 1em;
}
.col {
  width: 33%;
}

.col div {
  width: 100%;
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
