function compararStrings(str1, str2){
    let estaContido = true
    for(let i = 0; i < str1.length; i++){
        car1 = str1.charAt(i).toLowerCase()
        for(let j = 0; j < str2.length; j++){
            car2 = str2.charAt(j).toLowerCase()
            if(car1 == car2){
                estaContido = true
                break
            }else{
                estaContido = false
            }
        }
        if(!estaContido){
            return estaContido
        }
    }
    return estaContido
}

console.log(compararStrings('abcat', 'bcae'))

