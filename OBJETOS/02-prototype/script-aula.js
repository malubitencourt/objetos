function Carro(marcaAtribuida, precoAtribuida){
  this.marca = marcaAtribuida;
  this.preco = precoAtribuida;
};

const upTsi = new Carro();
upTsi.marca = 'volkswagem';
upTsi.preco = 40000;
const palio = new Carro();
palio.marca = 'fiat';
palio.preco = 30000;


function Caminhao(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
};

const scania = new Caminhao('Scania', 300000);


// const DOM = {
//   selector: 'li',
//   element() {
//     return document.querySelector(this.selector);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// };

function DOM(selector) {
  this.element = function() {
    return document.querySelector(selector);
  },
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
};

const li = new DOM('li');
const ul = new DOM('ul');

const lastLi = new DOM('li:last-child');
lastLi.ativar('ativo')