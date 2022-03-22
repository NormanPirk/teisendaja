import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import titleMixin from "./mixins/titleMixin";
import tooltip from "./directives/tooltip.js";
import "@/assets/tooltip.css";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mixin(titleMixin)
  .directive("tooltip", tooltip)
  .mount("#app");
