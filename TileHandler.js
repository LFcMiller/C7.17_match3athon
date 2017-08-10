function TileHandler(){

    this.init = function(){

    };


    this.createTile = function(pos){
        var tile = new Tile(pos);
        tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
        tile.matchesWith.push(tile.type);
        var image = $("<img>").attr("src", tile.type).addClass("tile");
        tile.dom = image;
        gm.data.allTiles[pos.x].push(tile);
        var container = gm.data.allTileContainers[pos.x][pos.y];
        tile.container = container;
        tile.dom.appendTo(container);
    };

    this.createContainer = function(pos){
        var containerDiv = $("<div>").addClass("position").attr({"xValue": pos.x, "yValue": pos.y});
        gm.data.allTileContainers[pos.x].push(containerDiv);
        $("#gameWindow").append(containerDiv);
    }

    this.createGameBoard = function(width,height) {

        $("#gameWindow").html("");
        for(var i = 0; i < width; i++) {
            gm.data.allTiles.push([]);
            gm.data.allTileContainers.push([]);
            for(var j = 0; j < height; j++) {
                this.createContainer(new Position(i,j));
                this.createTile(new Position(i,j));
            }
        }
    };

    this.dropTile = function(tile){

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
    }

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