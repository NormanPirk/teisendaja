<template>
    <div class="small">
      <ConvButton
        left="\mathcal{F}"
        right="(\mathcal{F})"
        conversionTypeL="LS0_1"
        conversionTypeR="LS_2"
      ></ConvButton>
      <ConvButton
        left="\neg \neg \mathcal{F}"
        right="\mathcal{F}"
        conversionTypeL="LS23_1"
        conversionTypeR="LS23_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land \mathcal{F}"
        right="\mathcal{F}"
        conversionTypeL="LS1_1"
        conversionTypeR="LS1_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{F}"
        right="\mathcal{F}"
        conversionTypeL="LS2_1"
        conversionTypeR="LS2_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land 1"
        right="\mathcal{F}"
        conversionTypeL="LS19_1"
        conversionTypeR="LS19_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor 1"
        right="1"
        conversionTypeL="LS20_1"
        conversionTypeR="LS20_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land 0"
        right="0"
        conversionTypeL="LS21_1"
        conversionTypeR="LS21_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor 0"
        right="\mathcal{F}"
        conversionTypeL="LS22_1"
        conversionTypeR="LS22_2"
      ></ConvButton>
    </div>
    <div class="medium">
      <ConvButton
        left="\mathcal{F} \land \mathcal{G}"
        right="\mathcal{G} \land \mathcal{F}"
        conversionTypeL="LS3"
        conversionTypeR="LS3"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G}"
        right="\mathcal{G} \lor \mathcal{F}"
        conversionTypeL="LS4"
        conversionTypeR="LS4"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Leftrightarrow \mathcal{G}"
        right="\mathcal{G} \Leftrightarrow \mathcal{F}"
        conversionTypeL="LS24"
        conversionTypeR="LS24"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land (\mathcal{F} \lor \mathcal{G})"
        right="\mathcal{F}"
        conversionTypeL="LS7_1"
        conversionTypeR="LS7_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{F} \land \mathcal{G}"
        right="\mathcal{F}"
        conversionTypeL="LS8_1"
        conversionTypeR="LS8_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land \mathcal{G}"
        right="\neg (\mathcal{F} \Rightarrow \mathcal{G})"
        conversionTypeL="LS15_1"
        conversionTypeR="LS15_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G}"
        right="\neg \mathcal{F} \Rightarrow \mathcal{G}"
        conversionTypeL="LS16_1"
        conversionTypeR="LS16_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Rightarrow \mathcal{G}"
        right="\neg (\mathcal{F} \land \neg \mathcal{G})"
        conversionTypeL="LS13_1"
        conversionTypeR="LS13_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Rightarrow \mathcal{G}"
        right="\neg \mathcal{F} \lor \mathcal{G}"
        conversionTypeL="LS14_1"
        conversionTypeR="LS14_2"
      ></ConvButton>
    </div>
    <div class="large">
      <ConvButton
        left="\neg(\mathcal{F} \land \mathcal{G})"
        right="\neg \mathcal{F} \lor \neg \mathcal{G}"
        conversionTypeL="LS11_1"
        conversionTypeR="LS11_2"
      ></ConvButton>
      <ConvButton
        left="\neg(\mathcal{F} \lor \mathcal{G})"
        right="\neg \mathcal{F} \land \neg \mathcal{G}"
        conversionTypeL="LS12_1"
        conversionTypeR="LS12_2"
      ></ConvButton>
      <ConvButton
        left="(\mathcal{F} \land \mathcal{G}) \land \mathcal{H}"
        right="\mathcal{F} \land (\mathcal{G} \land \mathcal{H})"
        conversionTypeL="LS5_1"
        conversionTypeR="LS5_2"
      ></ConvButton>
      <ConvButton
        left="(\mathcal{F} \lor \mathcal{G}) \lor \mathcal{H}"
        right="\mathcal{F} \lor (\mathcal{G} \lor \mathcal{H})"
        conversionTypeL="LS6_1"
        conversionTypeR="LS6_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Leftrightarrow \mathcal{G}"
        right="\mathcal{F} \land \mathcal{G} \lor \neg \mathcal{F} \land \neg \mathcal{G}"
        conversionTypeL="LS17_1"
        conversionTypeR="LS17_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \Leftrightarrow \mathcal{G}"
        right="(\mathcal{F} \Rightarrow \mathcal{G}) \land (\mathcal{G} \Rightarrow \mathcal{F})"
        conversionTypeL="LS18_1"
        conversionTypeR="LS18_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \land (\mathcal{G} \lor \mathcal{H})"
        right="\mathcal{F} \land \mathcal{G} \lor \mathcal{F} \land \mathcal{H}"
        conversionTypeL="LS9_1"
        conversionTypeR="LS9_2"
      ></ConvButton>
      <ConvButton
        left="\mathcal{F} \lor \mathcal{G} \land \mathcal{H}"
        right="(\mathcal{F} \lor \mathcal{G}) \land (\mathcal{F} \lor \mathcal{H})"
        conversionTypeL="LS10_1"
        conversionTypeR="LS10_2"
      ></ConvButton>
    </div>
  
</template>

<script>
import ConvButton from "./ConvButton.vue";

export default {
    name: "PropositionalLogicButtons",
    data() {
        return {}
    },
    components: {
        ConvButton
    }

}
</script>

<style scoped>

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