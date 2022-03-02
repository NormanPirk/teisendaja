export default function getConversionType(conversion) {
    let conversionType = '';
        if (conversion === '(\\mathcal{F}) \\equiv \\mathcal{F}' ) {
          conversionType = 'LS0';
        }
        else if (conversion === '\\mathcal{F} \\land \\mathcal{F} \\equiv \\mathcal{F}') {
          conversionType = 'LS1';
        } else if (conversion === '\\mathcal{F} \\lor \\mathcal{F} \\equiv \\mathcal{F}') {
          conversionType = 'LS2';
        }
        return conversionType;
}