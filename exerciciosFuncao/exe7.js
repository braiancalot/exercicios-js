function bhaskara(a, b, c){
    let delta = b ** 2 - 4 * a * c
    if(delta < 0){
        return "Delta é negativo"
    }else{
        let raizes = []
        x1 = (-b + Math.sqrt(delta)) / 2*a
        raizes.push(x1)
        x2 = (-b - Math.sqrt(delta)) / 2*a
        raizes.push(x2)
        return raizes
    }
}

console.log(bhaskara(4, 8, 1))
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))