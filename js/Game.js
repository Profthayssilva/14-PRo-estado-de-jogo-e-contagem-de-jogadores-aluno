// Crie a classe Game e defina suas funções para obter e definir os dados para o banco
// de dados

class Game {
  constructor() {}

  getState(){

gameStateRef.on("value", function(data){
    gameState = data.val();

});

  }

  update(state){
    database.ref ("/").update({
        gameState: state
    });
  }

  start() {
    
//     Crie sprite para os jogadores,inicie a variável playerCount, e crie uma instância de
// novo jogador.

   
  

    form = new Form();
    form.display();

    car1 = createSprite (width/2 - 50, height - 100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07;

    // criar sprite car 2 conforme car 1
   


    // atribua os objrtos ao vetor cars
    

  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }


  // Use a função drawSprite para exibir a imagem e chame a função play, 
  // para esconder os elementos quando necessário:
  play () {

    

  
  }
}
