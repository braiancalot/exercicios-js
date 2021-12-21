function notas (cod, n1, n2, n3){
    msg = `Código: ${cod}\nNota 1: ${n1}\nNota 2: ${n2}\nNota 3: ${n3}\n`
    media = (n1 * 4 + n2 * 3 + n3 * 3)/10
    msg += `Média Ponderada: ${media}\n`
    if(media >= 5){
        msg += `Situação: APROVADO`
    }else{
        msg += `Situação: REPROVADO`
    }

    return msg
}

console.log(notas(1, 7, 5, 5))

