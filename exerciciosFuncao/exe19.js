function cardapio(cod, qtd){
    switch(cod){
        case 100:
            console.log(qtd * 3)
            break
        case 200:
            console.log(qtd * 4)
            break
        case 300:
            console.log(qtd * 5.5)
            break
        case 400:
            console.log(qtd * 7.5)
            break
        case 500:
            console.log(qtd * 3.5)
            break
        case 600:
            console.log(qtd * 2.8)
            break
        default:
            console.log('Produto não existente')
            break

    }
}

cardapio(200, 5)
cardapio(100, 2)
cardapio(200, 2)
cardapio(300, 2)
cardapio(400, 2)
cardapio(500, 2)
cardapio(600, 2)
cardapio(700, 2)