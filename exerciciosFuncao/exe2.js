function verificarTriangulo (a, b, c){
    if (a != b && b != c && c != a){
        return "Escaleno"
    }

    if(a == b && b == c){
        return "Equilatero"
    }

    return "Isósceles"
}

function verificarTrianguloResposta(a, b, c){
    if(a == b && b == c){
        return "Equilatero"
    }else if(a == b || b == c || a == c){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

console.log(verificarTriangulo(1,2,3))
console.log(verificarTriangulo(1,1,2))
console.log(verificarTriangulo(1,2,1))
console.log(verificarTriangulo(2,1,1))
console.log(verificarTriangulo(1,1,1))


console.log(verificarTrianguloResposta(2, 2, 2))
console.log(verificarTrianguloResposta(2, 3, 3))
console.log(verificarTrianguloResposta(2, 3, 4))