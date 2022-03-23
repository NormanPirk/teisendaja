<template>
  <div class="intro">
    <strong>{{ $t("propLogic") }}</strong>
    <button @click="togglePropLogic()">
      <div v-if="showPropLogic">{{ $t("hide") }}</div>
      <div v-else>{{ $t("show") }}</div>
    </button>
  </div>
  <div class="conversion-btns" v-show="showPropLogic">
    <ConvButton
      v-for="btnText in propBtnTexts"
      :key="btnText.conversionTypeL"
      :left="btnText.left"
      :right="btnText.right"
      :conversionTypeL="btnText.conversionTypeL"
      :conversionTypeR="btnText.conversionTypeR"
    ></ConvButton>
  </div>
  <div class="intro">
    <strong>{{ $t("predicateLogic") }}</strong>
    <button @click="togglePredicateLogic()">
      <div v-if="showPredicateLogic">{{ $t("hide") }}</div>
      <div v-else>{{ $t("show") }}</div>
    </button>
  </div>
  <div class="conversion-btns" v-show="showPredicateLogic">
    <ConvButton
      v-for="btnText in predBtnTexts"
      :key="btnText.conversionTypeL"
      :left="btnText.left"
      :right="btnText.right"
      :conversionTypeL="btnText.conversionTypeL"
      :conversionTypeR="btnText.conversionTypeR"
    ></ConvButton>
  </div>
</template>

<script>
import ConvButton from "./ConvButton.vue";
import PropBtnTexts from "@/assets/propLogicButtonTexts.json";
import PredBtnTexts from "@/assets/predLogicButtonTexts.json";

export default {
  name: "ConversionButtons",
  data() {
    return {
      showPropLogic: true,
      showPredicateLogic: true,
      propBtnTexts: PropBtnTexts,
      predBtnTexts: PredBtnTexts,
    };
  },
  components: {
    ConvButton,
  },
  methods: {
    togglePropLogic() {
      this.showPropLogic = !this.showPropLogic;
    },
    togglePredicateLogic() {
      this.showPredicateLogic = !this.showPredicateLogic;
    },
  },
};
</script>

<style scoped>
.conversion-btns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
}

.conversion-btns div {
  flex: 0 0 47%;
}

</style>
