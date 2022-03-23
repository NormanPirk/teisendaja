grammar PredGrammarRight;

start: formula EOF;

formula
    : predicate                                         #pred
    | FORALL IND formula                                #forall
    | EXISTS IND formula                                #exists 
    | NEG formula                                       #neg
    | <assoc=right> left=formula op=AND right=formula   #and
	| <assoc=right> left=formula op=OR right=formula    #or
	| left=formula op=IMPL right=formula                #impl
	| <assoc=right> left=formula op=EQ right=formula    #eq
	| LPAREN formula RPAREN                             #paren
    | T                                                 #true
    | F                                                 #false
    ;   

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