function atribuirNotas(notas){
    let atribuicao = []
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            atribuicao.push('D')
        }else if(notas[i] > 4.9 && notas[i] <= 6.9){
            atribuicao.push('C')
        }else if(notas[i] > 6.9 && notas[i] <= 8.9){
            atribuicao.push('B')
        }else if(notas[i] > 8.9 && notas[i] <= 10){
            atribuicao.push('A')
        }else{
            atribuicao.push('Nota inválida')
        }
    }
    return atribuicao
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
vetor = atribuirNotas(notas)
console.log(vetor)