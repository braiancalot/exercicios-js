const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const acharMulher = funcionario => funcionario.genero === 'F'
const acharChinesa = funcionario => funcionario.pais === 'China'
const menorSalario = (func, funcA) => {
    return func.salario < funcA.salario ? func : funcA
}


axios.get(url).then(response => {
    const funcionarios = response.data
    
    //Mostrar MULHER CHINESA com menor SALARIO
    console.log(funcionarios.filter(acharMulher).filter(acharChinesa).reduce(menorSalario))
})