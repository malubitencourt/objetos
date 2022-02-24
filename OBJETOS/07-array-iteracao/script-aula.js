//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach(function(item, index, array) {
//   console.log(item.toUpperCase(), index, array);
// });

// //com Arrow Function que dispesa o uso da function, deixando o codigo mais simples
// carros.forEach((item, index, array) => {
//   console.log(item.toLowerCase());
// });

// //Arrow Function
// const li = document.querySelectorAll('li');

// li.forEach((item) => {item.classList.add('ativa')});

// li.forEach(function(item) {
//   item.classList.add('ativa');
// });

// console.log(li);

//Modificar a Array original
//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

// const retornoForEach = li.forEach((item, index) => {
//   item.classList.add('ativar' + index)
// });


// console.log(li)


//[].map()
//[].map(callback(item, index, array)); tem a mesma função do forEach() porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

// const Carros = ['Ford', 'VW', 'Rivian'];

// const newCarros = Carros.map((item) => {
//   return 'marca: ' + item;
// });

// console.log(Carros); //(3) ['Ford', 'VW', 'Rivian']
// console.log(newCarros); //(3) ['marca: Ford', 'marca: VW', 'marca: Rivian']



// ARROW FUNCTION E [].MAP()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map(n => n * 3);

// console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];

// [].MAP() VS [].FOREACH()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
// const numeros = [3, 142, 352, 352, 35, 235];
// const NumX2 = numeros.map(n => n*2);

// console.log(NumX2); //(6) [6, 284, 704, 704, 70, 470]

// [].MAP() COM OBJETOS
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min:15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ];

// const tempoAulas = aulas.map(aula => aula.min); 
// console.log(tempoAulas);
// //(4) [15, 10, 20, 25]

// const puxarNomes = aula => aula.nome;
// const nomeAulas = aulas.map(puxarNomes);  
// console.log(nomeAulas);
// //(4) ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// [].REDUCE()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// }, 0) 

// console.log(reduceAulas); // 65


// // MAIOR VALOR COM [].REDUCE()
// const numeros = [16, 7, 20, 31, 7, 20, 3, 49]; 
// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0
// );

// console.log(maiorNumero); // 49

//PODEMOS RETORNAR OUTROS VALORES

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]
// // console.log(aulas)

const listaAulas = aulas.reduce((acumulador, aula, index) =>{
  acumulador[index] = aula.nome;
  console.log(acumulador)
  return acumulador;
}, {})

// console.log(listaAulas)

//[].reduceRight()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// console.log(frutasRight); // Uva Pêra Banana
// console.log(frutasLeft); // Banana Pêra Uva

// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas = ['Banana', 'Pêra', 'Uva'];
// const temUva = frutas.some((fruta) => {
//   return fruta === 'Uva';
// }); 
// console.log(temUva); // true  

// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

// const todos = frutas.every((fruta) => {
//   return fruta;
// });

// console.log(todos) //true

const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(n => n > 3);

// console.log(maiorQue3) //true

// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

// const indexUvas = frutas.findIndex(i => i === 'Uva');
// console.log('Index: ', indexUvas)// Index: 2

// const buscaMaior44 = numeros.find(n => n > 44); //88
// console.log(buscaMaior44);

// [].FILTER()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas1.filter((fruta) => {
  return fruta;
});
console.log(arrayLimpa); //(3) ['Banana', 'Uva', 'Maçã']
 
const buscaMaior45 = numeros.filter(n => n > 45);
console.log(buscaMaior45); //(2) [88, 101]

//  FILTER EM OBJETOS

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
console.log(maiores15)