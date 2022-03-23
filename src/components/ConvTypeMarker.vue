<template>
<!--   <div v-if="this.convType.length === 4">
    {{ this.convType }}
  </div> -->
  <div>
    {{ this.convType }}
  </div>
</template>

<script>
export default {
  name: "ConvTypeMarker",
  props: ["convType"],
  data() {
    return {};
  },
};
</script>

<style>
</style>
