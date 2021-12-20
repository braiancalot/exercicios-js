function converter(num){
    return `R$${num.toFixed(2).toString().replace(".", ",")}`
}

console.log(converter(0.30000000000009))