<template>
  <div>
    <button
      @click="removeLast"
      v-tooltip="{ text: $t('deleteLast') + ' (Ctrl+Z)', theme: { placement: 'right' } }"
      data-cy="deleteLast"
    >
      <i class="fa-solid fa-delete-left"></i>
    </button>
    <div>
      <button
        @click="removeAll"
        v-tooltip="$t('deleteAll')"
        data-cy="deleteAll"
      >
        <i class="fa-solid fa-trash-can red"></i>
      </button>
      <Downloaders></Downloaders>
    </div>
  </div>
</template>

<script>
import Downloaders from "./Downloaders.vue";

export default {
  name: "DeleteButtons",
  data() {
    return {};
  },
  components: {
    Downloaders,
  },
  mounted() {
    document.addEventListener("keydown", this.deleteLast);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.deleteLast);
  },
  methods: {
    removeLast() {
      this.$store.commit("removeLast");
      this.$store.commit("clearErrors");
      this.$store.commit("clearSelectedConversion");
    },
    removeAll() {
      this.$store.commit("removeAll");
      this.$store.commit("clearErrors");
      this.$store.commit("clearSelectedConversion");
    },
    deleteLast(e) {
      if (!(e.keyCode === 90 && (e.ctrlKey || e.metaKey))) {
        return;
      }
      e.preventDefault();
      this.removeLast();
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.red {
  color: rgb(252, 74, 74);
}
</style>
