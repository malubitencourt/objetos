// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) { 
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const malu = new Pessoa('Maria Luisa', 'Bitencourt de Sousa', 23);

console.log(malu.nomeCompleto())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames = (NodeList.prototype);
Object.getOwnPropertyNames = (HTMLAllCollection.prototype);
Object.getOwnPropertyNames = (Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // null

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
