function TileHandler(){

    this.createTile = function(pos){
        var tile = new Tile(pos);
        tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
        tile.matchesWith.push(tile.type);
        var image = $("<img>").attr("src", tile.type).addClass("tile");
        tile.dom = image;
        data.allTiles[pos.y].push(tile);
        var container = data.allTileContainers[pos.y][pos.x];
        tile.container = container;
        tile.dom.appendTo(container);
    };

    this.createContainer = function(pos){
        var containerDiv = $("<div>").addClass("position").attr({"xValue": pos.x, "yValue": pos.y});
        data.allTileContainers[pos.y].push(containerDiv);
        $("#gameWindow").append(containerDiv);
    };

    this.createGameBoard = function(width,height) {
        $("#gameWindow").html("");
        data.allTiles = [];
        data.allTileContainers = [];
        for(var i = 0; i < height; i++) {
            data.allTiles.push([]);
            data.allTileContainers.push([]);
            for(var j = 0; j < width; j++) {
                this.createContainer(new Position(j,i));
                this.createTile(new Position(j,i));
            }
        }
    };

    this.checkForInitialMatch = function() {

    };

    this.dropTile = function(){
        for(var i = data.boardHeight-1; i >=0; --i){
            for(var j = data.boardWidth-1; j >=0 ; --j){
                if(data.allTiles[i][j]){
                    data.allTiles[i][j].drop();
                }
            }
        }
    };

    this.tradePosition = function(tile1,tile2){
        tiles = data.allTiles;
            tiles[tile2.position.y][tile2.position.x] = tile1;
            tiles[tile1.position.y][tile1.position.x] = tile2;
            var temp = null;
            temp = tile1.position;
            tile1.position = tile2.position;
            tile2.position = temp;
            temp = tile1.container;
            tile1.container = tile2.container;
            tile2.container = temp;
            $(tile1.container).append(tile1.dom);
            $(tile2.container).append(tile2.dom);
    };

    this.moveTile = function(tile,newPosition){
        if(tile === null){
            return;
        }
        tiles = data.allTiles;
        var oldPosition = tile.position;
        if(tiles[newPosition.y][newPosition.x] === null){
            tiles[newPosition.y][newPosition.x] = tile;
            tiles[oldPosition.y][oldPosition.x] = null;
            tile.position = newPosition;
            tile.container = data.allTileContainers[newPosition.y][newPosition.x];
            $(tile.container).append(tile.dom);
        }else{
            this.tradePosition(tiles[newPosition.y][newPosition.x], tiles[oldPosition.y][oldPosition.x]);
        }
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

    this.deleteTile = function(position){
        $(data.allTiles[position.y][position.x].dom).remove();
        data.allTiles[position.y][position.x]=null;
    }
    
}