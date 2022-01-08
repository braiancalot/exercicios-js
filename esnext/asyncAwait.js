// sem promise...
// com promise
const http = require('http')
const { concat } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject
                }
            })
        })
    })
    
}

// Recurso do ES8
// Objetivo é simplificar o uso de promises...
let obterAlunos = async () => {
    ta = await getTurma('A')
    tb = await getTurma('B')
    tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

