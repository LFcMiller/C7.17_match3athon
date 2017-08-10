function GameManager(){

    this.startGame = function(){
        data.reset();
        tileHandler.createGameBoard(data.boardWidth,data.boardHeight);
    };

    //should make these properties private 
    this.checkForAllMatch = function(tile, resetTrigger){ //check for match for all possibilities
        if(tile.pos.y > 1) {
            this.checkForMatchNegativeY(tile,resetTrigger);
        }
        if (tile.pos.x > 1) {
            this.checkForMatchNegativeX(tile, resetTrigger);
        }
        if (tile.pos.x < 6) {
            this.checkForMatchPositiveX(tile, resetTrigger);
        }
        if (tile.pos.y < 6) {
            this.checkForMatchPositiveY(tile, resetTrigger);
        }
    }; 
    this.checkForMatchNegativeX = function(tile, resetTrigger){
        if(tileHandler.isMatch(tile, data.allTiles[tile.pos.y][tile.pos.x-1])) {
            data.currentMatchedTiles.push(tile);
            data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x-1]);
            if(tileHandler.isMatch(data.allTiles[tile.pos.y][tile.pos.x-1],data.allTiles[tile.pos.y][tile.pos.x-2])) {
                data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x-2]);
                if(data.allTiles[tile.pos.y][tile.pos.x+1]){
                    if (tileHandler.isMatch(tile, data.allTiles[tile.pos.y][tile.pos.x+1])) {
                        data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x+1]);
                        if(data.allTiles[tile.pos.y][tile.pos.x+2]) {
                            if (tileHandler.isMatch(data.allTiles[tile.pos.y][tile.pos.x + 1], data.allTiles[tile.pos.y][tile.pos.x + 2])) {
                                data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x + 2]);
                            }
                        }
                        gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                    } else {
                        gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                    }
                }
            } else {
                data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchPositiveX = function(tile, resetTrigger){
        if(tileHandler.isMatch(tile, data.allTiles[tile.pos.y][tile.pos.x+1])) {
            data.currentMatchedTiles.push(tile);
            data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x+1]);
            if(tileHandler.isMatch(data.allTiles[tile.pos.y][tile.pos.x+1],data.allTiles[tile.pos.y][tile.pos.x+2])) {
                data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x+2]);
                if(data.allTiles[tile.pos.y][tile.pos.x-1]) {
                    if (tileHandler.isMatch(tile, data.allTiles[tile.pos.y][tile.pos.x - 1])) {
                        data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x - 1]);
                        if(data.allTiles[tile.pos.y][tile.pos.x-2]) {
                            if (tileHandler.isMatch(data.allTiles[tile.pos.y][tile.pos.x - 1], data.allTiles[tile.pos.y][tile.pos.x - 2])) {
                                data.currentMatchedTiles.push(data.allTiles[tile.pos.y][tile.pos.x - 2]);
                            }
                        }
                    }
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                } else {
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                }
            } else {
                data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchNegativeY = function(tile, resetTrigger){
        if(tileHandler.isMatch(tile, data.allTiles[tile.pos.y-1][tile.pos.x])) {
            data.currentMatchedTiles.push(tile);
            data.currentMatchedTiles.push(data.allTiles[tile.pos.y-1][tile.pos.x]);
            if(tileHandler.isMatch(data.allTiles[tile.pos.y-1][tile.pos.x],data.allTiles[tile.pos.y-2][tile.pos.x])) {
                data.currentMatchedTiles.push(data.allTiles[tile.pos.y-2][tile.pos.x]);
                if(data.allTiles[tile.pos.y][tile.pos.y+1]) {
                    if (tileHandler.isMatch(tile, data.allTiles[tile.pos.y+1][tile.pos.x])) {
                        data.currentMatchedTiles.push(data.allTiles[tile.pos.y + 1][tile.pos.x]);
                        if(data.allTiles[tile.pos.y][tile.pos.y+2]) {
                            if (tileHandler.isMatch(data.allTiles[tile.pos.y + 1][tile.pos.x], data.allTiles[tile.pos.y + 2][tile.pos.x])) {
                                data.currentMatchedTiles.push(data.allTiles[tile.pos.y + 2][tile.pos.x]);
                            }
                        }
                    }
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                } else {
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                }
            } else {
                data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchPositiveY = function(tile, resetTrigger){
        if(tileHandler.isMatch(tile, data.allTiles[tile.pos.y+1][tile.pos.x])) {
            data.currentMatchedTiles.push(tile);
            data.currentMatchedTiles.push(data.allTiles[tile.pos.y+1][tile.pos.x]);
            if(tileHandler.isMatch(data.allTiles[tile.pos.y+1][tile.pos.x],data.allTiles[tile.pos.y+2][tile.pos.x])) {
                data.currentMatchedTiles.push(data.allTiles[tile.pos.y+2][tile.pos.x]);
                if(data.allTiles[tile.pos.y][tile.pos.y-1]) {
                    if (tileHandler.isMatch(tile, data.allTiles[tile.pos.y-1][tile.pos.x])) {
                        data.currentMatchedTiles.push(data.allTiles[tile.pos.y - 1][tile.pos.x]);
                        if(data.allTiles[tile.pos.y][tile.pos.y-2]) {
                            if (tileHandler.isMatch(data.allTiles[tile.pos.y - 1][tile.pos.x], data.allTiles[tile.pos.y - 2][tile.pos.x])) {
                                data.currentMatchedTiles.push(data.allTiles[tile.pos.y - 2][tile.pos.x]);
                            }
                        }
                    }
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                } else {
                    gm.handleMatch(data.currentMatchedTiles, resetTrigger);
                }
            } else {
                data.currentMatchedTiles = [];
            }
        }
    };
    this.handleMatch = function(matchArray, resetTrigger){ //handle match if actual match
        if(resetTrigger){
            tileHandler.deleteTile(matchArray[0].pos);
            data.currentMatchedTiles = [];
            return true;
        }
        if(matchArray.length = 5) {
            data.score+=20;
        } else if(matchArray.length = 4) {
            data.score+=15;
        } else {
            data.score+=10
        }
        for(var i = 0; i < matchArray.length; i++) {
            data.allTiles[matchArray[i].pos.y][matchArray[i].pos.x] = null;
            $("div[xValue="+(matchArray[i].pos.x)+"][yValue="+(matchArray[i].pos.y)+"]").html("");
        }
        tileHandler.dropTile();
        for (var i = 0; i <matchArray.length; i++){
            var tile = new Tile(new Position(matchArray[i].pos.x, 0));
        }

        this.checkForAllMatch();
    };
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
    this.shrinkBoard = function(){};
}