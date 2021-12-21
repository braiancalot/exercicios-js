function alturas(h1, h2, tx1, tx2){
    if(h1 == h2){
        if(tx1 > tx2){
            return 'Criança 1 ultrapassará criança 2 em 1 ano'
        }else if(tx1 < tx2){
            return 'Criança 2 ultrapassará criança 1 em 1 ano'
        }else{
            return 'Crianças tem a mesma idade e mesma taxa de crescimento'
        }
    } else{
        if(h1 > h2){
            if(tx1 >= tx2){
                return 'Criança 1 é mais velha e não será ultrapassada'
            } else {
                return `Criança 1 será ultrapassada em ${calcularAnos(h1, h2, tx1, tx2)} ano(s)`
            }
        } else{
            if(tx2 >= tx1){
                return 'Criança 2 é mais velha e não será ultrapassada'
            } else {
                return `Criança 2 será ultrapassada em ${calcularAnos(h2, h1, tx2, tx1)} ano(s)`
            }
        }
    }
}

function calcularAnos(maiorH, menorH, maiorTx, menorTx){
    let anos = 0
    while(menorH <= maiorH){
        menorH += menorTx
        maiorH += maiorTx
        anos++
    }
    return anos
}

console.log(alturas(150, 140, 2, 4))
console.log(alturas(150, 140, 2, 2))
console.log(alturas(150, 150, 2, 2))
console.log(alturas(150, 140, 3, 1))
console.log(alturas(140, 140, 2, 3))
console.log(alturas(100, 140, 5, 4))