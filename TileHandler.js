function TileHandler(){

    gm.eventManager.add_listener("tradePosition", tradePosition);

    this.createTile = function(){

    }
    this.createBoard = function(){

    }

    this.dropTile = function(tile){
        
    }

    this.tradePosition = function(tile1,tile2){
        var tempX = tile1.x;
        var tempY = tile1.y;
        tile1.x = tile2.x;
        tile1.y = tile2.y;
        tile2.x = tempX;
        tile2.y = tempY;
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
    }

    //parameter could be tile or position
    this.deleteTile = function(){
        
    }

    
}