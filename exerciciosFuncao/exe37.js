function pa (n, a1, r){
    let soma = 0
    let termo
    termo = a1
    soma += termo
    msg = `PA: \n${termo}`
    for (let i = 1; i < n; i++){
        termo += r
        soma += termo
        msg += `\n${termo}`
    }
    msg += `\nSoma: ${soma}`
    return msg
}

function pg (n, a1, r){
    let soma = 0
    let termo
    termo = a1
    soma += termo
    msg = `PA: \n${termo}`
    for (let i = 1; i < n; i++){
        termo *= r
        soma += termo
        msg += `\n${termo}`
    }
    msg += `\nSoma: ${soma}`
    return msg
}

console.log(pa(10, 10, 15))
console.log("--------------")
console.log(pg(10, 5, 3))