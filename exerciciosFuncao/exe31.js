function negativos(vet){
    let qtde = 0
    for(let i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            qtde++
        }
    }

    console.log(`Negativos: ${qtde}`)
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
negativos(vetor)