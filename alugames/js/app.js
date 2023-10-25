const jogo1 = document.getElementById('game-1');
const jogo2 = document.getElementById('game-2');
const jogo3 = document.getElementById('game-3');
const jogos = [jogo1, jogo2, jogo3];

/*
TODO
- Função alterarStatus(x)
*/

function alterarStatus(jogo) {
  const jogoEscolhido = jogos[jogo - 1];
  const jogoEscolhidoImg = jogoEscolhido.children[0];
  const jogoEscolhidoBt = jogoEscolhido.children[2];
  const jogoEscolhidoStatus = jogoEscolhidoImg.classList;

  if (jogoEscolhidoBt.classList.contains('dashboard__item__button--return')) {
    jogoEscolhidoBt.innerHTML = 'Alugar';
  } else {
    jogoEscolhidoBt.innerHTML = 'Devolver';
  }
  jogoEscolhidoBt.classList.toggle('dashboard__item__button--return');
  jogoEscolhidoImg.classList.toggle('dashboard__item__img--rented');
}
