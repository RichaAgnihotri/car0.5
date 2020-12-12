class Player {
  constructor(){}
//read the playercount value
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
// write or update the value of player count into database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// write or upadate the name of the player into database
  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
