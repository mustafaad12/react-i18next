import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "welcome to react",
      },
    },
    ar: {
      translation: {
        welcome: "مرحبا في رياكت",
      },
    },
  },
  lng: "ar",
});

export default i18n;
