import getParseTree from "@/ANTLR/leftAssocGrammar/ParseTree.js";
import L1_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L1_1Visitor.js";
import L1_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L1_2Visitor.js";
import L2_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L2_1Visitor.js";
import L2_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L2_2Visitor.js";
import L3Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L3Visitor.js";
import L4Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L4Visitor.js";
import L5_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L5_1Visitor.js";
import L5_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L5_2Visitor.js";
import L6_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L6_1Visitor.js";
import L6_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L6_2Visitor.js";
import L7_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L7_1Visitor.js";
import L7_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L7_2Visitor.js";
import L8_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L8_1Visitor.js";
import L8_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L8_2Visitor.js";
import L9_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L9_1Visitor.js";
import L9_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L9_2Visitor.js";
import L10_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L10_1Visitor.js";
import L10_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L10_2Visitor.js";
import L11_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L11_1Visitor.js";
import L11_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L11_2Visitor.js";
import L12_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L12_1Visitor.js";
import L12_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L12_2Visitor.js";
import L13_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L13_1Visitor.js";
import L13_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L13_2Visitor.js";
import L14_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L14_1Visitor.js";
import L14_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L14_2Visitor.js";
import L15_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L15_1Visitor.js";
import L15_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L15_2Visitor.js";
import L16_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L16_1Visitor.js";
import L16_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L16_2Visitor.js";
import L17_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L17_1Visitor.js";
import L17_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L17_2Visitor.js";
import L18_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L18_1Visitor.js";
import L18_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L18_2Visitor.js";
import L19Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L19Visitor.js";
import L20_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L20_1Visitor.js";
import L20_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L20_2Visitor.js";
import L21_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L21_1Visitor.js";
import L21_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L21_2Visitor.js";
import L22_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L22_1Visitor.js";
import L22_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L22_2Visitor.js";
import L23_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L23_1Visitor.js";
import L23_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L23_2Visitor.js";
import L24_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L24_1Visitor.js";
import L24_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L24_2Visitor.js";
import L25_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L25_1Visitor.js";
import L25_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L25_2Visitor.js";
import L26_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L26_1Visitor.js";
import L26_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L26_2Visitor.js";
import L27_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L27_1Visitor.js";
import L27_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L27_2Visitor.js";
import L28_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L28_1Visitor.js";
import L28_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L28_2Visitor.js";
import L29_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L29_1Visitor.js";
import L29_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L29_2Visitor.js";
import L30_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L30_1Visitor.js";
import L30_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/propositional/L30_2Visitor.js";

import P1_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P1_1Visitor.js";
import P1_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P1_2Visitor.js";
import P2_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P2_1Visitor.js";
import P2_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P2_2Visitor.js";
import P3_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P3_1Visitor.js";
import P3_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P3_2Visitor.js";
import P4_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P4_1Visitor.js";
import P4_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P4_2Visitor.js";
import P5_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P5_1Visitor.js";
import P5_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P5_2Visitor.js";
import P6_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P6_1Visitor.js";
import P6_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P6_2Visitor.js";
import P7_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P7_1Visitor.js";
import P7_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P7_2Visitor.js";
import P8_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P8_1Visitor.js";
import P8_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P8_2Visitor.js";
import P9_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P9_1Visitor.js";
import P9_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P9_2Visitor.js";
import P10_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P10_1Visitor.js";
import P10_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P10_2Visitor.js";
import P11_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P11_1Visitor.js";
import P11_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P11_2Visitor.js";
import P12_1Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P12_1Visitor.js";
import P12_2Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P12_2Visitor.js";
import P13Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P13Visitor.js";
import P14Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P14Visitor.js";
import P15Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P15Visitor.js";
import P16Visitor from "@/ANTLR/leftAssocGrammar/visitors/predicate/P16Visitor.js";

export default function convert(subFormula, conversionType) {
  const tree = getParseTree(subFormula);
  const visitor = getVisitor(conversionType);
  const result = visitor.visit(tree);

  return result;
}

