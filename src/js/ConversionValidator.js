export default function conversionAllowed(matchingChild, conversionType) {
  if (conversionType === "L18_2") {
    return allowL18_2(matchingChild);
  }
  if (["L9_2","L21_2","L24_2"].includes(conversionType)) {
    return allowTrue(matchingChild);
  }
  if (["L9_2","L22_2", "L25_2"].includes(conversionType)) {
    return allowFalse(matchingChild);
  }
  return true;
}

function allowL18_2(matchingChild) {
  if (matchingChild.constructor.name === "ParenContext") {
    // the matching child itself is ParenContext
    if (matchingChild.parentCtx) {
      const parentContext = matchingChild.parentCtx.constructor.name;
      const childContext = matchingChild.formula().constructor.name;
      if (parentContext === "NegContext") {
        if (!["NegContext", "PredContext", "ForallContext", "ExistsContext"].includes(childContext)) {
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

function allowTrue(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "TrueContext";
  }
  return matchingChild.constructor.name === "TrueContext";
}

function allowFalse(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "FalseContext";
  }
  return matchingChild.constructor.name === "FalseContext";
}
