function GameManager(){

    //TODO need default state
    this.data = new GameData();
    this.tileHandler = new TileHandler();

    this.init = function(){
        this.tileHandler.init();
    };

    this.startGame = function(){
        this.data.reset();
        this.tileHandler.createGameBoard(this.data.boardWidth,this.data.boardHeight);
    };

    //should make these properties private 
    this.checkForAllMatch = function(tile){ //check for match for all possibilities
        if(tile.pos.y > 1) {
            this.checkForMatchNegativeY(tile);
        }
        if (tile.pos.x > 1) {
            this.checkForMatchNegativeX(tile);
        }
        if (tile.pos.x < 6) {
            this.checkForMatchPositiveX(tile);
        }
        if (tile.pos.y < 6) {
            this.checkForMatchPositiveY(tile);
        }
    }; 
    this.checkForMatchNegativeX = function(tile){
        if(gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y][tile.pos.x-1])) {
            gm.data.currentMatchedTiles.push(tile);
            gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x-1]);
            if(gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y][tile.pos.x-1],gm.data.allTiles[tile.pos.y][tile.pos.x-2])) {
                gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x-2]);
                if (gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y][tile.pos.x+1])) {
                    gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x+1]);
                    if (gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y][tile.pos.x+1],gm.data.allTiles[tile.pos.y][tile.pos.x+2])) {
                        gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x+2]);
                    }
                    gm.data.handleMatch(gm.data.currentMatchedTiles);
                } else {
                    gm.handleMatch(gm.data.currentMatchedTiles);
                }
            } else {
                gm.data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchPositiveX = function(tile){
        if(gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y][tile.pos.x+1])) {
            gm.data.currentMatchedTiles.push(tile);
            gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x+1]);
            if(gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y][tile.pos.x+1],gm.data.allTiles[tile.pos.y][tile.pos.x+2])) {
                gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x+2]);
                if (gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y][tile.pos.x-1])) {
                    gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x-1]);
                    if (gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y][tile.pos.x-1],gm.data.allTiles[tile.pos.y][tile.pos.x-2])) {
                        gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y][tile.pos.x-2]);
                    }
                    gm.data.handleMatch(gm.data.currentMatchedTiles);
                } else {
                    gm.handleMatch(gm.data.currentMatchedTiles);
                }
            } else {
                gm.data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchNegativeY = function(tile){
        if(gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y-1][tile.pos.x])) {
            gm.data.currentMatchedTiles.push(tile);
            gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y-1][tile.pos.x]);
            if(gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y-1][tile.pos.x],gm.data.allTiles[tile.pos.y-2][tile.pos.x])) {
                gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y-2][tile.pos.x]);
                if (gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y+1][tile.pos.x])) {
                    gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y+1][tile.pos.x]);
                    if (gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y+1][tile.pos.x],gm.data.allTiles[tile.pos.y+2][tile.pos.x])) {
                        gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y+2][tile.pos.x]);
                    }
                    gm.data.handleMatch(gm.data.currentMatchedTiles);
                } else {
                    gm.handleMatch(gm.data.currentMatchedTiles);
                }
            } else {
                gm.data.currentMatchedTiles = [];
            }
        }
    };
    this.checkForMatchPositiveY = function(tile){
        if(gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y+1][tile.pos.x])) {
            gm.data.currentMatchedTiles.push(tile);
            gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y+1][tile.pos.x]);
            if(gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y+1][tile.pos.x],gm.data.allTiles[tile.pos.y+2][tile.pos.x])) {
                gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y+2][tile.pos.x]);
                if (gm.tileHandler.isMatch(tile, gm.data.allTiles[tile.pos.y-1][tile.pos.x])) {
                    gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y-1][tile.pos.x]);
                    if (gm.tileHandler.isMatch(gm.data.allTiles[tile.pos.y-1][tile.pos.x],gm.data.allTiles[tile.pos.y-2][tile.pos.x])) {
                        gm.data.currentMatchedTiles.push(gm.data.allTiles[tile.pos.y-2][tile.pos.x]);
                    }
                    gm.data.handleMatch(gm.data.currentMatchedTiles);
                } else {
                    gm.handleMatch(gm.data.currentMatchedTiles);
                }
            } else {
                gm.data.currentMatchedTiles = [];
            }
        }
    };
    this.handleMatch = function(matchArray){ //handle match if actual match
        if(matchArray.length = 5) {
            gm.data.score+=20;
        } else if(matchArray.length = 4) {
            gm.data.score+=15;
        } else {
            gm.data.score+=10
        }
        for(var i = 0; i < matchArray.length; i++) {
            gm.data.allTiles[matchArray[i].pos.y][matchArray[i].pos.x] = null;
            $("div[xValue="+(matchArray[i].pos.x)+"][yValue="+(matchArray[i].pos.y)+"]").html("");
        }
        gm.tileHandler.dropTile();
        for (var i = 0; i <matchArray.length; i++){
            var tile = new Tile(new Position(matchArray[i].pos.x, 0));
        }
        this.checkForAllMatch();
    };
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
    this.shrinkBoard = function(){};
}