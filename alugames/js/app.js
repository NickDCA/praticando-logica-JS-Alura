// MINHA SOLUÇÃO
// const jogo1 = document.getElementById('game-1');
// const jogo2 = document.getElementById('game-2');
// const jogo3 = document.getElementById('game-3');
// const jogos = [jogo1, jogo2, jogo3];

// function alterarStatus(id) {
//   const jogoEscolhido = jogos[id - 1];
//   const jogoEscolhidoImg = jogoEscolhido.children[0];
//   const jogoEscolhidoBt = jogoEscolhido.children[2];

//   if (jogoEscolhidoBt.classList.contains('dashboard__item__button--return')) {
//     jogoEscolhidoBt.innerHTML = 'Alugar';
//   } else {
//     jogoEscolhidoBt.innerHTML = 'Devolver';
//   }
//   jogoEscolhidoBt.classList.toggle('dashboard__item__button--return');
//   jogoEscolhidoImg.classList.toggle('dashboard__item__img--rented');
// }

// SOLUÇÃO ALURA
function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');

  if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.textContent = 'Alugar';
    botao.classList.remove('dashboard__item__button--return');
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
  }
}
