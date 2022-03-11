export default function getConversionType(conversion) {
    let conversionType = '';
        if (conversion === '\\mathcal{F} \\equiv (\\mathcal{F})' ) {
          conversionType = 'LS0_1';
        } else if (conversion === '(\\mathcal{F}) \\equiv \\mathcal{F}') {
          conversionType = 'LS0_2';
        } else if (conversion === '\\mathcal{F} \\land \\mathcal{F} \\equiv \\mathcal{F}') {
          conversionType = 'LS1_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\land \\mathcal{F}') {
          conversionType = 'LS1_2';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{F} \\equiv \\mathcal{F}') {
          conversionType = 'LS2_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\lor \\mathcal{F}') {
          conversionType = 'LS2_2';
        } else if (conversion === '\\mathcal{F} \\land \\mathcal{G} \\equiv \\mathcal{G} \\land \\mathcal{F}') {
          conversionType = 'LS3';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{G} \\equiv \\mathcal{G} \\lor \\mathcal{F}') {
          conversionType = 'LS4';
        } else if (conversion === '(\\mathcal{F} \\land \\mathcal{G}) \\land \\mathcal{H} \\equiv \\mathcal{F} \\land (\\mathcal{G} \\land \\mathcal{H})') {
          conversionType = 'LS5_1';
        } else if (conversion === '\\mathcal{F} \\land (\\mathcal{G} \\land \\mathcal{H}) \\equiv (\\mathcal{F} \\land \\mathcal{G}) \\land \\mathcal{H}') {
          conversionType = 'LS5_2';
        } else if (conversion === '(\\mathcal{F} \\lor \\mathcal{G}) \\lor \\mathcal{H} \\equiv \\mathcal{F} \\lor (\\mathcal{G} \\lor \\mathcal{H})') {
          conversionType = 'LS6_1';
        } else if (conversion === '\\mathcal{F} \\lor (\\mathcal{G} \\lor \\mathcal{H}) \\equiv (\\mathcal{F} \\lor \\mathcal{G}) \\lor \\mathcal{H}') {
          conversionType = 'LS6_2';
        } else if (conversion === '\\mathcal{F} \\land (\\mathcal{F} \\lor \\mathcal{G}) \\equiv \\mathcal{F}') {
          conversionType = 'LS7_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\land (\\mathcal{F} \\lor \\mathcal{G})') {
          conversionType = 'LS7_2';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{F} \\land \\mathcal{G} \\equiv \\mathcal{F}') {
          conversionType = 'LS8_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\lor \\mathcal{F} \\land \\mathcal{G}') {
          conversionType = 'LS8_2';
        } else if (conversion === '\\mathcal{F} \\land (\\mathcal{G} \\lor \\mathcal{H}) \\equiv \\mathcal{F} \\land \\mathcal{G} \\lor \\mathcal{F} \\land \\mathcal{H}') {
          conversionType = 'LS9_1';
        } else if (conversion === '\\mathcal{F} \\land \\mathcal{G} \\lor \\mathcal{F} \\land \\mathcal{H} \\equiv \\mathcal{F} \\land (\\mathcal{G} \\lor \\mathcal{H})') {
          conversionType = 'LS9_2';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{G} \\land \\mathcal{H} \\equiv (\\mathcal{F} \\lor \\mathcal{G}) \\land (\\mathcal{F} \\lor \\mathcal{H})') {
          conversionType = 'LS10_1';
        } else if (conversion === '(\\mathcal{F} \\lor \\mathcal{G}) \\land (\\mathcal{F} \\lor \\mathcal{H}) \\equiv \\mathcal{F} \\lor \\mathcal{G} \\land \\mathcal{H}') {
          conversionType = 'LS10_2';
        } else if (conversion === '\\neg(\\mathcal{F} \\land \\mathcal{G}) \\equiv \\neg \\mathcal{F} \\lor \\neg \\mathcal{G}') {
          conversionType = 'LS11_1';
        } else if (conversion === '\\neg \\mathcal{F} \\lor \\neg \\mathcal{G} \\equiv \\neg(\\mathcal{F} \\land \\mathcal{G})') {
          conversionType = 'LS11_2';
        } else if (conversion === '\\neg(\\mathcal{F} \\lor \\mathcal{G}) \\equiv \\neg \\mathcal{F} \\land \\neg \\mathcal{G}') {
          conversionType = 'LS12_1';
        } else if (conversion === '\\neg \\mathcal{F} \\land \\neg \\mathcal{G} \\equiv \\neg(\\mathcal{F} \\lor \\mathcal{G})') {
          conversionType = 'LS12_2';
        } else if (conversion === '\\mathcal{F} \\Rightarrow \\mathcal{G} \\equiv \\neg (\\mathcal{F} \\land \\neg \\mathcal{G})') {
          conversionType = 'LS13_1';
        } else if (conversion === '\\neg (\\mathcal{F} \\land \\neg \\mathcal{G}) \\equiv \\mathcal{F} \\Rightarrow \\mathcal{G}') {
          conversionType = 'LS13_2';
        } else if (conversion === '\\mathcal{F} \\Rightarrow \\mathcal{G} \\equiv \\neg \\mathcal{F} \\lor \\mathcal{G}') {
          conversionType = 'LS14_1';
        } else if (conversion === '\\neg \\mathcal{F} \\lor \\mathcal{G} \\equiv \\mathcal{F} \\Rightarrow \\mathcal{G}') {
          conversionType = 'LS14_2';
        } else if (conversion === '\\mathcal{F} \\land \\mathcal{G} \\equiv \\neg (\\mathcal{F} \\Rightarrow \\mathcal{G})') {
          conversionType = 'LS15_1';
        } else if (conversion === '\\neg (\\mathcal{F} \\Rightarrow \\mathcal{G}) \\equiv \\mathcal{F} \\land \\mathcal{G}') {
          conversionType = 'LS15_2';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{G} \\equiv \\neg \\mathcal{F} \\Rightarrow \\mathcal{G}') {
          conversionType = 'LS16_1';
        } else if (conversion === '\\neg \\mathcal{F} \\Rightarrow \\mathcal{G} \\equiv \\mathcal{F} \\lor \\mathcal{G}') {
          conversionType = 'LS16_2';
        } else if (conversion === '\\mathcal{F} \\Leftrightarrow \\mathcal{G} \\equiv \\mathcal{F} \\land \\mathcal{G} \\lor \\neg \\mathcal{F} \\land \\neg \\mathcal{G}') {
          conversionType = 'LS17_1';
        } else if (conversion === '\\mathcal{F} \\land \\mathcal{G} \\lor \\neg \\mathcal{F} \\land \\neg \\mathcal{G} \\equiv \\mathcal{F} \\Leftrightarrow \\mathcal{G}') {
          conversionType = 'LS17_2';
        } else if (conversion === '\\mathcal{F} \\Leftrightarrow \\mathcal{G} \\equiv (\\mathcal{F} \\Rightarrow \\mathcal{G}) \\land (\\mathcal{G} \\Rightarrow \\mathcal{F})') {
          conversionType = 'LS18_1';
        } else if (conversion === '(\\mathcal{F} \\Rightarrow \\mathcal{G}) \\land (\\mathcal{G} \\Rightarrow \\mathcal{F}) \\equiv \\mathcal{F} \\Leftrightarrow \\mathcal{G}') {
          conversionType = 'LS18_2';
        } else if (conversion === '\\mathcal{F} \\land 1 \\equiv \\mathcal{F}') {
          conversionType = 'LS19_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\land 1') {
          conversionType = 'LS19_2';
        } else if (conversion === '\\mathcal{F} \\lor 1 \\equiv 1') {
          conversionType = 'LS20_1';
        } else if (conversion === '1 \\equiv \\mathcal{F} \\lor 1') {
          conversionType = 'LS20_2';
        } else if (conversion === '\\mathcal{F} \\land 0 \\equiv 0') {
          conversionType = 'LS21_1';
        } else if (conversion === '0 \\equiv \\mathcal{F} \\land 0') {
          conversionType = 'LS21_2';
        } else if (conversion === '\\mathcal{F} \\lor 0 \\equiv \\mathcal{F}') {
          conversionType = 'LS22_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\mathcal{F} \\lor 0') {
          conversionType = 'LS22_2';
        } else if (conversion === '\\neg \\neg \\mathcal{F} \\equiv \\mathcal{F}') {
          conversionType = 'LS23_1';
        } else if (conversion === '\\mathcal{F} \\equiv \\neg \\neg \\mathcal{F}') {
          conversionType = 'LS23_2';
        }
        return conversionType;
}