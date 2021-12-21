function trocarVet(vet1, vet2){
    if(vet1.length == vet2.length){
        for(let i = 0; i < vet1.length; i++){
            vet1[i] = vet1[i] + vet2[i]
            vet2[i] = vet1[i] - vet2[i]
            vet1[i] = vet1[i] - vet2[i]
        } 
    }else{
        return 'Vetores de tamanhos diferentes'
    }
    console.log('Vetor 1: ' + vet1)
    console.log('Vetor 2: ' + vet2)
}

vet1 = [1,2,3]
vet2 = [4,5,6]
trocarVet(vet1, vet2)