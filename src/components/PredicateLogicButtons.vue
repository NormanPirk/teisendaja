<template>
    <div class="small">
      <ConvButton
        left="\neg \forall x \mathcal{F}(x)"
        right="\exists x \neg \mathcal{F}(x)"
        conversionTypeL="PS1_1"
        conversionTypeR="PS1_2"
      ></ConvButton>
      <ConvButton
        left="\neg \exists x \mathcal{F}(x)"
        right="\forall x \neg \mathcal{F}(x)"
        conversionTypeL="PS1_1"
        conversionTypeR="PS1_2"
      ></ConvButton>
      <ConvButton
        left="\forall x (\mathcal{F}(x) \land \mathcal{G}(x))"
        right="\forall x \mathcal{F}(x) \land \forall x \mathcal{G}(x)"
        conversionTypeL="PS2_1"
        conversionTypeR="PS2_2"
      ></ConvButton>
      <ConvButton
        left="\exists x (\mathcal{F}(x) \lor \mathcal{G}(x))"
        right="\exists x \mathcal{F}(x) \lor \forall x \mathcal{G}(x)"
        conversionTypeL="PS2_1"
        conversionTypeR="PS2_2"
      ></ConvButton>
    </div>
  
</template>

<script>
import ConvButton from "./ConvButton.vue";

export default {
    name: "PredicateLogicButtons",
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