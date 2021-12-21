function fruta(fruta){
    let msg
    switch(fruta){
        case 'maçã':
            msg = 'Não vendemos esta fruta aqui.'
            break
        case 'kiwi':
            msg = 'Estamos com escassez de kiwis.'
            break
        case 'melancia':
            msg = 'Aqui está, são 3 reais o quilo.'
            break
        default:
            msg = 'Erro.'
            break
    }
    return msg
}

console.log(fruta('melancia'))
console.log(fruta('maçã'))
console.log(fruta('kiwi'))
console.log(fruta('uva'))


