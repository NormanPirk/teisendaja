<template>
  <strong class="error" data-cy="error-message">{{ errorMessage }}</strong>
</template>

<script>
export default {
  name: "ErrorMessages",
  props: ["type"],
  data() {
    return {};
  },
  computed: {
    errorMessage: {
      get() {
        const err = this.$store.getters.error;
        if (err && err.type === this.type) {
          return err.message;
        }
        return "";
      },
    },
  },
};
</script>

<style></style>
