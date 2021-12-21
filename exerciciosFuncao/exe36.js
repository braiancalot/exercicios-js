function multiplicar (vet, num){
    let resultado = []
    for(let i = 0; i < vet.length; i++){
        resultado.push(vet[i] * num)
    }
    console.log(resultado)
}

function multiplicarPositivos (vet, num){
    let resultado = []
    for(let i = 0; i < vet.length; i++){
        if(vet[i] >= 0){
            resultado.push(vet[i] * num)
        }
    }
    console.log(resultado)
}

let vetor = [1, 2, -3, 4, 5]
multiplicar(vetor, 3)
multiplicarPositivos(vetor, 3)