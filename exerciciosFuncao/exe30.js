function maiorMenor(vet){
    let menor = vet[0]
    let maior = vet[0]
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > maior){
            maior = vet[i]
        }
        if(vet[i] < menor){
            menor = vet[i]
        }
    }

    console.log(`Maior: ${maior}\nMenor: ${menor}`)
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
maiorMenor(vetor)