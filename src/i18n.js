import { createI18n } from "vue3-i18n";
import estonian from "@/assets/translations/ee.json";

const messages = {
  ee: estonian
};

const i18n = createI18n({
  locale: "ee",
  messages: messages,
});

export default i18n;
