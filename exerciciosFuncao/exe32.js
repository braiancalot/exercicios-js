function mediaVetor(vet){
    let soma = 0
    for(let i = 0; i < vet.length; i++){
        soma += vet[i]
    }
    return soma/vet.length
}   
vetor = [1, 2, 3, 4, 5, 6]
console.log(mediaVetor(vetor))