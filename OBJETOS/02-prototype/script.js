// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function Pessoa(nome, idade) {
  this.nome = nome,
  this.idade = idade,
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}
const joao = new Pessoa('João', '20 anos');
const maria = new Pessoa('Maria', '25 anos');
const bruno = new Pessoa('Bruno', '15 anos');


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  const elementList = document.querySelectorAll(selector);
  this.elements = elementList;
  
  this.addClass = function(classe) {
    elementList.forEach((element) => { 
      element.classList.add(classe);
    });
  },
  this.removeClass = function(classe) {
    elementList.forEach((classe) => {
      element.classList.remove(classe);
  });
  }
};
const listaItens = new Dom('li');