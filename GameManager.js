function GameManager(){

    //TODO need default state
    this.FSM = new FSM(allStates.wait_first_input);
    this.eventManager = new EventManager();
    this.data = new GameData();
    this.tileHandler = new TileHandler();

    this.init = function(){
        this.createBoard();
    };

    this.startGame = function(){
        this.data.reset();
    };

    //should make these properties private 
    this.checkMatch = function(){}; //check for match
    this.handleMatch = function(){}; //handle match if actual match
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?

    this.createTile = function(){}; //create new tile(s)
    this.createBoard = function(){}; //build initial board
}