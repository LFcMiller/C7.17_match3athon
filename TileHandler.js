function TileHandler(){

    this.init = function(){
        gm.eventManager.add_listener("tradePosition", this.tradePosition);
    };

    this.createTile = function(x,y){
        var tile = new Tile(x,y);
        tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
        var image = $("<img>").attr("src", tile.type).addClass("tile");
        allTiles.push(tile);
        var containerDiv = $("<div>").addClass("position").attr({"xValue": x, "yValue": y});
        containerDiv.append(image);
        $("#gameWindow").append(containerDiv);
    };


    this.createGameBoard = function(width,height) {
        $("#gameWindow").html("");
        for(var i = 0; i < width; i++) {
            for(var j = 0; j < height; j++) {
                this.createTile(i,j);
            }
        }
    };

    this.dropTile = function(tile){

    };

    this.tradePosition = function(tile1,tile2){
        var tempX = tile1.x;
        var tempY = tile1.y;
        tile1.x = tile2.x;
        tile1.y = tile2.y;
        tile2.x = tempX;
        tile2.y = tempY;
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