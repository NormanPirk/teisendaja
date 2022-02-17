import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";
import i18n from "./i18n";
import titleMixin from './mixins/titleMixin'


function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById("app");
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el);
}

initMathJax({}, onMathJaxReady);

createApp(App).use(i18n).use(store).use(router).use(MathJax).mixin(titleMixin).mount("#app");

