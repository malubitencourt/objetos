// FUNCTION
// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

// const perimetro = new Function ('lado', 'return lado * 4');
// console.log(perimetro(6)); //24


//PROPRIEDADES
//Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(3, 5))
// console.log(somar.length); // 2
// console.log(somar.name); // 'somar'


//METODOS

//FUNCTION.CALL()
//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
// function darOi(nome) {
//   console.log('Oi ' + nome + ', é um prazer te conhecer');
// };

// darOi.call({}, 'malu');

// const carro = {
// marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
// console.log(this.marca + ' ' + this.ano); // Ford 2018
// }

// console.log(descricaoCarro());// undefined
// console.log(descricaoCarro.call());// undefined
// console.log(descricaoCarro.call(carro)); // undefined


//this
// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// }); // Log de cada Fruta


// EXEMPLO REAL
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// };

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// const ul = new Dom('ul');

// ul.ativo.call(li, 'ativo'); //element: li.ativo
// ul.ativo('ativo'); //element: ul.ativo

// O OBJETO DEVE SER PARECIDO
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

// const li = {
  //   element: document.querySelector('li')
  // }
  
// Dom.prototype.ativo.call(li, 'ativar');


// ARRAY'S E CALL
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).


// const frutas = ['Banana', 'Pera', 'Uva']; 

// Array.prototype.pop.call(frutas); //['Banana', 'Pera']
// frutas.pop(); //['banana']
// console.log(frutas); 


// ARRAY-LIKE
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, (item)=>{
//   return item.classList.contains('ativo')
// })

// console.log(li);
// console.log(filtro); //(2) [li.ativo, li.ativo]


// FUNCTION.APPLY()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

// const numeros = [3,4,6,1,34,44,32];

// console.log(Math.max(numeros)); // NaN
// console.log(Math.max.call(null ,numeros)); // NaN
// console.log(Math.max.apply(null, numeros)); // 44


// APPLY VS CALL
// A única diferença é a array como segundo argumento.

// const li = document.querySelectorAll('li');

// function itemPossuiAtivo(item) {
//   return item.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo); 
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);
// console.log(filtro1); //(2) [li.ativo, li.ativo]
// console.log(filtro2); //(2) [li.ativo, li.ativo]


// FUNCTION.BIND()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

// const li = document.querySelectorAll('li');

// const filtro3 = Array.prototype.filter.bind(li, function(item){
//   return item.classList.contains('ativo');
// });

// console.log(filtro3()); //(2) [li.ativo, li.ativo]


// ARGUMENTOS E BIND
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }

// const Honda = {
//   marca: 'Honda'
// };

// const acelerarHonda = carro.acelerar.bind(Honda, 100);

// console.log(carro.acelerar(100, 14)); //Ford acelerou 100 em 14
// console.log(acelerarHonda(14)) //Honda acelerou 100 em 14


// ARGUMENTOS COMUNS
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
  return peso / (altura * altura);
}



console.log(imc(1.78, 100));
