function contarVetor(vet){
    let dentro = 0
    let fora = 0
    let intervalo = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    for(let i = 0; i < vet.length; i++){
        if(intervalo.includes(vet[i])){
            dentro++
        }else{
            fora++
        }
    }

    console.log(`Dentro: ${dentro}\nFora: ${fora}`)
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
contarVetor(vetor)