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
        insertFormulaGuide: "Sisesta valem TeX kujul. Loogikasümboleid saab sisestada nii sisendlahtri kohal olevate nuppude abil kui ka käsitsi kirjutades. TeX kujul sisestatu asendatakse automaatselt vastavate sümbolitega.",
        pressStartButtonGuide: "Vajuta nupule 'Alusta teisendamist'.",
        conversionGuide: "Aktiveeri kursori abil sisendlahtris teisendatav osavalem ning vajuta vastavale nupule. Et teisendust teha vastassuunas, vajuta teisendusnupul olevale nooltega ikoonile.",
        resultGuide: "Teisendussammud kuvatakse paremal. Viimane teisendussamm kuvatakse lisaks ka kõige ülemisena.",
        showHelp: "Näita abi",
        hideHelp: "Peida abi",
        hideTexSymbols: "Peida sümbolite ja TeX koodi vastavus",
        showTexSymbols: "Näita sümbolite ja TeX koodi vastavust",
        noInput: "Valem on sisestamata!",
        faultyInput: "Valem ei ole korrektsel kujul!",
        faultyConversion: "Valitud teisendus ei sobi sellele osavalemile!",
        notSubformula: "Valitud ei ole põhivalemi osavalemit!",
        noSubformula: "Osavalem on valimata!",
        conversionNotAllowed: "Valitud teisendus ei ole lubatud!",
        enteringFormulas: "Valemite sisestamine",
        symbols: "Sümbolid",
        ind: "Indiviidmuutujad",
        const: "Konstantsümbolid",
        funct: "Funktsionaalsümbolid",
        pred: "Predikaatsümbolid",
        insertNew: "Sisesta uus valem",
        newIsIncorrect: "Valem on sisestamata või ei ole korrektne!",
        ready: "Valmis",
        cancel: "Katkesta",
        propLogic: "Lausearvutuse põhisamaväärsused",
        show: "Näita",
        hide: "Peida",
        truthValues: "Tõeväärtused",
        associativityGuide: "Kui kõrvuti on sisestatud ilma sulgudeta kaks või enam sama prioriteediga tehet, siis peatehteks jääb kõige parempoolsem tehe. Näiteks valemi A∧B∧C korral on konjunktsiooni vasakuks pooleks konjukntsioon A∧B ja paremaks pooleks valem C."
    }
};

const i18n = createI18n({
    locale: "ee",
    messages: messages
});

export default i18n;