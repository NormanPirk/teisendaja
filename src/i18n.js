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
        deleteAll: "Kustuta kõik teisendussammud",
        downloadTeX: "Laadi alla TeX",
        insertFormulaGuide: "Sisesta valem TeX kujul. Loogikasümboleid saab sisestada nii sisendlahtri kohal olevate nuppude abil kui ka käsitsi kirjutades. Kui kirjutate käsitsi, lisage loogikasümbolite järele ka tühik.",
        pressStartButtonGuide: "Vajuta nupule 'Alusta teisendamist'.",
        conversionGuide: "Aktiveeri kursori abil sisendlahtris teisendatav osavalem ning vajuta vastavale nupule. Iga nupuga saab teisendusi teha mõlemat pidi.",
        resultGuide: "Teisendussammud kuvatakse paremal.",
        showHelp: "Kuva abi",
        hideHelp: "Peida abi",
        noInput: "Valem on sisestamata!",
        faultyInput: "Valem ei ole korrektsel kujul!",
        enteringFormulas: "Valemite sisestamine",
        symbols: "Sümbolid",
        ind: "Indiviidmuutujad",
        const: "Konstantsümbolid",
        funct: "Funktsionaalsümbolid",
        pred: "Predikaatsümbolid"
    }
};

const i18n = createI18n({
    locale: "ee",
    messages: messages
});

export default i18n;