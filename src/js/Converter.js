import getParseTree from "../ANTLR/ParseTree.js";
import LS1_1Visitor from '../ANTLR/visitors/propositional/LS1_1Visitor.js';
import LS2_1Visitor from '../ANTLR/visitors/propositional/LS2_1Visitor.js';
import LS0_1Visitor from '../ANTLR/visitors/propositional/LS0_1Visitor.js';
import LS0_2Visitor from '../ANTLR/visitors/propositional/LS0_2Visitor.js';
import LS1_2Visitor from '../ANTLR/visitors/propositional/LS1_2Visitor.js';
import LS2_2Visitor from '../ANTLR/visitors/propositional/LS2_2Visitor.js';
import LS3Visitor from "../ANTLR/visitors/propositional/LS3Visitor.js";
import LS4Visitor from "../ANTLR/visitors/propositional/LS4Visitor.js";
import LS5_1Visitor from "../ANTLR/visitors/propositional/LS5_1Visitor.js";
import LS5_2Visitor from "../ANTLR/visitors/propositional/LS5_2Visitor.js";
import LS6_1Visitor from "../ANTLR/visitors/propositional/LS6_1Visitor.js";
import LS6_2Visitor from "../ANTLR/visitors/propositional/LS6_2Visitor.js";
import LS7_1Visitor from "../ANTLR/visitors/propositional/LS7_1Visitor.js";
import LS7_2Visitor from "../ANTLR/visitors/propositional/LS7_2Visitor.js";
import LS8_1Visitor from "../ANTLR/visitors/propositional/LS8_1Visitor.js";
import LS8_2Visitor from "../ANTLR/visitors/propositional/LS8_2Visitor.js";
import LS9_1Visitor from "../ANTLR/visitors/propositional/LS9_1Visitor.js";
import LS9_2Visitor from "../ANTLR/visitors/propositional/LS9_2Visitor.js";
import LS10_1Visitor from "../ANTLR/visitors/propositional/LS10_1Visitor.js";
import LS10_2Visitor from "../ANTLR/visitors/propositional/LS10_2Visitor.js";
import LS11_1Visitor from "../ANTLR/visitors/propositional/LS11_1Visitor.js";
import LS11_2Visitor from "../ANTLR/visitors/propositional/LS11_2Visitor.js";
import LS12_1Visitor from "../ANTLR/visitors/propositional/LS12_1Visitor.js";
import LS12_2Visitor from "../ANTLR/visitors/propositional/LS12_2Visitor.js";
import LS13_1Visitor from "../ANTLR/visitors/propositional/LS13_1Visitor.js";
import LS13_2Visitor from "../ANTLR/visitors/propositional/LS13_2Visitor.js";
import LS14_1Visitor from "../ANTLR/visitors/propositional/LS14_1Visitor.js";
import LS14_2Visitor from "../ANTLR/visitors/propositional/LS14_2Visitor.js";
import LS15_1Visitor from "../ANTLR/visitors/propositional/LS15_1Visitor.js";
import LS15_2Visitor from "../ANTLR/visitors/propositional/LS15_2Visitor.js";
import LS16_1Visitor from "../ANTLR/visitors/propositional/LS16_1Visitor.js";
import LS16_2Visitor from "../ANTLR/visitors/propositional/LS16_2Visitor.js";
import LS17_1Visitor from "../ANTLR/visitors/propositional/LS17_1Visitor.js";
import LS17_2Visitor from "../ANTLR/visitors/propositional/LS17_2Visitor.js";
import LS18_1Visitor from "../ANTLR/visitors/propositional/LS18_1Visitor.js";
import LS18_2Visitor from "../ANTLR/visitors/propositional/LS18_2Visitor.js";
import LS19_1Visitor from "../ANTLR/visitors/propositional/LS19_1Visitor.js";
import LS19_2Visitor from "../ANTLR/visitors/propositional/LS19_2Visitor.js";
import LS20_1Visitor from "../ANTLR/visitors/propositional/LS20_1Visitor.js";
import LS20_2Visitor from "../ANTLR/visitors/propositional/LS20_2Visitor.js";
import LS21_1Visitor from "../ANTLR/visitors/propositional/LS21_1Visitor.js";
import LS21_2Visitor from "../ANTLR/visitors/propositional/LS21_2Visitor.js";
import LS22_1Visitor from "../ANTLR/visitors/propositional/LS22_1Visitor.js";
import LS22_2Visitor from "../ANTLR/visitors/propositional/LS22_2Visitor.js";
import LS23_1Visitor from "../ANTLR/visitors/propositional/LS23_1Visitor.js";
import LS23_2Visitor from "../ANTLR/visitors/propositional/LS23_2Visitor.js";
import LS24Visitor from "../ANTLR/visitors/propositional/LS24Visitor.js";
import PS1_1Visitor from "../ANTLR/visitors/predicate/PS1_1Visitor.js";
import PS1_2Visitor from "../ANTLR/visitors/predicate/PS1_2Visitor.js";
import PS2_1Visitor from "../ANTLR/visitors/predicate/PS2_1Visitor.js";
import PS2_2Visitor from "../ANTLR/visitors/predicate/PS2_2Visitor.js";

