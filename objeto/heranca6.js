function Aula(nome, videoId){
    this.nome = nome,
    this.videoId = videoId
}

aula1 = new Aula('Bem vindo', 1)
aula2 = new Aula('Introdução', 2)

console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    obj1 = {}
    obj1.__proto__ = f.prototype
    f.apply(obj1, params)
    return obj1
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Introdução', 456)

console.log(aula3, aula4)