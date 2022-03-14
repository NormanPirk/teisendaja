<template>
    <div class="small">
      <ConvButton
        left="\neg \forall x \mathcal{F}(x)"
        right="\exists x \neg \mathcal{F}(x)"
        conversionTypeL="PS1_11"
        conversionTypeR="PS1_12"
      ></ConvButton>
      <ConvButton
        left="\neg \exists x \mathcal{F}(x)"
        right="\forall x \neg \mathcal{F}(x)"
        conversionTypeL="PS1_21"
        conversionTypeR="PS1_22"
      ></ConvButton>
      <ConvButton
        left="\forall x (\mathcal{F}(x) \land \mathcal{G}(x))"
        right="\forall x \mathcal{F}(x) \land \forall x \mathcal{G}(x)"
        conversionTypeL="PS2_11"
        conversionTypeR="PS2_21"
      ></ConvButton>
      <ConvButton
        left="\exists x (\mathcal{F}(x) \lor \mathcal{G}(x))"
        right="\exists x \mathcal{F}(x) \lor \forall x \mathcal{G}(x)"
        conversionTypeL="PS2_12"
        conversionTypeR="PS2_22"
      ></ConvButton>
      <ConvButton
        left="\forall x \forall y \mathcal{F}(x, y)"
        right="\forall y \forall x \mathcal{F}(x, y)"
        conversionTypeL="PS6_1"
        conversionTypeR="PS6_1"
      ></ConvButton>
      <ConvButton
        left="\exists x \exists y \mathcal{F}(x, y)"
        right="\exists y \exists x \mathcal{F}(x, y)"
        conversionTypeL="PS6_2"
        conversionTypeR="PS6_2"
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