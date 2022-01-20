const produto = {
    nome: 'iPad Pro Branca',
    preco: 6999,
    desconto: 25
}

function clone(objeto){
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'iPad Pro Cinza'
console.log(produto, novoProduto)