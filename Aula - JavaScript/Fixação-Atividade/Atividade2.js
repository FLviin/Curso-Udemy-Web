function comparaNumeros(valor1, valor2){
    const frase = primeiraFrase(valor1,valor2)
    const frase2 = segundaFrase (valor1, valor2) 

    return` ${frase} ${frase2}`
}

function primeiraFrase (valor1, valor2){
    let saoIguais = '';

    if(valor1 !== valor2){
        saoIguais ='não'
    }
    return ` Os números ${valor1} e ${valor2} ${saoIguais} são iguais. `
}
function segundaFrase (valor1, valor2){
    const soma = valor1+valor2

    let resultado10 = 'menor'
    let resultado20 = 'menor'

    const compara10 = soma > 10
    const compara20 = soma > 20
    
    if(compara10) { resultado10 = 'maior'}
    if(compara20) { resultado20 = 'maior'}

    return ` Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(1,2))