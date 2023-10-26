// // MINHA RESOLUÇÃO
// let produtoSelect = document.querySelector('select');
// let qntdProduto = document.getElementById('quantidade');
// let carrinho = document.getElementById('lista-produtos');
// let carrinhoTotal = document.getElementById('valor-total');
// let carrinhoTotalText = carrinhoTotal.textContent;
// let valorTotal = parseInt(
//   carrinhoTotalText.slice(carrinhoTotalText.indexOf('$') + 1)
// );
// // console.log(valorTotal);

// function adicionar() {
//   let produto = produtoSelect.value;
//   let produtoNome = produto.slice(0, produto.indexOf('-') - 1);
//   let produtoValor = parseInt(produto.slice(produto.indexOf('$') + 1));
//   let produtoQuantidade = parseInt(qntdProduto.value);
//   let subtotal = produtoValor * produtoQuantidade

//   //   console.table(produtoNome, produtoQuantidade, produtoValor);

//   valorTotal += subtotal;
//   //   console.log(valorTotal);
//   carrinhoTotal.textContent = 'R$' + valorTotal.toString();
//   carrinho.innerHTML += `
//       <section class="carrinho__produtos__produto">
//             <span class="texto-azul">${produtoQuantidade}x</span> ${produtoNome} <span class="texto-azul">R$${subtotal}</span>
//       </section>
//     `;

//   qntdProduto.value = 1;
// }

// function limpar() {
//   carrinhoTotal.textContent = 'R$0';
//   carrinho.innerHTML = '';
// }

// RESOLUÇÃO ALURA
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
  //recuperar valores: nome do produro, quantidade e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  //calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;
  //adicionar o produto no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>
  `;
  //atualizar o valor total
  totalGeral += preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}
