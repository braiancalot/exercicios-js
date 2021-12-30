const alunos = [
    {nome: 'João', nota: 8.5, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 7.9, bolsista: true}
]

console.log(alunos.map(a => a.nota))

console.log(alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10))