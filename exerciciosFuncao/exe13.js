function diaUtil(dia){
    switch(dia){
        case 1:
            return "Fim de Semana"
            break;
        case 2: case 3: case 4: case 5: case 6:
            return "Dia útil"
            break;
        case 7:
            return "Fim de Semana"
            break;
        default:
            return "Dia inválido"
            break
    }

}

console.log(diaUtil(1))
console.log(diaUtil(5))
console.log(diaUtil(7))
console.log(diaUtil(3))
console.log(diaUtil(0))
