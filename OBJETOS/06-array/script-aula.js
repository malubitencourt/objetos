// // Arrays
// // Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('ford', 'fiat', 'honda');

// carros[2] = 'lamburguini';
// carros[3] = 'tesla';
// carros[19] = 'toyota';

// console.log(carros.length); //mostra a quantidade de caracteres na Array

// const li = document.querySelectorAll('li');
// const arrayli = Array.from(li); //transforma nodelist em Array

// console.log(li);
// console.log(arrayli);

// const obj = {
//   0: 'Maria',
//   1: 'Luisa',
//   2: 'teste',
//   length: 3,
// };

// const objarray = Array.from(obj); //transforma objetos em Array

// console.log(objarray);

// // isArra verifica se o valor passado é uma array e retorna um valor booleano
// console.log(Array.isArray(li));
// console.log(Array.isArray(arrayli));

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length); // 3

// console.log(frutas[0].length); // 6
// console.log(frutas[1].length); // 4
// console.log(frutas[2].length); // 2

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();//organiza em ordem alfabetica

// const idades = [32,21,33,43,1,12,8];
// idades.sort()

// console.log(instrumentos);
// console.log(idades);

// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // (5)['Honda', 'Kia', 'Ford', 'Fiat', 'VW'] 
// carros.push('Ferrari'); // (6) ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
// console.log(carros); 
// console.log(carros.pop()); // Ferrari
// console.log(carros); // (5) ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']
// console.log(carros.shift()); // Honda
// console.log(carros); // (4) ['Kia', 'Ford', 'Fiat', 'VW']
// console.log(carros.reverse()); // (4) ['VW', 'Fiat', 'Ford', 'Kia']
// console.log(carros);
// console.log(carros.splice(2,0, 'Fusca')); //[]
// console.log(carros); //(7) ['Honda', 'Kia', 'Fusca', 'Ford', 'Fiat', 'VW', 'Ferrari']

// console.log(['item1', 'item2', 'item3', 'item4', 'item5',].copyWithin(2,0,2)); // Copia itens dentro da Array dizendo quantos itens vai copiar, aonde começa e aonde termina.

// console.log(['item1', 'item2', 'item3', 'item4', 'item5',].fill('leite', 0, 2)); // Preenche a Array com o valor desejado e tem como determinar em qual item começa e termina.

// const transporte1 = ['Barco', 'Avião'];
// const transporte2 = ['Carro', 'Moto'];
// const transprotes = transporte1.concat(transporte2); // (4) ['Barco', 'Avião', 'Carro', 'Moto']
// const maistrans = [].concat(transporte1, transporte2, 'van', 'balça'); // (6) ['Barco', 'Avião', 'Carro', 'Moto', 'van', 'balça']
// console.log(transprotes);
// console.log(maistrans);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// //[].includes() verifica se existe o valor dentro da array e retorna um booleano.
// console.log(linguagens.includes('css')); // true 
// console.log(linguagens.includes('ruby')); // false

// //[].indexOf() verifica se existe o calor dentro da array e retorna a sua posição.
// console.log(linguagens.indexOf('python')); // 4
// console.log(linguagens.indexOf('js')); // 2

// //[].lastIndexOf() retorna a posição da ultima vez que o item aparece na array
// console.log(linguagens.lastIndexOf('js')); // 5 

// // [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
// console.log(linguagens.join()); // 'html,css,js,php,python'
// console.log(linguagens.join(' ')); // 'html css js php python'
// console.log(linguagens.join('-_-')); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2'); // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1'); // <h1>Título Principal</h1>

// console.log(htmlString)


console.log(linguagens.slice(3)); // (3) ['php', 'python']
console.log(linguagens.slice(1, 4)); // (3) ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens)