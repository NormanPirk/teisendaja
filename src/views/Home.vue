<template>
  <div class="home">
    <UserInput></UserInput>
  </div>
</template>

<script>
// @ is an alias to /src
import UserInput from "@/components/UserInput.vue";

export default {
  name: "Home",
  title: "Loogikavalemite teisendaja",
  components: {
    UserInput,
  }
};
</script>