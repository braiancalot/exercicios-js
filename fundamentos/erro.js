function tratarErroELanca(erro){
    //throw new Error('Erro')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELanca(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = {nome: 'Pedro'}

imprimirNomeGritando(obj)