const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Notebook', preco: 18.49, fragil: false}
]

console.log(produtos.filter(function(e){
    return false
}))

const fragil = produto => produto.fragil
const caro = produto => produto.preco => 500

console.log(produtos.filter(fragil).filter(caro))