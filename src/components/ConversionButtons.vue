<template>
  <div class="shadow conv">
    <div class="intro">
      <strong>{{ $t("conversionGuide") }}</strong>
    </div>
    <hr>
    <CButton f1='\neg \neg F \equiv F' f2='F \equiv \neg \neg F'></CButton>
  </div>
</template>

<script>
import CButton from "./CButton.vue";

export default {
  name: "ConversionButtons",
  data() {
    return {};
  },
  components: {
      CButton
  },
  methods: {
    addFormula: function () {
      this.$store.commit("addFormula");
      let el = document.getElementById("selectable");
      console.log(
        el.value.toString().substring(el.selectionStart, el.selectionEnd)
      );
    },
  },
};
</script>

<style scoped>
.conv {
    margin: 2em;
}
</style>