export default function convert(input, visitorType) { 
    const tree = getParseTree(input);

    const visitor = getVisitor(visitorType);
    const result = visitor.visit(tree);
    
    return result;
}

function getVisitor(visitorType) {
    switch (visitorType) {
        case 'LS0_1':
            return new LS0_1Visitor();
        case 'LS0_2':
            return new LS0_2Visitor();
        case 'LS1_1':
            return new LS1_1Visitor();
        case 'LS1_2':
            return new LS1_2Visitor();
        case 'LS2_1':
            return new LS2_1Visitor();
        case 'LS2_2':
            return new LS2_2Visitor();
        case 'LS3':
            return new LS3Visitor();
        case 'LS4':
            return new LS4Visitor();
        case 'LS5_1':
            return new LS5_1Visitor(); 
        case 'LS5_2':
            return new LS5_2Visitor();
        case 'LS6_1':
            return new LS6_1Visitor(); 
        case 'LS6_2':
            return new LS6_2Visitor();
        case 'LS7_1':
            return new LS7_1Visitor();
        case 'LS7_2':
            return new LS7_2Visitor(); 
        case 'LS8_1':
            return new LS8_1Visitor();
        case 'LS8_2':
            return new LS8_2Visitor();
        case 'LS9_1':
            return new LS9_1Visitor();
        case 'LS9_2':
            return new LS9_2Visitor(); 
        case 'LS10_1':
            return new LS10_1Visitor();
        case 'LS10_2':
            return new LS10_2Visitor(); 
        case 'LS11_1':
            return new LS11_1Visitor();
        case 'LS11_2':
            return new LS11_2Visitor();
        case 'LS12_1':
            return new LS12_1Visitor();
        case 'LS12_2':
            return new LS12_2Visitor();
        case 'LS13_1':
            return new LS13_1Visitor();
        case 'LS13_2':
            return new LS13_2Visitor();
        case 'LS14_1':
            return new LS14_1Visitor();
        case 'LS14_2':
            return new LS14_2Visitor(); 
        case 'LS15_1':
            return new LS15_1Visitor();
        case 'LS15_2':
            return new LS15_2Visitor();
        case 'LS16_1':
            return new LS16_1Visitor();
        case 'LS16_2':
            return new LS16_2Visitor();
        case 'LS17_1':
            return new LS17_1Visitor();
        case 'LS17_2':
            return new LS17_2Visitor();
        case 'LS18_1':
            return new LS18_1Visitor();
        case 'LS18_2':
            return new LS18_2Visitor();
        case 'LS19_1':
            return new LS19_1Visitor();
        case 'LS19_2':
            return new LS19_2Visitor();
        case 'LS20_1':
            return new LS20_1Visitor();
        case 'LS20_2':
            return new LS20_2Visitor();
        case 'LS21_1':
            return new LS21_1Visitor();
        case 'LS21_2':
            return new LS21_2Visitor();
        case 'LS22_1':
            return new LS22_1Visitor();
        case 'LS22_2':
            return new LS22_2Visitor();
        case 'LS23_1':
            return new LS23_1Visitor();
        case 'LS23_2':
            return new LS23_2Visitor();
        case 'LS24':
            return new LS24Visitor();
        case 'PS1_1':
            return new PS1_1Visitor();
        case 'PS1_2':
            return new PS1_2Visitor();
        case 'PS2_1':
            return new PS2_1Visitor();
        case 'PS2_2':
            return new PS2_2Visitor();
                
    }
}