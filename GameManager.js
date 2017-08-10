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
    this.handleMatch = function(){}; //handle match if actual match
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
    this.shrinkBoard = function(){};
}