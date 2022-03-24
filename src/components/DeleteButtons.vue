<template>
  <div>
    <button
      @click="removeLast"
      v-tooltip="{ text: $t('deleteLast'), theme: { placement: 'right' } }"
    >
      <i class="fa-solid fa-delete-left"></i>
    </button>
    <ErrorMessages></ErrorMessages>
    <button @click="removeAll" v-tooltip="$t('deleteAll')">
      <i class="fa-solid fa-trash-can red"></i>
    </button>
  </div>
</template>

<script>
import ErrorMessages from "./ErrorMessages.vue";

export default {
  name: "DeleteButtons",
  data() {
    return {};
  },
  components: {
    ErrorMessages
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
  justify-content: space-between;
}

.red {
  color: rgb(252, 74, 74);
}
</style>
