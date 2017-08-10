function GameManager(){

    //TODO need default state
    this.data = new GameData();
    this.tileHandler = new TileHandler();

    this.init = function(){
        this.tileHandler.init();
    };

    this.startGame = function(){
        this.data.reset();
        this.tileHandler.createGameBoard(this.data.boardWidth,this.data.boardHeight);
    };

    //should make these properties private 
    this.checkForAllMatch = function(){}; //check for match
    this.handleMatch = function(matchArray){ //handle match if actual match
        if(matchArray.length = 5) {
            gm.data.score+=20;
        } else if(matchArray.length = 4) {
            gm.data.score+=15;
        } else {
            gm.data.score+=10
        }
        for(var i = 0; i < matchArray.length; i++) {
            gm.data.allTiles[matchArray[i].pos.y][matchArray[i].pos.x] = null;
            $("div[xValue="+(matchArray[i].pos.x)+"][yValue="+(matchArray[i].pos.y)+"]").html("");
        }
        gm.tileHandler.dropTile();
        for (var i = 0; i <matchArray.length; i++){
            var tile = new Tile(new Position(matchArray[i].pos.x, 0));
        }
    };
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
    this.shrinkBoard = function(){};
}