// usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
obj2 = new Object()
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 9, 0.1)
const p2 = new Produto('Notebook', 2998.99, 0.25 )
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto().toFixed(2))

// Função Factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Ana', 3000, 5)
const f2 = criarFuncionario('João', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)