<template>
  <div class="home">
    <div id="nav">
      <h3 data-cy="title">{{ $t("title") }}</h3>
      <a :href="getLink()" id="main">
        <button
          @click="toggleHelp()"
          class="yellow"
          ref="showHelpBtn"
          data-cy="showHelpBtn"
          v-tooltip="{
            text: 'Ctrl+H',
            theme: { placement: 'bottom' },
          }"
        >
          <div v-show="this.showHelp">{{ $t("hideHelp") }}</div>
          <div v-show="!this.showHelp">{{ $t("showHelp") }}</div>
        </button>
      </a>
    </div>
    <Main></Main>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  title: "Loogikavalemite teisendaja",
  data() {
    return {};
  },
  components: {
    Main,
  },
  mounted() {
    document.addEventListener("keydown", this.helpShortcut);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.helpShortcut);
  },
  computed: {
    showHelp: {
      get() {
        return this.$store.getters.showHelp;
      },
    },
  },
  methods: {
    toggleHelp() {
      this.$store.commit("toggleHelp");
    },
    helpShortcut(e) {
      if (!((e.ctrlKey || e.metaKey) && e.keyCode === 72)) {
        return;
      }
      e.preventDefault();
      this.$refs.showHelpBtn.click();
    },
    getLink() {
      if (this.showHelp) {
        return "#main";
      }
      return "#help";
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5em;
}

button div {
  color: rgb(247, 248, 249);
}

button {
  height: 2em;
  margin: 0;
}
</style>
