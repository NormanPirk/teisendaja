<template>
  <div>
    <button @click="removeLast" v-tooltip="$t('deleteLast') + ' (Ctrl+Z)'" data-cy="deleteLast">
      <i class="fa-solid fa-delete-left"></i>
    </button>
    <div>
      <button @click="removeAll" v-tooltip="$t('deleteAll') + ' (Ctrl+D)'" data-cy="deleteAll">
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
    document.addEventListener("keydown", this.deleteShortcuts);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.deleteShortcuts);
  },
  methods: {
    getDeletAllConfirmation() {
      return new Promise((resolve) => {
        const button = document.getElementById("delete-all-confirm");
        button.onclick = () => {
          resolve(true);
        };
      });
    },
    removeLast() {
      this.$store.commit("removeLast");
      this.$store.commit("clearErrors");
    },
    async removeAll() {
      this.$store.commit("setAskDeleteAllConfirmation");
      this.$nextTick(() => {
        document.getElementById("delete-all-confirm").focus();
      });
      const del = await this.getDeletAllConfirmation();
      if (del) {
        this.$store.commit("removeAll");
        this.$store.commit("clearErrors");
        this.$store.commit("hideDeleteAllConfirmation");
      }
    },
    deleteShortcuts(e) {
      if (e.ctrlKey || e.metaKey) {
        switch (e.keyCode) {
          case 90:
            e.preventDefault();
            this.removeLast();
            break;
          case 68:
            e.preventDefault();
            this.removeAll();
            break;
          default:
            return;
        }
      }
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
