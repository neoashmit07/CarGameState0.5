class Game{
    constructor(){

    }

    getState(){
        //read the gamestate from the database
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        //write gamestate to the database
        database.ref('/').update({
            'gameState' : state    
        });
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}