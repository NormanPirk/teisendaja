<template>
  <div class="home">
    <Input></Input>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/UserInput.vue";

export default {
  name: "Home",
  title: "Loogikavalemite teisendaja",
  components: {
    Input,
  }
};
</script>