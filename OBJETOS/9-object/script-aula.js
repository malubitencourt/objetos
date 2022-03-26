// OBJECT
// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

// const carro = {
//   marca: 'VW',
//   ano: 2015,
// };

// const pessoas = new Object({
//   nome: 'Malu', 
//   idade: 23,
// });

//MÉTODOS DE OBJECT
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.


// const carro2 = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// };

// const civic = Object.create(carro2).init('Honda Civic');
// console.log(civic)

// const ferrari = Object.create(carro2).init('ferrari');
// console.log(ferrari); 


// OBJECT.ASSIGN()
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro2);
// console.log(moto);
// console.log(carro2);

// OBJECT.DEFINEPROPERTIES()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

// const  moto = {
//   capacete: true,
// };
// Object.defineProperties(moto, {
//   rodas:{
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + ' no total';
//     }
//   }
// })

// console.log(moto);

// OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


// OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

// Object.keys(Array);
// // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// console.log(Object.keys(carro)); // ['marca', 'ano']
// console.log(Object.values(carro)); // ['Ford', 2018]
// console.log(Object.entries(carro)); // [['marca', 'Ford'], ['ano', 2018]]


// OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

// const frutas = ['Banana', 'Pêra']
// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf('')); // String

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// console.log(Object.is(frutas1, frutas2)); // false


// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro);
// Object.seal(carro); // vai selar o objeto impedindo que sejam criadas novas propriedades e que valores criados antes não possam ser apagados.
// Object.preventExtensions(carro); // vai previnir que adicione novas propriedades mas permite que apague antigas.

// console.log(Object.isFrozen(carro)); //verifica se o objeto esta congelado // true
// console.log(Object.isSealed(carro)); //verifica se o objeto esta selado // true
// console.log(Object.isExtensible(carro)); //verifica se o objeto esta permitindo extensões // false


// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

// const frutas = ['Banana', 'Uva'];
// frutas.constructor; // Array

// const frase = 'Isso é uma String';
// frase.constructor; // String


// {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

// const frutas = ['Banana', 'Uva'];

// console.log(frutas.hasOwnProperty('map')); // false
// console.log(Array.hasOwnProperty('map')); // false
// console.log(Array.prototype.hasOwnProperty('map')); // true

// console.log(Array.prototype.propertyIsEnumerable('map')); // false
// console.log(window.propertyIsEnumerable('innerHeight')); // true


// {}.ISPROTOTYPEOF(VALOR)
// Verifica se é o protótipo do valor passado.

// const frutas = ['Banana', 'Uva'];

// console.log(Array.prototype.isPrototypeOf(frutas)); // true


// {}.TOSTRING()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

// const frutas = ['Banana', 'Uva'];
// console.log(frutas.toString()); // Banana,Uva
// console.log(typeof frutas); //object
// console.log(Object.prototype.toString.call(frutas)); //[object Array]

// const frase = 'Uma String';
// console.log(frase.toString()); // Uma String
// console.log(typeof frase); //String
// console.log(Object.prototype.toString.call(frase)); //[object String]

// const carro = {marca: 'Ford'};
// console.log(carro.toString()); // [object object]
// console.log(typeof carro); // object
// console.log(Object.prototype.toString.call(carro)); //[object object]

// const li = document.querySelectorAll('li');
// console.log(li.toString()); //[object NodeList]
// console.log(typeof li); //object
// console.log(Object.prototype.toString.call(li)); //[object NodeList]