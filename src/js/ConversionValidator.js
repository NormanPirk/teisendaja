export default function conversionAllowed(matchingChild, conversionType) {
  if (conversionType === "L28_2") {
    return allowL28_2(matchingChild);
  }
  if (conversionType === "L22_2") {
    return allowL22_2(matchingChild);
  }
  if (conversionType === "L23_2") {
    return allowL23_2(matchingChild);
  }
  return true;
}

function allowL28_2(matchingChild) {
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

function allowL22_2(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "TrueContext";
  }
  return matchingChild.constructor.name === "TrueContext";
}

function allowL23_2(matchingChild) {
  if (matchingChild.constructor.name === "StartContext") {
    return matchingChild.formula().constructor.name === "FalseContext";
  }
  return matchingChild.constructor.name === "FalseContext";
}
