//código do ator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
   

  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter) //foi usado para detectar as colisoes
  for (let i =0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if(colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if (pontosMaiorqueZero()){
          meusPontos -= 1;
        }
         
      
      }  
    }
}
function voltaAtorParaPosicaoInicial(){
    yAtor = 366;   //posicao inicial dele
  }

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60)) //estou preenchendo meu texto com uma cor
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){ //Preciso verificar a altura do meu personagem(ela tem uma posicao Y)
  if (yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorqueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}

