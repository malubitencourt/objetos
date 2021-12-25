//PROTOTYPE
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade) { 
  this.nome = nome;
  this.idade = idade;
}

//FUNCAO.PROTOTYPE
Pessoa.prototype.andar = function() { // É possível adicionar novas propriedades e métodos ao objeto prototype.
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}

const malu = new Pessoa('malu', 28);

// console.log(Pessoa.prototype); // retorna o objeto
// console.log(malu.prototype); // undefined 

// CONSTRUTORES NATIVOS
//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil';
const cidade = new String('Recife');

//É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

const lista = document.querySelectorAll('li');

//transforma em um array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

// ENTENDA O QUE ESTÁ SENDO RETORNADO
// Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
const Carro = {
  marca: 'Ford',
  modelo: 'Ka',
  preco: 20000,
  andar() {
    return true;
  }
};

// Carro // Object
// Carro.marca // String
// Carro.preco // Number
// Carro.acelerar // Function
// Carro.acelerar() // Boolean
// Carro.marca.charAt // Function
// Carro.marca.charAt(0) // String
