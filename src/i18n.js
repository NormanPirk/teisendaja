import { createI18n } from "vue3-i18n";

const messages = {
    ee: {
        title: "Loogikavalemite teisendaja",
        input: "Töödeldav valem",
        inputGuide: "Enne teisendamist sisesta valem ja vajuta nupule 'Alusta teisendamist'",
        inputDescription: "Sisesta valem TeX kujul",
        startConversions: "Alusta teisendamist",
        conversions: "Teisendussammud",
        deleteLast: "Kustuta viimane teisendussamm",
        downloadTeX: "Laadi alla TEX",
        conversionGuide: "Aktiveeri hiire abil teisendatav osavalem ning vajuta vastavale nupule"
    }
};

const i18n = createI18n({
    locale: "ee",
    messages: messages
});

export default i18n;