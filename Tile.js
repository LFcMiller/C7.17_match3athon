function Tile(pos) {
    this.position = pos;
    
    this.onClick;//callback
    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//img dom
    this.container = null;//container dom
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation

    this.drop = function(){
        var tiles = gm.data.allTiles;
        if(this.position.y + 1 < gm.data.boardHeight ){
            while(tiles[this.position.y+1][this.position.x] === null){
                gm.tileHandler.moveTile(this, new Position(this.position.x, this.position.y+1));
            }
        }
    };
}