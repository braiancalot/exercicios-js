primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Pedro', 'Tomas', 'Bia'])
})
    .then(primeiroElemento) // pegar primeiro valor
    .then(primeiroElemento)  // pegar primeira letra
    .then(letraMinuscula) // deixar letra em minuscula
    //.then(valor => console.log(valor))
    .then(console.log) // imprimir resultado