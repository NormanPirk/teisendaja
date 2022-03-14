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