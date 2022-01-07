// tagged templates - processa o template dentro de uma função
function tag (partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Está é outra String'
}

const aluno = 'Ana'
const nota = 9.8

console.log(tag `${aluno} teve uma nota ${nota}!`)