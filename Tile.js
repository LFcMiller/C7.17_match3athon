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
}