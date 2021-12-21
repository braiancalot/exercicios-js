function lerVetor(vet){
    let qtdePares = 0
    let qtdeImpares = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            qtdePares++
        }else{
            qtdeImpares++
        }
    }
    console.log(`Pares: ${qtdePares}\nImpares: ${qtdeImpares}`)
}

let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
lerVetor(vet)