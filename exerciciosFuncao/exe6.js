function jurosSimples(c, i, t){
    return c * (1 +  i * t)
}

function jurosCompostos(c, i, t){
    return c * ((1+i) ** t)
}

console.log(jurosSimples(10000, 0.04, 8))
console.log(jurosCompostos(10000, 0.04, 8).toFixed(2))