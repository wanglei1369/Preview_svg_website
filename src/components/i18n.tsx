/** @format */

import i18n from "i18next"
// import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"
import translationEn from "../locales/en/translation"
import translationZh from "../locales/zh/translation"
import translationTw from "../locales/tw/translation"
import translationVi from "../locales/vi/translation"
import translationKo from "../locales/ko/translation"
import translationTh from "../locales/th/translation"
import translationMs from "../locales/ms/translation"
import translationAr from "../locales/ar/translation"
import translationId from "../locales/id/translation"
import translationJp from "../locales/jp/translation"
import notFoundEn from "../locales/en/NotFound"
import notFoundZh from "../locales/zh/NotFound"
import notFoundTw from "../locales/tw/NotFound"
import notFoundVi from "../locales/vi/NotFound"
import notFoundKo from "../locales/ko/NotFound"
import notFoundTh from "../locales/th/NotFound"
import notFoundMs from "../locales/ms/NotFound"
import notFoundAr from "../locales/ar/NotFound"
import notFoundId from "../locales/id/NotFound"
import notFoundJp from "../locales/jp/NotFound"
import cfdEn from "../locales/en/cfd"
import cfdZh from "../locales/zh/cfd"
import cfdTw from "../locales/tw/cfd"
import cfdAr from "../locales/ar/cfd"

const resources = {
    en: {
        translation: translationEn,
        NotFound: notFoundEn,
        cfd: cfdEn,
    },
    zh: {
        translation: translationZh,
        NotFound: notFoundZh,
        cfd: cfdZh,
    },
    tw: {
        translation: translationTw,
        NotFound: notFoundTw,
        cfd: cfdTw,
    },
    vi: {
        translation: translationVi,
        NotFound: notFoundVi,
    },
    ko: {
        translation: translationKo,
        NotFound: notFoundKo,
    },
    th: {
        translation: translationTh,
        NotFound: notFoundTh,
    },
    ms: {
        translation: translationMs,
        NotFound: notFoundMs,
    },
    ar:{
        translation:translationAr,
        NotFound: notFoundAr,
        cfd: cfdAr,
    },
    id:{
        translation:translationId,
        NotFound: notFoundId,
    },
    jp:{
        translation:translationJp,
        NotFound: notFoundJp,
    }
}

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    // .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        defaultNS: "translation",
        fallbackLng: {
            "en-US": ["en"],
            "en-AU": ["en"],
            "en-GB": ["en"],
            "en-NZ": ["en"],
            "zh-Hant": ["zh", "en"],
            es: ["en"],
            default: ["en"],
        },

        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // react: {
        //     wait: true,
        // },
        resources,
        // backend: {
        //     backends: [
        //         LocalStorageBackend, // primary
        //         XHR, // fallback
        //     ],
        //     backendOptions: [
        //         {
        //             loadPath: "/locales/{{lng}}/{{ns}}.json", // xhr load path for my own fallback
        //         },
        //     ],
        //     // ajax: axios,
        //     loadPath: "../locales/{{lng}}/{{ns}}.json",
        // },
    })

export default i18n
