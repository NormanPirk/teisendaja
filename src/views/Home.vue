<template>
  <div class="home">
    <div id="nav">
      <h3 data-cy="title">{{ $t("title") }}</h3>
      <a href="#help" id="main">
        <button @click="toggleHelp()" class="yellow" data-cy="showHelpBtn">
        <div v-show="this.showHelp">{{ $t("hideHelp") }}</div>
        <div v-show="!this.showHelp">{{ $t("showHelp") }}</div>
      </button>
      </a>
    </div>
    <Main></Main>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  title: "Loogikavalemite teisendaja",
  data() {
    return {};
  },
  computed: {
    showHelp: {
      get() {
        return this.$store.getters.showHelp;
      },
    },
  },
  components: {
    Main,
  },
  methods: {
    toggleHelp() {
      this.$store.commit("toggleHelp");
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5em 0 1em;
}

button div {
  color: rgb(247, 248, 249);
}

button {
  height: 2em;
}

</style>
