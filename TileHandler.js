function TileHandler(){

    this.init = function(){

    };


    this.createTile = function(pos){
        var tile = new Tile(pos);
        tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
        tile.matchesWith.push(tile.type);
        var image = $("<img>").attr("src", tile.type).addClass("tile");
        tile.dom = image;
        gm.data.allTiles.push(tile);
        var containerDiv = $("<div>").addClass("position").attr({"xValue": pos.x, "yValue": pos.y});
        gm.data.allTileContainers.push(containerDiv);
        tile.container = containerDiv;
        containerDiv.append(image);
        $("#gameWindow").append(containerDiv);
    };

    this.createGameBoard = function(width,height) {
        $("#gameWindow").html("");
        for(var i = 0; i < height; i++) {
            for(var j = 0; j < width; j++) {
                this.createTile(new Position(j,i));
            }
        }
    };

    this.dropTile = function(){
        for (var i = gm.data.boardHeight-1; i>=0; i--) {
            for(var j = gm.data.boardWidth-1; j>0; j--) {
                if(!($("div[xValue="+i+"][yValue="+j+"]").children().length)){
                    $("div[xValue="+i+"][yValue="+j+"]").append($("div[xValue="+i+"][yValue="+(j-1)+"]").children());
                    gm.tileHandler.dropTile();
                }
            }
        }
    };

    this.tradePosition = function(tile1,tile2){
        var tempPos = tile1.targetPosition;
        tile1.targetPosition = tile2.targetPosition;
        tile2.targetPosition = tempPos;
        this.moveTile(tile1);
        this.moveTile(tile2);
    };

    this.moveTile = function(tile){
        var targetContainer = gm.data.getTileContainerByPosition(tile.targetPosition);
        tile.container = targetContainer;
        $(targetContainer).append(tile.dom);
    };

    this.isMatch = function(tile1,tile2){
        for(var m in tile1.matchesWith) {
            for(var m2 in tile2.matchesWith){
                if(tile1.matchesWith[m] === tile2.matchesWith[m2]){
                    return true;
                }
            }
        }
        return false;
    };

    //parameter could be tile or position
    this.deleteTile = function(){
        
    }

    
}