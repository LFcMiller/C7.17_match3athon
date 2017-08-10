function GameData(){

    this.boardWidth = 9;
    this.boardHeight = 9;

    this.allTiles = [];
    this.allTileContainers = [];

    this.tileTypes = ["icons/chrome.png","icons/Css.png","icons/html5.png","icons/IE.png","icons/js.png","icons/php.png","icons/react.png"];

    this.shouldDeletePosition = [];
    this.addShouldDeletePosition = function(pos){
        var repeat = false;
        for(var p in this.shouldDeletePosition){
            if(this.shouldDeletePosition[p].x === pos.x && this.shouldDeletePosition[p].y === pos.y){
                repeat = true;
            }
        }
        if(!repeat) {
            this.shouldDeletePosition.push(pos);
        }
    };

    this.reset = function(){
        this.timeLeft = 60;
        this.score = 0;
        $("#gameWindow").html("");
        data.allTiles = [];
        data.allTileContainers = [];
    };

    this.score = null; //current score
    this.timeLeft = 60; //seconds
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.currentMatchedTiles = [];
}

//??
function Position(x,y){
    this.x = x;
    this.y = y;
}