function impares(ini = 0, fim = 100){
    if(ini > fim){
        let aux = ini
        ini = fim
        fim = aux
    }

    for(let i = ini; i <= fim; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}

impares(19, 3)