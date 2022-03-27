<template>
  <strong v-show="noInput" class="error">{{ $t("noInput") }}</strong>
  <strong v-show="faultyInput" class="error">{{ $t("faultyInput") }}</strong>
  <strong v-show="notSubformula" class="error">{{
    $t("notSubformula")
  }}</strong>
  <strong v-show="faultyConversion" class="error">{{
    $t("faultyConversion", { conversion: this.selectedConversion })
  }}</strong>
  <strong v-show="noSubformula" class="error">{{ $t("noSubformula") }}</strong>
  <strong v-show="conversionNotAllowed" class="error">{{
    $t("conversionNotAllowed", { conversion: this.selectedConversion })
  }}</strong>
  <strong v-show="inputFileError" class="error">{{
    $t("inputFileError")
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
    selectedConversion: {
      get() {
        return this.$store.getters.selectedConversion;
      }
    }
  },
};
</script>

<style></style>
