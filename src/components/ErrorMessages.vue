<template>
  <strong v-show="noInput" class="error" data-cy="no-input-error">{{ $t("noInput") }}</strong>
  <strong v-show="faultyInput" class="error" data-cy="faulty-input-error">{{ $t("faultyInput") }}</strong>
  <strong v-show="notSubformula" class="error" data-cy="not-subformula-error">{{
    $t("notSubformula")
  }}</strong>
  <strong v-show="faultyConversion" class="error" data-cy="faulty-conv-error">{{
    $t("faultyConversion", { conversion: this.selectedConversion })
  }}</strong>
  <strong v-show="noSubformula" class="error" data-cy="no-subformula-error">{{ $t("noSubformula") }}</strong>
  <strong v-show="conversionNotAllowed" class="error" data-cy="not-allowed-error">{{
    $t("conversionNotAllowed", { conversion: this.selectedConversion })
  }}</strong>
  <strong v-show="inputFileError" class="error">{{
    $t("inputFileError")
  }}</strong>
  <strong v-show="selectionNotFromCorrectField" class="error" data-cy="selectionNotFromCorrectField">{{
    $t("selectionNotFromCorrectField")
  }}</strong>
</template>

<script>
export default {
  name: "ErrorMessages",
  data() {
    return {};
  },
  computed: {
    noInput: {
      get() {
        return this.$store.getters.noInput;
      },
    },
    faultyInput: {
      get() {
        return this.$store.getters.faultyInput;
      },
    },
    notSubformula: {
      get() {
        return this.$store.getters.notSubformula;
      },
    },
    faultyConversion: {
      get() {
        return this.$store.getters.faultyConversion;
      },
    },
    noSubformula: {
      get() {
        return this.$store.getters.noSubformula;
      },
    },
    conversionNotAllowed: {
      get() {
        return this.$store.getters.conversionNotAllowed;
      },
    },
    inputFileError: {
      get() {
        return this.$store.getters.inputFileError;
      },
    },
    selectionNotFromCorrectField: {
      get() {
        return this.$store.getters.selectionNotFromCorrectField;
      }
    },
    selectedConversion: {
      get() {
        return this.$store.getters.selectedConversion;
      },
    },
  },
};
</script>

<style></style>
