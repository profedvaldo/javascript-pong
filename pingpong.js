/*function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(255,255,255); 
}*/
//aqui estou criando e configurando a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamanhoBolinha = 25;
let raioBolinha = tamanhoBolinha/2;

//aqui estou configurando a velocidade da bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

//área de desenho
function draw() {
  background(128, 128, 0);
//chamada das funções
  criaBolinha(xBolinha, yBolinha, tamanhoBolinha);
  movimentaBolinha();
  bolinhaBorda();
  criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  movimentaRaquete();
  colideRaquete();
}

function criaBolinha(xBolinha, yBolinha, tamanhoBolinha) {
  //aqui criamos a bolinha e a pintamos de vermelho (adição do professor)
  fill("red");
  circle(xBolinha, yBolinha, tamanhoBolinha);
}

//função responsavel pela movimentação da bolinha
function movimentaBolinha() {
 
  xBolinha = xvelocidadeBolinha + xBolinha;
  yBolinha = yvelocidadeBolinha + yBolinha;
}
///função responsável pela bolinha não sair fora do "campo/mesa"
function bolinhaBorda() {
  if (xBolinha > width || xBolinha < 0) {
    xvelocidadeBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0){
    yvelocidadeBolinha *= -1;
  }
}
//função responsável por criar o retângulo que representa a raquete
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
  fill("blue");
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//função responsável por movimentar a raquete
function movimentaRaquete() {
 
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
 
}
//função responsável por quando a bolinha bater na raquete, retornar em direção contrária.
function colideRaquete(){
 
  if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
   
    xvelocidadeBolinha *= -1;
     
     }
 
}
