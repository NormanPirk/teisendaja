grammar PredGrammar;

start: formula EOF;

formula
    : predicate                             #pred
    | NEG formula                           #neg
    | left=formula op=AND right=formula     #and
	| left=formula op=OR right=formula      #or
	| left=formula op=IMPL right=formula    #impl
	| left=formula op=EQ right=formula      #eq
	| LPAREN formula RPAREN                 #paren
    | quantifier                            #quant
    | T                                     #true
    | F                                     #false
    ;

quantifier 
    : FORALL IND afterQuantifier    #forall
    | EXISTS IND afterQuantifier    #exists
    ;

afterQuantifier: predicate | LPAREN formula RPAREN | quantifier;   

predicate: PRED (LPAREN term (SEP term)* RPAREN)?;

term: IND | CONST | funct;

funct: FUNCT LPAREN term (SEP term)* RPAREN;

IND: [p-z];

PRED: [A-Z];

CONST: [a-e];

FUNCT: [f-o];

SEP: ',';

LPAREN: '(';

RPAREN: ')';

NEG: '¬';

AND: '∧';

OR: '∨';

IMPL: '⇒';

EQ: '⇔';

FORALL: '∀';

EXISTS: '∃';

T: '1';

F: '0';

WS: [ \t\r\n] -> skip;