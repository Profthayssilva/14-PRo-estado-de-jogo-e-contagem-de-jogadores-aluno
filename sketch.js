var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  // Adicione a imagem para os jogadores usando loadImage:
  car1_img = loadImage ("assets/car1.png");
 
  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);


  // Atualize o gameState para quando o playerCount atingir 2
  if (playerCount === 2){
   
  }

  if (gameState === 1) {
    // Mude o gameState para play

  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
