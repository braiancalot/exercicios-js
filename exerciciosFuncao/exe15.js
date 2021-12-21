function venderVeiculo(veiculo){
    switch(veiculo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

venderVeiculo('hatch')
venderVeiculo('sedan')
venderVeiculo('motocicleta')
venderVeiculo('caminhonete')
venderVeiculo('hilux')
