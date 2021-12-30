// Implementando MAP
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
        
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

let precos1 = carrinho.map2(function(e) {
    return JSON.parse(e).preco
})

console.log(precos1)

// OUUUUUUU

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
precos2 = carrinho.map2(paraObj).map2(apenasPreco)

console.log(precos2)