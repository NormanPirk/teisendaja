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
        f1="\mathcal{F} \equiv (\mathcal{F})"
        f2="(\mathcal{F}) \equiv \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\neg \neg \mathcal{F} \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \neg \neg \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land \mathcal{F} \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \land \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor \mathcal{F} \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \lor \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land 1 \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \land 1"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor 1 \equiv 1"
        f2="1 \equiv \mathcal{F} \lor 1"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land 0 \equiv 0"
        f2="0 \equiv \mathcal{F} \land 0"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor 0 \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \lor 0"
      ></ConvButton>
    </div>
    <div class="medium">
      <ConvButton
        f1="\mathcal{F} \land \mathcal{G} \equiv \mathcal{G} \land \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor \mathcal{G} \equiv \mathcal{G} \lor \mathcal{F}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land (\mathcal{F} \lor \mathcal{G}) \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \land (\mathcal{F} \lor \mathcal{G})"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor \mathcal{F} \land \mathcal{G} \equiv \mathcal{F}"
        f2="\mathcal{F} \equiv \mathcal{F} \lor \mathcal{F} \land \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land \mathcal{G} \equiv \neg (\mathcal{F} \Rightarrow \mathcal{G})"
        f2="\neg (\mathcal{F} \Rightarrow \mathcal{G}) \equiv \mathcal{F} \land \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor \mathcal{G} \equiv \neg \mathcal{F} \Rightarrow \mathcal{G}"
        f2="\neg \mathcal{F} \Rightarrow \mathcal{G} \equiv \mathcal{F} \lor \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \Rightarrow \mathcal{G} \equiv \neg (\mathcal{F} \land \neg \mathcal{G})"
        f2="\neg (\mathcal{F} \land \neg \mathcal{G}) \equiv \mathcal{F} \Rightarrow \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \Rightarrow \mathcal{G} \equiv \neg \mathcal{F} \lor \mathcal{G}"
        f2="\neg \mathcal{F} \lor \mathcal{G} \equiv \mathcal{F} \Rightarrow \mathcal{G}"
      ></ConvButton>
    </div>
    <div class="large">
      <ConvButton
        f1="\neg(\mathcal{F} \land \mathcal{G}) \equiv \neg \mathcal{F} \lor \neg \mathcal{G}"
        f2="\neg \mathcal{F} \lor \neg \mathcal{G} \equiv \neg(\mathcal{F} \land \mathcal{G})"
      ></ConvButton>
      <ConvButton
        f1="\neg(\mathcal{F} \lor \mathcal{G}) \equiv \neg \mathcal{F} \land \neg \mathcal{G}"
        f2="\neg \mathcal{F} \land \neg \mathcal{G} \equiv \neg(\mathcal{F} \lor \mathcal{G})"
      ></ConvButton>
      <ConvButton
        f1="(\mathcal{F} \land \mathcal{G}) \land \mathcal{H} \equiv \mathcal{F} \land (\mathcal{G} \land \mathcal{H})"
        f2="\mathcal{F} \land (\mathcal{G} \land \mathcal{H}) \equiv (\mathcal{F} \land \mathcal{G}) \land \mathcal{H}"
      ></ConvButton>
      <ConvButton
        f1="(\mathcal{F} \lor \mathcal{G}) \lor \mathcal{H} \equiv \mathcal{F} \lor (\mathcal{G} \lor \mathcal{H})"
        f2="\mathcal{F} \lor (\mathcal{G} \lor \mathcal{H}) \equiv (\mathcal{F} \lor \mathcal{G}) \lor \mathcal{H}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \Leftrightarrow \mathcal{G} \equiv \mathcal{F} \land \mathcal{G} \lor \neg \mathcal{F} \land \neg \mathcal{G}"
        f2="\mathcal{F} \land \mathcal{G} \lor \neg \mathcal{F} \land \neg \mathcal{G} \equiv \mathcal{F} \Leftrightarrow \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \Leftrightarrow \mathcal{G} \equiv (\mathcal{F} \Rightarrow \mathcal{G}) \land (\mathcal{G} \Rightarrow \mathcal{F})"
        f2="(\mathcal{F} \Rightarrow \mathcal{G}) \land (\mathcal{G} \Rightarrow \mathcal{F}) \equiv \mathcal{F} \Leftrightarrow \mathcal{G}"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \land (\mathcal{G} \lor \mathcal{H}) \equiv \mathcal{F} \land \mathcal{G} \lor \mathcal{F} \land \mathcal{H}"
        f2="\mathcal{F} \land \mathcal{G} \lor \mathcal{F} \land \mathcal{H} \equiv \mathcal{F} \land (\mathcal{G} \lor \mathcal{H})"
      ></ConvButton>
      <ConvButton
        f1="\mathcal{F} \lor \mathcal{G} \land \mathcal{H} \equiv (\mathcal{F} \lor \mathcal{G}) \land (\mathcal{F} \lor \mathcal{H})"
        f2="(\mathcal{F} \lor \mathcal{G}) \land (\mathcal{F} \lor \mathcal{H}) \equiv \mathcal{F} \lor \mathcal{G} \land \mathcal{H}"
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
