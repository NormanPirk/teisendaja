grammar PredGrammarRight;

start: formula EOF;

formula
    : predicate                                         #pred
    | FORALL SYMBOL formula                             #forall
    | EXISTS SYMBOL formula                             #exists 
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

term: SYMBOL | funct;

funct: SYMBOL LPAREN term (SEP term)* RPAREN;

SYMBOL: [a-z];

PRED: [A-Z];

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