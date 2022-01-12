function funcionar(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionar('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro especifico: ${err}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))