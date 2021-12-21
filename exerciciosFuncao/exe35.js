let vetPilha = [1, 2, 3, 4, 5]
let vetAdiciona = [6, 7, 8, 9, 10]

function adicionar(vetP, vetA){
    for(let i = 0; i < vetA.length; i++){
        vetPilha.push(vetAdiciona[i])
    }
    console.log(`Vetor adiciona: ${vetA}\nVetor Resultado: ${vetP}`)
}

adicionar(vetPilha, vetAdiciona)
