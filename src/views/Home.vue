<template>
  <div class="home">
    <div id="nav">
      <h3>{{ $t("title") }}</h3>
      <!-- <router-link to="/">Home</router-link> -->
      <button @click="toggleHelp()" class="yellow">
        <div v-show="this.showHelp">{{ $t("hideHelp") }}</div>
        <div v-show="!this.showHelp">{{ $t("showHelp") }}</div>
      </button>
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
    return {}
  },
  computed: {
    showHelp: {
      get() {
        return this.$store.getters.showHelp;
      } 
    }
  },
  components: {
    Main
  },
  methods: {
    toggleHelp() {
      this.$store.commit("toggleHelp");
    }
  }
};
</script>

<style scoped>

#nav {
  display: flex;
  justify-content: space-between;
  padding-right: 2.5em;
  align-items: center;
}

button div {
  color: rgb(247,248,249);
}

button {
  height: 2em;
}

</style>
