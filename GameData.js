function GameData(){

    this.boardWidth = 9;
    this.boardHeight = 9;

    this.allTiles = [];
    this.allTileContainers = [];

    this.tileTypes = ["icons/chrome.png","icons/Css.png","icons/html5.png","icons/IE.png","icons/js.png","icons/php.png","icons/react.png"];

    this.getTileContainerByPosition = function(pos){
        for(var c in this.allTileContainers){
            if(this.allTileContainers[c].pos === pos){
                return this.allTileContainers[c];
            }
        }
        return null;
    }

    this.getContainerPosition = function(container){
        var pos = new Position($(container).attr("xValue"),$(container).attr("yValue"));
        return pos;
    }

    this.getTileByPosition = function(pos){
        for(var t in this.allTiles){
            if(this.allTiles[t].pos.x === pos.x && this.allTiles[t].pos.y === pos.y){
                return this.allTiles[t];
            }
        }
        return null;
    }

    this.reset = function(){
        //this.score = 0;
    };

    this.score = null; //current score
    this.timer = null; //current timer
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.currentMatchedTiles = [];
}

//??
function Position(x,y){
    this.x = x;
    this.y = y;
}