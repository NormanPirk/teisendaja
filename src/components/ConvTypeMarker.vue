<template>
  <div>
      {{ this.convType }}
  </div>
</template>

<script>
export default {
    name: "ConvTypeMarker",
    props: ["convType"],
    data() {
        return {}
    }

}
</script>

<style scoped>

div {
    color: #585858;
    font-size: 0.8em;
    font-weight: bold;
    width: fit-content;
    height: fit-content;
    padding: 0.2em;
    margin-left: 0.2em;
}

</style>