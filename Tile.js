function Tile(pos) {
    this.pos = pos;
    
    this.onClick = function(){
        if(data.firstTile === null){
            data.firstTile = this;
        }else{
            if(this === data.firstTile){
                return;
            }
            data.secondTile = this;
            tileHandler.tradePosition(data.firstTile, data.secondTile);
            tileHandler.checkTile();

        }

    };
    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//img dom
    this.container = null;//container dom
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation

    this.drop = function(){
        var tiles = data.allTiles;
        if(this.pos.y + 1 < data.boardHeight ){
            while(true){
                if(this.pos.y >= data.boardHeight - 1){
                    break;
                }
                if(!tiles[this.pos.y+1][this.pos.x]){
                    tileHandler.moveTile(this, new Position(this.pos.x, this.pos.y+1));
                }else{
                    break;
                }
            }
        }
    };

    this.changeOnStart = function(){
        var result = false;
        var tiles = data.allTiles;
        var t = tiles[this.pos.y][this.pos.x];
        if(this.pos.y > 0 && this.pos.y < data.boardHeight-1){
            if(tileHandler.isMatch(tiles[t.pos.y-1][t.pos.x], t)
                && tileHandler.isMatch(tiles[t.pos.y+1][t.pos.x], t)){
                result = true;
            }
        }
        if(this.pos.x > 0 && this.pos.x < data.boardWidth-1) {
            if (tileHandler.isMatch(tiles[t.pos.y][t.pos.x - 1], t)
                && tileHandler.isMatch(tiles[t.pos.y][t.pos.x + 1], t)) {
                result = true;
            }
        }
        return result;
    };

    this.checkMatch = function(){
        var tiles = data.allTiles;
        var t = tiles[this.pos.y][this.pos.x];
        var matched = false;
        if(this.pos.y > 0 && this.pos.y < data.boardHeight-1){
            if(tileHandler.isMatch(tiles[t.pos.y-1][t.pos.x], t)
                && tileHandler.isMatch(tiles[t.pos.y+1][t.pos.x], t)){
                data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y-1));
                data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y+1));
                matched = true;
            }
        }
        if(this.pos.x > 0 && this.pos.x < data.boardWidth-1) {
            if (tileHandler.isMatch(tiles[t.pos.y][t.pos.x - 1], t)
                && tileHandler.isMatch(tiles[t.pos.y][t.pos.x + 1], t)) {
                data.addShouldDeletePosition(new Position(t.pos.x - 1, t.pos.y));
                data.addShouldDeletePosition(new Position(t.pos.x + 1, t.pos.y));
                matched = true;
            }
        }
        if (matched) {
            data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y));
        }
    }
}