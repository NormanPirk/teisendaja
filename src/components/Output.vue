<template>
  <div class="fit">
    <div class="intro">
      <div>{{ $t("conversions") }}</div>
    </div>
      <div id="pdf" data-cy="completed-convs">
        <p
          v-for="(formula, index) in formulas"
          :key="formula"
          :data-cy="'line-' + index"
        >
          {{
            index === 0
              ? formula.getStart()
              : "≡" + "&nbsp;&nbsp;" + formula.getStart()
          }}<u>{{ formula.getUnderlined() }}</u
          >{{ formula.getEnding()
          }}<sup v-if="formula.ct">&nbsp;&nbsp;&nbsp;{{ formula.ct }}</sup>
        </p>
      </div>
  </div>
</template>

<script>

export default {
  name: "Output",
  data() {
    return {};
  },
  computed: {
    formulas: {
      get() {
        return this.$store.getters.formulas;
      },
    },
  },
};
</script>

<style scoped>
#pdf {
  min-height: 4em;
  overflow-wrap: break-word;
  font-size: 1em;
  overflow-y: scroll;
  height: 24em;
  scrollbar-width: none;
}

::-webkit-scrollbar { 
  display: none; 
}

#last {
  min-height: 3em;
  overflow-wrap: break-word;
  text-align: left;
  font-size: 1.2em;
  padding: 0.5em 0;
  margin: 0.5em 0;
}

.fit {
  width: 100%;
  margin: 0;
  padding: 0;
}

u {
  text-decoration-skip-ink: none;
}

#action-buttons {
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  align-items: center;
}

button {
  display: flex;
  align-items: center;
}

button * {
  margin: 0 0.3em;
}

sup {
  font-size: 0.7em;
}

button:disabled:hover {
  transform: scale(1);
}

button:disabled {
  box-shadow: none;
  background-color: rgb(227, 228, 229);
}
</style>
