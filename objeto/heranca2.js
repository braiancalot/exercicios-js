// Cadeira de Protótipos (prototype chain)
Object.prototype.atr0 = '0' // NAO FAÇA ISSO!!!!

const avo = {atr1: 'A'}
const pai = {__proto__: avo, atr2: 'B', atr3: '3'}
const filho = {__proto__: pai, atr3: 'C'}

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3, filho.atr4)

const carro ={
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    } 
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(220)
console.log(ferrari.status())