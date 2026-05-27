import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        tr: {
            translation: {
                nav: {
                    works: "projeler",
                    code: "kod",
                    about: "hakkımda",
                },
                header: {
                    theme: {
                        toSepia: "◐ sepya",
                        toDark: "◑ koyu",
                    },
                },
            },
        },
        en: {
            translation: {
                nav: {
                    works: "works",
                    code: "code",
                    about: "about",
                },
                header: {
                    theme: {
                        toSepia: "◐ sepia",
                        toDark: "◑ dark",
                    },
                },
            },
        },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
