class Game {
  constructor(){}
  //read the value of gamestate from the database
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
//write or update the value of gamestate into database
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
// when to start the game
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
