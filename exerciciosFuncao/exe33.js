let vet1 = [1, 2, 3, 4]
let vet2 = ['Uva', 'Morango', 'Abacaxi', 'Banana']
let vet3 = [2.3, 4.5, 1.2, 5.6]

function concatenar(...args){
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vet1, vet2))
console.log(concatenar(vet2, vet3))