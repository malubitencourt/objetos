//NUMBER
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2019;
const preco = new Number(120);
console.log(ano, preco);


// NUMBER.ISNAN() E NUMBER.ISINTEGER();
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(15)); //false
console.log(Number.isNaN('oi')); //false

console.log(Number.isInteger(15)); //true
console.log(Number.isInteger(15.2)); //false


// NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
// parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50'); //Mesma função sem o Number
console.log(Number.parseFloat('99.50')); // 99.5
console.log(Number.parseFloat('100 Reais')); // 100
console.log(Number.parseFloat('R$ 100')); // NaN

//Float possui decimal, Integer não.

console.log(parseInt('99.50', 10)); // 99
console.log(parseInt(5.5165198195, 10)); // 5
console.log(Number.parseInt('100 reais', 10)); // 100


// N.TOFIXED(DECIMAIS)
// Arredonda o número com base no total de casas decimais do argumento.
// Retorna uma String

const preco2 = 4.99;
console.log(preco2.toFixed()) // 5

const carro = 1499.240;
console.log(carro.toFixed(2)) // 1499.24

const preco3 = 1000.455; 
console.log(preco3.toFixed(2)) // 1000.46


// N.TOSTRING(RADIX)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco4 = 3.99
console.log(preco4.toString(10)); // '3.99'