// STRING
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.


// const comida = 'pizza';
// const liquido = new String('Água');

// console.log(comida.length);

// const frase = 'A melhor comida';

// STR.LENGTH
// Propriedade com o total de caracteres da string.
// console.log(frase[frase.length - 1]);

// STR.CHARAT(N)
// Retorna o caracter de acordo com o index de (n).
// console.log(frase.charAt[1])

// STR.CONCAT(STR2, STR3, ...)
// Concatena as strings e retorna o resultado.
// const frase = 'A melhor linguaguem é ';
// const linguaguem = 'JavaScript';

// const fraseFinal = frase.concat(linguaguem, '!!', ' gostei da camisa' );
// console.log(fraseFinal);

// STR.INCLUDES(SEARCH, POSITION)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
// const fruta = 'Banana';
// const listaFrutas  = 'Melancia, Banana, laranja';

// console.log(listaFrutas.includes(fruta)); //true
// console.log(fruta.includes(listaFrutas)); //false

// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
// console.log(fruta.endsWith('na')); //true
// console.log(fruta.startsWith('na')); //false
// console.log(fruta.startsWith('Ba')); //true

// STR.SLICE(START, END)
// Corta a string de acordo com os valores de start e end.
// const transacao1 = 'Depósito do cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0,4)); //Depó
// console.log(transacao2.slice(0,6)); //Depósi
// console.log(transacao3.slice(0,4)); //Taxa

// console.log(transacao1.slice(12)); // cliente
// console.log(transacao1.slice(-4)); // ente
// console.log(transacao1.slice(3, 6)); // ósi

// STR.SUBSTRING(START, END)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
// const linguagem = 'JavaScript';

// console.log(linguagem.substring(3,5)); // aS
// console.log(linguagem.substring(0,4)); // Java
// console.log(linguagem.substring(4)); // Script
// console.log(linguagem.substring(-3)); // JavaScript

// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
// const instrumento = 'Guitarra'; 

// console.log(instrumento.indexOf('ra')); //6
// console.log(instrumento.lastIndexOf('i')); //2
// console.log(instrumento.indexOf('ta')); //3

// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
// const precos = ['R$ 99.00', 'R$ 120', 'R$ 15000'];

// precos.forEach((item) => {
//   console.log(item.padStart(20, '-'))
// })

// STR.REPEAT(N)
// Repete a string (n) vezes.
// const frase = 'Ta';
// console.log(frase.repeat(5)); //TaTaTaTaTa

// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias ';
// listaItens = listaItens.replace(/[ ]+/g,', ');

// console.log(listaItens)
