export default function conversionAllowed(matchingChild, conversionType) {
  if (conversionType === "L30_2") {
    return allowL30_2(matchingChild);
  }
  if (conversionType === "L24_2") {
    return allowL24_2(matchingChild);
  }
  if (conversionType === "L25_2") {
    return allowL25_2(matchingChild);
  }
  return true;
}

function allowL30_2(matchingChild) {
  if (matchingChild.constructor.name === "ParenContext") {
    // the matching child itself is ParenContext
    if (matchingChild.parentCtx) {
      const parentContext = matchingChild.parentCtx.constructor.name;
      const childContext = matchingChild.formula().constructor.name;
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
      } else if (
        parentContext === "ForallContext" ||
        parentContext === "ExistsContext"
      ) {
        if (
          ["AndContext", "OrContext", "ImplContext", "EqContext"].includes(
            childContext
          )
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function allowL24_2(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "TrueContext";
  }
  return matchingChild.constructor.name === "TrueContext";
}

function allowL25_2(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "FalseContext";
  }
  return matchingChild.constructor.name === "FalseContext";
}
