function TileHandler(){

    this.createTile = function(pos){
        var tile = new Tile(pos);
        tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
        tile.matchesWith.push(tile.type);
        var image = $("<img>").attr("src", tile.type).addClass("tile");
        tile.dom = image;
        data.allTiles[pos.y][pos.x] = tile;
        var container = data.allTileContainers[pos.y][pos.x];
        tile.container = container;
        tile.dom.appendTo(container);
        return tile;
    };

    this.createContainer = function(pos){
        var containerDiv = $("<div>").addClass("position").attr({"xValue": pos.x, "yValue": pos.y});
        data.allTileContainers[pos.y].push(containerDiv);
        $("#gameWindow").append(containerDiv);
    };

    this.createGameBoard = function(width,height) {

        for(var i = 0; i < height; i++) {
            data.allTiles.push([]);
            data.allTileContainers.push([]);
            for(var j = 0; j < width; j++) {
                this.createContainer(new Position(j,i));
                this.createTile(new Position(j,i));
            }
        }

        for(var i = 0; i< height; i++){
            for(var j = 0; j < width; j++) {
                if(this.checkForInitialMatch(data.allTiles[j][i], "reset")){
                    i= i === 0 ? 0 : i-1;
                    j= j === 0 ? -1 : j-2;
                }
            }
        }
    };
    this.checkForInitialMatch = function(tile) {
        console.log(tile.pos,tile.type,tile.changeOnStart());
        var x = tile.pos.x;
        var y = tile.pos.y;
        if(tile.changeOnStart()){
            this.deleteTile(tile.pos);
            var replaceTile = this.createTile(new Position(x,y));
            data.currentMatchedTiles=[];
            this.checkForInitialMatch(replaceTile);
            return true;
        }
        return false;
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
            tiles[tile2.pos.y][tile2.pos.x] = tile1;
            tiles[tile1.pos.y][tile1.pos.x] = tile2;
            var temp = null;
            temp = tile1.pos;
            tile1.pos = tile2.pos;
            tile2.pos = temp;
            temp = tile1.container;
            tile1.container = tile2.container;
            tile2.container = temp;
            $(tile1.container).append(tile1.dom);
            $(tile2.container).append(tile2.dom);
    };

    this.moveTile = function(tile,newPos){
        if(tile === null){
            return;
        }
        tiles = data.allTiles;
        var oldPos = tile.pos;
        if(tiles[newPos.y][newPos.x] === null){
            tiles[newPos.y][newPos.x] = tile;
            tiles[oldPos.y][oldPos.x] = null;
            tile.pos = newPos;
            tile.container = data.allTileContainers[newPos.y][newPos.x];
            $(tile.container).append(tile.dom);
        }else{
            this.tradePosition(tiles[newPos.y][newPos.x], tiles[oldPos.y][oldPos.x]);
        }
    };


    this.isMatch = function(tile1,tile2){
        if(tile1 && tile2) {
            for (var m in tile1.matchesWith) {
                for (var m2 in tile2.matchesWith) {
                    if (tile1.matchesWith[m] === tile2.matchesWith[m2]) {
                        return true;
                    }
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