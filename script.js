const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerHTML = 'Bem-vindo à minha loja online';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.className = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerHTML = 'Produto Incrível';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerHTML =
  'Este é o melhor produto que você já viu. Compre agora!';

const precoProduto = document.createElement('p');
precoProduto.innerHTML = 'Preço: R$ 99,99';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

document.body.appendChild(produto);
