<template>
  <div>
    <button @click="removeLast">{{ $t("deleteLast") }}</button>
    <button @click="removeAll">{{ $t("deleteAll") }}</button>
  </div>
</template>

<script>
export default {
  name: "DeleteButtons",
  data() {
    return {};
  },
  methods: {
    removeLast() {
      this.$store.commit("removeLast");
      this.$store.commit("clearErrors");
    },
    removeAll() {
      this.$store.commit("removeAll");
      this.$store.commit("clearErrors");
    },
  },
};
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
}
button {
    width: 17em;
}
</style>