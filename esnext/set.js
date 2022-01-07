// Não aceita repetição, não indexada
const times = new Set()
times.add('São Paulo')
times.add('Flamendo').add('Palmeiras').add('Vasco')
times.add('Goiais')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))
console.log(times.size)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)