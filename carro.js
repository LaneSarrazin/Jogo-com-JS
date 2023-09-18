//código do carro

let xCarro = [600,600,600,600,600,600];
let yCarro = [40,96,150,210,270,318];
let velocidadeCarro = [1, 1.5 ,1, 1.5, 1, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
  
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarro[0] -= velocidadeCarro[0];
    xCarro[1] -= velocidadeCarro[1];
    xCarro[2] -= velocidadeCarro[2];
  }

}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarro[i])){ //ele verifica se o x do carro e menor que -50 se o carro ja passou toda a tela
      xCarro[i] = 600;
    }
  
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}
