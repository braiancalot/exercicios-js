function troco(dinheiro){
    let cedulas100
    let cedulas50
    let cedulas10
    let cedulas5
    let cedulas1
    let msg = ``

    if(dinheiro > 100){
        cedulas100 = Math.floor(dinheiro/100)
        dinheiro = dinheiro % 100
        msg += `${cedulas100} nota(s) de R$ 100. `
    }
    if(dinheiro > 50){
        cedulas50 = Math.floor(dinheiro/50)
        dinheiro = dinheiro % 50
        msg += `${cedulas50} nota(s) de R$ 50. `
    }
    if(dinheiro > 10){
        cedulas10 = Math.floor(dinheiro/10)
        dinheiro = dinheiro % 10
        msg += `${cedulas10} nota(s) de R$ 10. `
    }
    if(dinheiro > 5){
        cedulas5 = Math.floor(dinheiro/5)
        dinheiro = dinheiro % 5
        msg += `${cedulas5} nota(s) de R$ 5. `
    }
    if(dinheiro > 1){
        cedulas1 = Math.floor(dinheiro/1)
        msg += `${cedulas1} nota(s) de R$ 1.`
    }

    console.log(msg)
}

troco(300)
troco(18)
troco(37)