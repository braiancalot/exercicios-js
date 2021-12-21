function calc(a, b, op){
    switch (op){
        case '+':
            console.log (a + b)
            break
        case '-':
            console.log (a - b)
            break
        case '*':
            console.log (a * b)
            break
        case '/':
            console.log (a / b)
            break
       default:
            console.log ('Operador inválido')
            break
    }
}

calc(10, 2, '+')
calc(10, 2, '-')
calc(10, 2, '*')
calc(10, 2, '/')
calc(10, 2, '%')