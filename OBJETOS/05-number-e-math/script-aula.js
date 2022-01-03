//NUMBER
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

// const ano = 2019;
// const preco = new Number(120);
// console.log(ano, preco);


// NUMBER.ISNAN() E NUMBER.ISINTEGER();
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

// console.log(Number.isNaN(NaN)); //true
// console.log(Number.isNaN(15)); //false
// console.log(Number.isNaN('oi')); //false

// console.log(Number.isInteger(15)); //true
// console.log(Number.isInteger(15.2)); //false


// NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
// parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

// parseFloat('99.50'); //Mesma função sem o Number
// console.log(Number.parseFloat('99.50')); // 99.5
// console.log(Number.parseFloat('100 Reais')); // 100
// console.log(Number.parseFloat('R$ 100')); // NaN

// Float possui decimal, Integer não.

// console.log(parseInt('99.50', 10)); // 99
// console.log(parseInt(5.5165198195, 10)); // 5
// console.log(Number.parseInt('100 reais', 10)); // 100


// N.TOFIXED(DECIMAIS)
// Arredonda o número com base no total de casas decimais do argumento.
// Retorna uma String

// const preco2 = 4.99;
// console.log(preco2.toFixed()) // '5'

// const carro = 1499.240;
// console.log(carro.toFixed(2)) // '1499.24'

// const preco3 = 1000.455; 
// console.log(preco3.toFixed(2)) // '1000.46'


// N.TOSTRING(RADIX)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

// const preco4 = 3.99
// console.log(preco4.toString(10)); // '3.99'


// N.TOLOCALESTRING(LANG, OPTIONS);
// Formata o número de acordo com a língua e opções passadas.

// let preco5 = 59.99
// preco5 = preco5.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
// console.log(preco5);

// MATH
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
// console.log(Math.PI) // 3.14159
// console.log(Math.E) // 2.718
// console.log(Math.LN10) // 2.303


// MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.
// console.log(Math.abs(-5.5)); // 5.5

// ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
// console.log(Math.ceil(4.652198)); // 5
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.8334)); // 4
// console.log(Math.floor(4.3)); // 4

// round() arredonda para o número integral mais próximo.
// console.log(Math.round(4.8334)); // 5
// console.log(Math.round(4.3)); // 4
 

// MATH.MAX(), MATH.MIN() E MATH.RANDOM();
// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

console.log(Math.max(5,3,10,42,2));
console.log(Math.min(5,3,10,42,2));

console.log(Math.random()); // 0.XXX
console.log(Math.floor(Math.random() * 100)); // entre 0 e 100
console.log(Math.floor(Math.random() * 500));  // entre 0 e 500

// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32); 
console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);