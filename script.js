const btnCriar = document.querySelector('#criar-tarefa');
const ordenadelist = document.querySelector('#lista-tarefas');
// requisito 09 -
function riscaItem(event) {
  if (event.target.classList[0] === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// requisito 7 e 8
function destacaItem(event) {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = '#808080';
}
// cria nova tarefa
function novaTarefa() {
  const texto = document.querySelector('#texto-tarefa').value;
  const caixa = document.getElementById('texto-tarefa');
  caixa.value = '';
  const item = document.createElement('li');
  item.innerText = texto;
  ordenadelist.appendChild(item);
  ordenadelist.addEventListener('click', destacaItem);
  ordenadelist.addEventListener('dblclick', riscaItem);
}
btnCriar.addEventListener('click', novaTarefa);
// requisito 10
const botãodeApagar = document.getElementById('apaga-tudo');
function apagaGeral() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    ordenadelist.removeChild(lis[i]);
  }
}
botãodeApagar.addEventListener('click', apagaGeral);
// requisito 11
const btnApagarFinalizados = document.getElementById('remover-finalizados');
function apagaFinalizados() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].className === 'completed') {
      ordenadelist.removeChild(lis[i]);
    }
  }
}
btnApagarFinalizados.addEventListener('click', apagaFinalizados);
// requisito 12
const btnSalvar = document.getElementById('salvar-tarefas');
function armazenarLocalStorade() {
  localStorage.setItem('tarefas-salvas', ordenadelist.innerHTML);
}
btnSalvar.addEventListener('click', armazenarLocalStorade);
function recuperaLocalStorage() {
  ordenadelist.innerHTML = localStorage.getItem('tarefas-salvas');
}
window.onload = function () {
  recuperaLocalStorage();
  ordenadelist.addEventListener('click', destacaItem);
  ordenadelist.addEventListener('dblclick', riscaItem);
};
// requisito 13 referencia: https://www.w3schools.com/jsref/dom_obj_all.asp
// mover cima
const btnUp = document.getElementById('mover-cima');
function subir() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].style.backgroundColor === 'rgb(128, 128, 128)' && i > 0) {
      const anterior = itens[i].previousSibling;
      console.log(anterior);
      ordenadelist.insertBefore(itens[i], anterior);
    }
  }
}
btnUp.addEventListener('click', subir);
//mover baixo//
const btnDown = document.getElementById('mover-baixo');
function descer() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].style.backgroundColor === 'rgb(128, 128, 128)' && i < itens.length - 1) {
      const subsequente = itens[i].nextSibling;
      console.log(subsequente);
      ordenadelist.insertBefore(subsequente, itens[i]);
    }
  }
}
btnDown.addEventListener('click', descer);
//requisio 14//
const btnRmselecionado = document.getElementById('remover-selecionado');
function rmSelecionado() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      ordenadelist.removeChild(itens[i]);
    }
  }
}
btnRmselecionado.addEventListener('click', rmSelecionado);
