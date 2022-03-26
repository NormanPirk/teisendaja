<template>
  <div class="intro conv-intro" @click="togglePropLogic()">
    <div>{{ $t("propLogic") }}</div>
    <div>
      <div v-if="showPropLogic" v-tooltip="$t('hide')">
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div v-else v-tooltip="$t('show')">
        <i class="fa-solid fa-angle-left"></i>
      </div>
    </div>
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
  <div class="intro conv-intro" @click="togglePredicateLogic()">
    <div>{{ $t("predicateLogic") }}</div>
    <div>
      <div
        v-if="showPredicateLogic"
        v-tooltip="{ text: $t('hide'), theme: { placement: 'bottom' } }"
      >
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div
        v-else
        v-tooltip="{
          text: $t('show'),
          theme: { placement: 'bottom' },
        }"
      >
        <i class="fa-solid fa-angle-left"></i>
      </div>
    </div>
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

.conv-intro {
  margin: 1em 0;
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
