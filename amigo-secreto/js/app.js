let listaAmigos = [];
let listaSorteio = document.getElementById('lista-sorteio');
let amigosSorteados = [];

function adicionar() {
  let nomeAmigo = document.querySelector('#nome-amigo').value;
  listaAmigos.push(nomeAmigo);
  console.table(listaAmigos);

  let amigosIncluidos = document.querySelector('#lista-amigos');
  if (listaAmigos.length > 1) {
    amigosIncluidos.textContent += `, ${nomeAmigo}`;
  } else {
    amigosIncluidos.textContent = `${nomeAmigo}`;
  }

  document.querySelector('#nome-amigo').value = '';
}

function sortear() {
  let amigoPar = parAleatório();
  //   console.log(amigoPar);
  listaAmigos.forEach((amigo) => {
    if (!amigosSorteados.includes(amigo)) {
      amigosSorteados.push(amigo);
      //   console.table(amigosSorteados);
      while (
        (amigoPar == amigo || amigosSorteados.includes(amigoPar)) &&
        amigosSorteados.length != listaAmigos.length
      ) {
        amigoPar = parAleatório();
      }
      amigosSorteados.push(amigoPar);
      if (listaAmigos.indexOf(amigo) == listaAmigos.length - 1) {
        listaSorteio.innerHTML += `
            ${amigo} -> ${listaAmigos[0]}<br>
        `;
      } else {
        listaSorteio.innerHTML += `
        ${amigo} -> ${amigoPar}<br>
    `;
      }
    }
  });
}

function parAleatório() {
  return listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
}

function reiniciar() {
  listaSorteio.innerHTML = '';
  document.querySelector('#lista-amigos').textContent = '';
  listaAmigos = [];
  amigosSorteados = [];
}
