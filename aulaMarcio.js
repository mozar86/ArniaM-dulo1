const io = require('./io/io')

/*
Programar computador é um jogo de montar que tem 5 partes. O primeiro comando é a saída de dados, o segundo é entrada de dados, o terceiro é decisão, o quarto é repetição e o quinto é atribuição.
*/

/*
Exemplo de entrada de dados: para fazer uma entrada de dados é preciso declarar uma variável
*/

// node, reserva um espaço de memória chamado n e coloque nulo nesta variável
let n = ''
// node, instrua ao usuário para digitar seu nome
io.write('Digite seu nome:')
// node, espere o usuário digitar algo e depois do enter atribua ao espaço de memória n
n = io.read()
// node, escreva o conteúdo de n na tela
io.write('Olá ' + n)

/* 
CONJUNTOS, ELEMENTOS E EXPRESSÕES

Conjuntos importantes para programação:

Inteiros (int) = {...,-4,-3,-2,-1,0,1,2,3,4...}
Reais (float) = {...,2.5,3^(1/2),1,0,-67,...}
String (str) = {"", " ", 'Galo doido', 'Arnia vai realizar seu sonho'...}

O tipoo de uma variável é o conjunto de elementos que ela pode receber

Operadores = {+,-,/,*,**,%}

A definição do operador depende do conjunto dos operandos, exemplo:
1 + 2 é o resultado é 3
"A" + "B" o resultado é "AB"
"1" + "2" = "12"

*/
