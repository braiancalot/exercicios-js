const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 76.5
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// usando destructuring
Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNasc',{
    enumerable: true,
    writable: false,
    value: '18/02/2000'
})

pessoa.dataDeNasc = '18/02/2001'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 3}
const o2 = {c: 2, a: 4}

const obj = Object.assign(dest, o1,  o2)
console.log(obj)

Object.freeze(obj)
obj.a = 5
console.log(obj)