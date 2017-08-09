function GameData(){
    var allTiles = [];
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

    this.size = null; //board size
    this.score = null; //current score
    this.timer = null; //current timer
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.currentMatchedTiles = [];
}