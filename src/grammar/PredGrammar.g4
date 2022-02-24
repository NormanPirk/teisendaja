grammar PredGrammar;

start: formula EOF;

formula: predicate                          #pred
    | NEG formula                           #neg
    | left=formula op=AND right=formula     #and
	| left=formula op=OR right=formula      #or
	| left=formula op=IMPL right=formula    #impl
	| left=formula op=EQ right=formula      #eq
	| LPAREN formula RPAREN                 #paren
    | FORALL IND formula                    #forall
    | EXISTS IND formula                    #exists
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

NEG: '\\neg ';

AND: '\\& ';

OR: '\\lor ';

IMPL: '\\Rightarrow ';

EQ: '\\Leftrightarrow ';

FORALL: '\\forall ';

EXISTS: '\\exists ';

WS: [ \t\r\n] -> skip;