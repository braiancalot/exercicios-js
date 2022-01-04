Array.prototype.reduce2 = function(callback, valorInicial){
    const indice = valorInicial? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indice; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const numeros = [1, 2, 3, 4, 5, 6]
const soma = (total, valor) => total + valor

console.log(numeros.reduce(soma, 10))
console.log(numeros.reduce(soma))