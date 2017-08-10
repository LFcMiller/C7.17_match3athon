function Tile(pos) {
    this.pos = pos;
    
    this.onClick;//callback
    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//img dom
    this.container = null;//container dom
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation

    this.drop = function(){
        var tiles = gm.data.allTiles;
        if(this.pos.y + 1 < gm.data.boardHeight ){
            while(tiles[this.pos.y+1][this.pos.x] === null){
                gm.tileHandler.moveTile(this, new Position(this.pos.x, this.pos.y+1));
            }
        }
    };

    this.checkMatch = function(){
        var tiles = data.allTiles;
        var t = tiles[this.pos.y][this.pos.x];
        var matched = false;
        if(this.pos.y > 0 && this.pos.y < data.boardHeight-1){
            if(tileHandler.isMatch(tiles[t.pos.y-1][t.pos.x], t)
                && tileHandler.isMatch(tiles[t.pos.y+1][t.pos.x], t)){
                data.shouldDeletePosition.push(new Position(t.pos.x, t.pos.y-1));
                data.shouldDeletePosition.push(new Position(t.pos.x, t.pos.y+1));
                matched = true;
            }
        }

        if(this.pos.x > 0 && this.pos.x < data.boardWidth-1) {
            if (tileHandler.isMatch(tiles[t.pos.y][t.pos.x - 1], t)
                && tileHandler.isMatch(tiles[t.pos.y][t.pos.x + 1], t)) {
                data.shouldDeletePosition.push(new Position(t.pos.x - 1, t.pos.y));
                data.shouldDeletePosition.push(new Position(t.pos.x + 1, t.pos.y));
                matched = true;
            }
        }
        if (matched) {
            data.shouldDeletePosition.push(new Position(t.pos.x, t.pos.y));
        }
    }
}