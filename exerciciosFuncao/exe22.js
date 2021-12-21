function anuidade(mes, valor){
    let t = mes - 1
    
    return (valor * (1+0.05) ** t).toFixed(2)

}

console.log(anuidade(4, 100))