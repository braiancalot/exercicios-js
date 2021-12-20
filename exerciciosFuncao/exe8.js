function desempenho(pontuacoes){
    pontuacoes = pontuacoes.split(" ")
    let melhor = parseInt(pontuacoes[0])
    let pior = parseInt(pontuacoes[0])
    let piorJogo = 1
    let recordes = 0
    let resultado = []


    for(let i = 1; i < pontuacoes.length; i++){
        let atual = parseInt(pontuacoes[i])
        if(atual > melhor){
            melhor = atual
            recordes++
        }
        if(atual < pior){
            pior = atual
            piorJogo = i+1
        }
    }

    
    return [recordes, piorJogo]

}

pontu = "10 20 20 8 25 3 0 30 1"
console.log(desempenho(pontu))