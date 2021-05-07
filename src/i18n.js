import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
        "ALEXI": "ALEXI",
        "VAKHTANG": "VAKHTANG",
        "FOUNDATION": "FOUNDATION",
        "PROJECTS": "PROJECTS",
        "CONTACT": "CONTACT"
    }
  },
  ka: {
    translation: {
      // Header
      "ALEXI": "ალექსი",
      "VAKHTANG": "ვახტანგ",
      "FOUNDATION": "ფონდი",
      "PROJECTS": "პროექტები",
      "CONTACT": "კონტაქტი",
      "Biography": "ბიოგრაფია",
      "Photos": "ფოტოები",
      "Manuscripts": "მანუსკრიპტები",
      "Presse": "პრესა",
      "Audio & Video Samples": "აუდიო & ვიდეო",
      "About Us": "ინფორმაცია",
      "Team": "გუნდი",
      // Header

      // Content
      "OUR MISSION": "ჩვენი მისია",
      "About Us": "ინფორმაცია",
      "Photos": "ფოტოები",
      "Team": "გუნდი",
      "Alexi And Vakhtang Matchavariani": "ალექსი და ვახტანგ მაჭავარიანის",
      "Charity Foundation": "საქველმოქმედო ფონდი",
      "LEARN MORE": "გაიგეთ მეტი",
      // Content

      // Alexi & Vakhtang 
      "Vakhtang Matchavariani": "ვახტანგ მაჭავარიანი",
      "Alexi Matchavariani": "ალექსი მაჭავარიანი",
      "BIOGRAPHY": "ბიოგრაფია",
      "PHOTOS":  "ფოტოები",
      "PRESSE": "პრესა",
      "MANUSCRIPTS": "მანუსკრიპტები",
      "AUDIO & VIDEO SAMPLES": "აუდიო & ვიდეო",
      // Alexi & Vakhtang 

      // Footer
      "Social Media": "სოციალური მედია",
      "Location Street": "ქუჩის სახელი"
      // Footer



    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;