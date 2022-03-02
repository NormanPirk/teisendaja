<template>
<div>
  <ConvButton f1='(\mathcal{F}) \equiv \mathcal{F}'></ConvButton>
  <ConvButton f1='\mathcal{F} \land \mathcal{F} \equiv \mathcal{F}'></ConvButton>
  <ConvButton f1='\mathcal{F} \lor \mathcal{F} \equiv \mathcal{F}'></ConvButton>
</div>  
</template>

<script>
import ConvButton from "./ConvButton.vue";

export default {
  name: "ConversionButtons",
  data() {
    return {};
  },
  components: {
      ConvButton
  },
  methods: {
    addFormula: function () {
      this.$store.commit("addFormula");
    },
  },
};
</script>

<style scoped>
.conv {
    margin: 2em;
}

</style>
