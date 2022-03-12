<template>
  <div class="intro">
    <strong>{{ $t("propLogic") }}</strong>
    <button @click="togglePropLogic()">
      <div v-if="showPropLogic">{{ $t("hide") }}</div>
      <div v-else>{{ $t("show") }}</div>
    </button>
  </div>
  <div class="conversion-btns" v-show="showPropLogic">
    <div class="small">
      <ConvButton
        left="\mathcal{F}"
        right="(\mathcal{F})"
      ></ConvButton>
      <ConvButton
        left="\neg \neg \mathcal{F}"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land \mathcal{F}"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{F}"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land 1"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor 1"
        right="1"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land 0"
        right="0"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor 0"
        right="\mathcal{F}"
      ></ConvButton>
    </div>
    <div class="medium">
      <ConvButton
        left="\mathcal{F} \land \mathcal{G}"
        right="\mathcal{G} \land \mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G}"
        right="\mathcal{G} \lor \mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land (\mathcal{F} \lor \mathcal{G})"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{F} \land \mathcal{G}"
        right="\mathcal{F}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land \mathcal{G}"
        right="\neg (\mathcal{F} \Rightarrow \mathcal{G})"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G}"
        right="\neg \mathcal{F} \Rightarrow \mathcal{G}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Rightarrow \mathcal{G}"
        right="\neg (\mathcal{F} \land \neg \mathcal{G})"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Rightarrow \mathcal{G}"
        right="\neg \mathcal{F} \lor \mathcal{G}"
      ></ConvButton>
    </div>
    <div class="large">
      <ConvButton
        left="\neg(\mathcal{F} \land \mathcal{G})"
        right="\neg \mathcal{F} \lor \neg \mathcal{G}"
      ></ConvButton>
      <ConvButton
        left="\neg(\mathcal{F} \lor \mathcal{G})"
        right="\neg \mathcal{F} \land \neg \mathcal{G}"
      ></ConvButton>
      <ConvButton
        left="(\mathcal{F} \land \mathcal{G}) \land \mathcal{H}"
        right="\mathcal{F} \land (\mathcal{G} \land \mathcal{H})"
      ></ConvButton>
      <ConvButton
        left="(\mathcal{F} \lor \mathcal{G}) \lor \mathcal{H}"
        right="\mathcal{F} \lor (\mathcal{G} \lor \mathcal{H})"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Leftrightarrow \mathcal{G}"
        right="\mathcal{F} \land \mathcal{G} \lor \neg \mathcal{F} \land \neg \mathcal{G}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Leftrightarrow \mathcal{G}"
        right="(\mathcal{F} \Rightarrow \mathcal{G}) \land (\mathcal{G} \Rightarrow \mathcal{F})"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land (\mathcal{G} \lor \mathcal{H})"
        right="\mathcal{F} \land \mathcal{G} \lor \mathcal{F} \land \mathcal{H}"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G} \land \mathcal{H}"
        right="(\mathcal{F} \lor \mathcal{G}) \land (\mathcal{F} \lor \mathcal{H})"
      ></ConvButton>
    </div>
  </div>
</template>

<script>
import ConvButton from "./ConvButton.vue";

export default {
  name: "ConversionButtons",
  data() {
    return {
      showPropLogic: true,
    };
  },
  components: {
    ConvButton,
  },
  methods: {
    togglePropLogic() {
          this.showPropLogic = !this.showPropLogic;
      },
  }
};
</script>

<style scoped>
.conversion-btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
}

.small button {
  width: 8em;
}

.medium button {
  width: 12em;
}

.large button {
  width: 18em;
}
</style>
