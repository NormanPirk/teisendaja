<template>
  <div class="intro">
    <strong>{{ $t("propLogic") }}</strong>
    <button @click="togglePropLogic()">
      <div v-if="showPropLogic">{{ $t("hide") }}</div>
      <div v-else>{{ $t("show") }}</div>
    </button>
  </div>
  <div class="conversion-btns" v-show="showPropLogic">
    <PropositionalLogicButtons></PropositionalLogicButtons>
  </div>
  <div class="intro">
    <strong>{{ $t("predicateLogic") }}</strong>
    <button @click="togglePredicateLogic()">
      <div v-if="showPredicateLogic">{{ $t("hide") }}</div>
      <div v-else>{{ $t("show") }}</div>
    </button>
  </div>
  <div class="conversion-btns" v-show="showPredicateLogic">
    <PredicateLogicButtons></PredicateLogicButtons>
  </div>
</template>

<script>
import PropositionalLogicButtons from "./PropositionalLogicButtons.vue";
import PredicateLogicButtons from "./PredicateLogicButtons.vue";

export default {
  name: "ConversionButtons",
  data() {
    return {
      showPropLogic: true,
      showPredicateLogic: true,
    };
  },
  components: {
    PropositionalLogicButtons,
    PredicateLogicButtons,
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
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
