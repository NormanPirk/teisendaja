<template>
  <div class="background">
    <div class="foreground">
      <div class="intro">
        <div>{{ $t('deleteAllConfirmation') }}</div>
      </div>
      <div id="confirm-btns">
        <button id="delete-all-confirm" data-cy="confirm-delete-all">{{ $t('yes') }}</button>
        <button @click="cancelDeletion" data-cy="cancel-delete-all">{{ $t('no') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteAllConfirmationPrompt",
  data() {
    return {};
  },
  methods: {
    cancelDeletion() {
        this.$store.commit("hideDeleteAllConfirmation");
    }
  },
};
</script>

<style scoped>
#confirm-btns {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-bottom: 1em;
}

button {
  width: 30%;
}

button:focus {
    border: solid 1px rgb(252, 74, 74);
    outline: none;
}

.foreground {
  width: fit-content;
  height: fit-content;
}
</style>