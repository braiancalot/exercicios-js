// Object.preventsExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'Azul brilhante'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 20}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30

console.log(pessoa)

//Object.frezze => Selado + valores constantes