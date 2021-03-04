class Player{
    constructor(){

    }

    getCount(){
        //read the playerCount from the database
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        //write playerCount to the database
        database.ref('/').update({
            'playerCount' : count    
        });
    }

    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            'name': name 
        })
    }

  
}