function getVisitor(conversionType) {
  switch (conversionType) {
    case "L1_1":
      return new L1_1Visitor();
    case "L1_2":
      return new L1_2Visitor();
    case "L2_1":
      return new L2_1Visitor();
    case "L2_2":
      return new L2_2Visitor();
    case "L3":
      return new L3Visitor();
    case "L4":
      return new L4Visitor();
    case "L5_1":
      return new L5_1Visitor();
    case "L5_2":
      return new L5_2Visitor();
    case "L6_1":
      return new L6_1Visitor();
    case "L6_2":
      return new L6_2Visitor();
    case "L7_1":
      return new L7_1Visitor();
    case "L7_2":
      return new L7_2Visitor();
    case "L8_1":
      return new L8_1Visitor();
    case "L8_2":
      return new L8_2Visitor();
    case "L9_1":
      return new L9_1Visitor();
    case "L9_2":
      return new L9_2Visitor();
    case "L10_1":
      return new L10_1Visitor();
    case "L10_2":
      return new L10_2Visitor();
    case "L11_1":
      return new L11_1Visitor();
    case "L11_2":
      return new L11_2Visitor();
    case "L12_1":
      return new L12_1Visitor();
    case "L12_2":
      return new L12_2Visitor();
    case "L13_1":
      return new L13_1Visitor();
    case "L13_2":
      return new L13_2Visitor();
    case "L14_1":
      return new L14_1Visitor();
    case "L14_2":
      return new L14_2Visitor();
    case "L15_1":
      return new L15_1Visitor();
    case "L15_2":
      return new L15_2Visitor();
    case "L16_1":
      return new L16_1Visitor();
    case "L16_2":
      return new L16_2Visitor();
    case "L17_1":
      return new L17_1Visitor();
    case "L17_2":
      return new L17_2Visitor();
    case "L18_1":
      return new L18_1Visitor();
    case "L18_2":
      return new L18_2Visitor();
    case "L19":
      return new L19Visitor();
    case "L20_1":
      return new L20_1Visitor();
    case "L20_2":
      return new L20_2Visitor();
    case "L21_1":
      return new L21_1Visitor();
    case "L21_2":
      return new L21_2Visitor();
    case "L22_1":
      return new L22_1Visitor();
    case "L22_2":
      return new L22_2Visitor();
    case "L23_1":
      return new L23_1Visitor();
    case "L23_2":
      return new L23_2Visitor();
    case "L24_1":
      return new L24_1Visitor();
    case "L24_2":
      return new L24_2Visitor();
    case "L25_1":
      return new L25_1Visitor();
    case "L25_2":
      return new L25_2Visitor();
    case "L26_1":
      return new L26_1Visitor();
    case "L26_2":
      return new L26_2Visitor();
    case "L27_1":
      return new L27_1Visitor();
    case "L27_2":
      return new L27_2Visitor();
    case "L28_1":
      return new L28_1Visitor();
    case "L28_2":
      return new L28_2Visitor();
    case "L29_1":
      return new L29_1Visitor();
    case "L29_2":
      return new L29_2Visitor();
    case "L30_1":
      return new L30_1Visitor();
    case "L30_2":
      return new L30_2Visitor();
    case "P1_1":
      return new P1_1Visitor();
    case "P1_2":
      return new P1_2Visitor();
    case "P2_1":
      return new P2_1Visitor();
    case "P2_2":
      return new P2_2Visitor();
    case "P3_1":
      return new P3_1Visitor();
    case "P3_2":
      return new P3_2Visitor();
    case "P4_1":
      return new P4_1Visitor();
    case "P4_2":
      return new P4_2Visitor();
    case "P5_1":
      return new P5_1Visitor();
    case "P5_2":
      return new P5_2Visitor();
    case "P6_1":
      return new P6_1Visitor();
    case "P6_2":
      return new P6_2Visitor();
    case "P7_1":
      return new P7_1Visitor();
    case "P7_2":
      return new P7_2Visitor();
    case "P8_1":
      return new P8_1Visitor();
    case "P8_2":
      return new P8_2Visitor();
    case "P9_1":
      return new P9_1Visitor();
    case "P9_2":
      return new P9_2Visitor();
    case "P10_1":
      return new P10_1Visitor();
    case "P10_2":
      return new P10_2Visitor();
    case "P11_1":
      return new P11_1Visitor();
    case "P11_2":
      return new P11_2Visitor();
    case "P12_1":
      return new P12_1Visitor();
    case "P12_2":
      return new P12_2Visitor();
    case "P13":
      return new P13Visitor();
    case "P14":
      return new P14Visitor();
    case "P15":
      return new P15Visitor();
    case "P16":
      return new P16Visitor();
  }
}
