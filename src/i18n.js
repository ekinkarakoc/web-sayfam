import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// const resources = {
//   en: {
//     translition: {
//       hi: "Merhaba",
//     },
//   },
//   tr: {
//     translition: {
//       hi: "Hi",
//     },
//   },
// };

i18n.use(initReactI18next).use(Backend).init({
  lng: "tr",
});

export default i18n;
