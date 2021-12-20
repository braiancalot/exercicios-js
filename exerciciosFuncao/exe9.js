function notas(nota){
    let notaFinal
    if(nota < 38){
        notaFinal = nota
        return ['Reprovado', notaFinal]
    }else{
        let resto = nota % 5
        let diferenca = 5 - resto
        if(diferenca < 3){
            notaFinal = nota + diferenca
        }else{
            notaFinal = nota
        }
    }

    return ['Aprovado', notaFinal]
}

console.log(notas(83))
console.log(notas(29))
console.log(notas(38))
console.log(notas(83))
