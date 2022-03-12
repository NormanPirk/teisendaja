export default function conversionAllowed(matchingChild, conversionType) {
    if (conversionType === 'LS0_2') {
        return allowLS0_2(matchingChild);
    }
    return true;
}

function allowLS0_2(matchingChild) {
    if (matchingChild.constructor.name === "ParenContext") {
        // the matching child itself is ParenContext
        if (matchingChild.parentCtx) {
            const parentContext = matchingChild.parentCtx.constructor.name;
            const childContext = matchingChild.children[1].constructor.name;
            if (parentContext === "NegContext") {
                if (!["NegContext", "PredContext"].includes(childContext)) {
                    return false;
                }
            } else if (parentContext === "AndContext") {
                if (["OrContext", "ImplContext", "EqContext"].includes(childContext)) {
                    return false;
                }
            } else if (parentContext === "OrContext") {
                if (["ImplContext", "EqContext"].includes(childContext)) {
                    return false;
                }
            } else if (parentContext === "ImplContext") {
                if (["EqContext"].includes(childContext)) {
                    return false;
                }
            }
        }
    }


    return true;
}