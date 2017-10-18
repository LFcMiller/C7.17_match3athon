/**
 * Creates an instance of a Tile, with functions for checking if tile was matched, if it should drop a row, etc.
 *
 * @constructor
 * @this {Tile}
 */
function Tile(pos) {
    /**
     * @private {object} Object containing x and y coordinates of tile on game board 
     */
    this.pos = pos;
    /**
     * @private {string} type of tile 
     */
    this.type = null; 
    /**
     * @private {array} tile types that this tile matches with 
     */
    this.matchesWith = [];
    /**
     * @private {element} link to dom element of tile
     */
    this.dom = null;
    /**
     * @private {element} link to dom element of tile container
     */
    this.container = null;//container dom
    /**
     * Method to handle click on tile
     * @param none
     */
    this.onClick = function(){
        if(data.firstTile === null){ //if no tile has been clicked, remember as first tile clicked
            data.firstTile = this;
            data.firstTileContainer = data.firstTile.container;
            data.firstTileContainer.addClass("highlight"); //place highlight under first tile clicked
        }else{
            if(this === data.firstTile){ //if tile clicked is the same as the first tile clicked
                data.firstTile = null;
                data.firstTileContainer.removeClass("highlight"); //remove highlight from under first tile clicked
                return;
            }
            data.secondTile = this;
            tileHandler.tradePosition(data.firstTile, data.secondTile); //trade tile positions
            tileHandler.checkTile(); //check for matches

        }

    };
    /**
     * Method to drop tile through rows to fill empty space
     * @param none
     */
    this.drop = function(){
        var tiles = data.allTiles;
        if(this.pos.y + 1 < data.boardHeight ){
            while(true){
                if(this.pos.y >= data.boardHeight - 1){ //if tile position exceeds limits of area to check
                    break;
                }
                if(!tiles[this.pos.y+1][this.pos.x]){ //if tile space below tile is open, drop row to fill
                    tileHandler.moveTile(this, new Position(this.pos.x, this.pos.y+1));
                }else{
                    break;
                }
            }
        }
    };
    /**
     * Method to check if tile has match upon intial board creation, and if so, mark for deletion
     * @param none
     * @return {boolean} if tile has a match
     */
    this.changeOnStart = function(){
        var result = false;
        var tiles = data.allTiles;
        var t = tiles[this.pos.y][this.pos.x];
        if(this.pos.y > 0 && this.pos.y < data.boardHeight-1){
            if(tileHandler.isMatch(tiles[t.pos.y-1][t.pos.x], t)
                && tileHandler.isMatch(tiles[t.pos.y+1][t.pos.x], t)){
                result = true; //set flag to true if match is found
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
    /**
     * Method to handle check for tile matches, and mark for deletion
     * @param none
     * @return {boolean} if tile had any matches
     */
    this.checkMatch = function(){
        var tiles = data.allTiles;
        var t = tiles[this.pos.y][this.pos.x];
        var matched = false; //set matched flag to false
        if(this.pos.y > 0 && this.pos.y < data.boardHeight-1){
            if(tileHandler.isMatch(tiles[t.pos.y-1][t.pos.x], t)
                && tileHandler.isMatch(tiles[t.pos.y+1][t.pos.x], t)){ //if match is found on y axis
                data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y-1)); //add adjacent matched tiles to list of matched tiles to be deleted
                data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y+1));
                matched = true;
            }
        }
        if(this.pos.x > 0 && this.pos.x < data.boardWidth-1) {
            if (tileHandler.isMatch(tiles[t.pos.y][t.pos.x - 1], t)
                && tileHandler.isMatch(tiles[t.pos.y][t.pos.x + 1], t)) { //f match is found on x axis
                data.addShouldDeletePosition(new Position(t.pos.x - 1, t.pos.y));
                data.addShouldDeletePosition(new Position(t.pos.x + 1, t.pos.y));
                matched = true;
            }
        }
        if (matched) { //if match was found, add focused tile to list of tiles to delete
            data.addShouldDeletePosition(new Position(t.pos.x, t.pos.y));
        }
        return matched;
    }
}