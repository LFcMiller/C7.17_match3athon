function GameData(){

    this.boardWidth = 9;
    this.boardHeight = 9;

    this.allTiles = [];
    this.allTileContainers = [];

    this.tileTypes = ["icons/chrome.png","icons/Css.png","icons/html5.png","icons/IE.png","icons/js.png","icons/php.png","icons/react.png"];

    

    this.reset = function(){
        //this.score = 0;
    };

    this.score = null; //current score
    this.timeLimit = 60; //seconds
    this.currentTime = 0;
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.currentMatchedTiles = [];
}

//??
function Position(x,y){
    this.x = x;
    this.y = y;
}