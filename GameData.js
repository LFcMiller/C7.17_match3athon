function GameData(){

    this.boardWidth = 9;
    this.boardHeight = 9;

    var allTiles = [];

    this.tileTypes = ["icons/chrome.png","icons/Css.png","icons/html5.png","icons/IE.png","icons/js.png","icons/php.png","icons/react.png"];

    this.getTileByPosition = function(x,y){
        for(var t in allTiles){
            if(allTiles[t].x === x && alltile[t].y === y){
                return allTiles[t];
            }
        }
        return null;
    }

    this.reset = function(){
        this.score = 0;
    };

    this.score = null; //current score
    this.timer = null; //current timer
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.currentMatchedTiles = [];
}