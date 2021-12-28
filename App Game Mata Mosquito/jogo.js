// Definição do tamanho da tela para ajuste do game
var altura = 0
var largura = 0
// vidas no game
var vidas = 1
// cronometro
var tempo = 15

// Definição do Dificuldade do Game
var criaMosquitoTempo = 1500

var nivel = window.location. search // recupera apenas oq esta a partir do ponto de interrogação da URL
nivel = nivel.replace('?', '') // substituir o caracter '?' por um vazio, recuperando apenas o PARAMETRO encaminhado

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    var criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
    var criaMosquitoTempo = 750
}


function ajustaTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)

}
ajustaTela()

// controle de tempo
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {

    }
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)


// Posição dos Mosquitos na tela - Para não ficar em lugares fora da tela
function posicaoRandomica(){

    // remover elemento anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // contrele de vidas
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            // recupera e troca a imagem, incrementa vidas para ir para o proximo
            document.getElementById('v'+ vidas ).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criação do Elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoRandom() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

    document.body.appendChild(mosquito)

}
console.log(tamanhoRandom())

// Variação do tamanho do Mosquito
function tamanhoRandom(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// inversão de lado da imagem 
function ladoAleatorio(){

    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}