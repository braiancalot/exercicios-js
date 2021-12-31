const alunos = [
    {nome: 'João', nota: 8.5, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 7.9, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
console.log(alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(!atual){
        acumulador = atual
    }
    return acumulador
}))

// OUUU
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))





// Desafio 2: Algum aluno é bolsista?
console.log(alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual){
        acumulador = atual
    }
    return acumulador
}))

// OUUU
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))