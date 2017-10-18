/**
 * Creates an instance of Tile Handler object, with methods related to handling actions for tiles
 *
 * @constructor
 * @this {TileHandler}
 */
function TileHandler(){
    /**
     * Method to make a new tile
     * @param {object} pos position of given tile
     * @return {object} tile created
     */
    this.createTile = function(pos){
        var tile = new Tile(pos); //make new tile at given position
        var isSpecial = Math.random() < 0.05; //randomize if tile should be a special tile
        if(isSpecial){ //if it is special, create a chrom tile
            tile.type = specialTileTypes[1];
            for(var t in tileTypes){
                tile.matchesWith.push(tileTypes[t]); //add all tile types to tiles special tile can match with
            }
        }else{ //other wise make random tile from tile types list
            tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
            tile.matchesWith.push(tile.type); //tile can match with itself
        }
        var image = $("<img>").attr("src", tile.type).addClass("tile"); //create image for tile
        tile.dom = image; //remember tile image
        data.allTiles[pos.y][pos.x] = tile; //remember tile in all tiles array
        var container = data.allTileContainers[pos.y][pos.x]; //remember tile container div
        tile.container = container;
        tile.dom.appendTo(container); //add tile to dom
        return tile;
    };
    /**
     * Method to create a container div for tiles
     * @param {object} pos position of given tile
     */
    this.createContainer = function(pos){
        var containerDiv = $("<div>").addClass("position").attr({"xValue": pos.x, "yValue": pos.y}); //make container div and remember coordinate location as attributes
        data.allTileContainers[pos.y].push(containerDiv);
        $("#gameWindow").append(containerDiv);
    };
    /**
     * Method to create new game board
     * @param {number} width game board width
     * @param {number} height game board height
     */
    this.createGameBoard = function(width,height) {
        for(var i = 0; i < height; i++) { //create tiles for all spaces on game board
            data.allTiles.push([]);
            data.allTileContainers.push([]);
            for(var j = 0; j < width; j++) {
                this.createContainer(new Position(j,i));
                this.createTile(new Position(j,i));
            }
        }
        for(var i = 0; i< height; i++){
            for(var j = 0; j < width; j++) {
                if(this.checkForInitialMatch(data.allTiles[j][i])){ //if tile had match,
                    i= i === 0 ? 0 : i-1; //set y value back by one row
                    j= j === 0 ? -1 : j-2; //set x value back by two columns
                }
            }
        }
    };
    /**
     * Method to check for matched on intitial game board
     * @param {object} tile current tile being checked
     * @return {boolean} if tile had a match
     */
    this.checkForInitialMatch = function(tile) {
        var x = tile.pos.x;
        var y = tile.pos.y;
        if(tile.changeOnStart()){ //if there is a match
            this.deleteTile(tile.pos); //delete tile
            var replaceTile = this.createTile(new Position(x,y)); //make new tile
            this.checkForInitialMatch(replaceTile); //check for matches again with replacement tile
            return true;
        }
        return false;
    };
    /**
     * Method to handle dropping tile down a row
     * @param none
     */
    this.dropTile = function(){ //begin at bottom of board, and work towards top
        for(var i = data.boardHeight-1; i >=0; --i){
            for(var j = data.boardWidth-1; j >=0 ; --j){
                if(data.allTiles[i][j]){
                    data.allTiles[i][j].drop();
                }
            }
        }
    };
    /**
     * Method to trade tile positions
     * @param {object} tile1 first tile to be traded
     * @param {object} tile2 second tile to be traded
     */
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
            $(tile1.dom).addClass("noAnimation");
            $(tile2.dom).addClass("noAnimation");
    };
    /**
     * Method to handle movement of tiles during dropping rows
     * @param none
     */
    this.moveTile = function(tile,newPos){
        if(tile === null){
            return;
        }
        tiles = data.allTiles;
        var oldPos = tile.pos;
        if(tiles[newPos.y][newPos.x] === null){ //if tile container blow tile is empty, move down by one row, and mark prior space as empty
            tiles[newPos.y][newPos.x] = tile;
            tiles[oldPos.y][oldPos.x] = null;
            tile.pos = newPos;
            tile.container = data.allTileContainers[newPos.y][newPos.x];
            $(tile.container).append(tile.dom)
            $(tile.dom).addClass("noAnimation");
        }
    };
    /**
     * Method to check if adjacent tiles are matching
     * @param {object} tile1 first tile to check
     * @param {object} tile2 second tile to check
     * @return {boolean} if tiles are matching
     */
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
    /**
     * Method to check tiles for matches, and reset tile focus
     * @param none
     */
    this.checkTile = function(){
        if(gm.checkAllMatch()){
            gm.deleteAllMatch();
        }
        data.firstTileContainer.removeClass("highlight") //remove highlight under first tile
        data.firstTile = null; //reset first tile
        data.secondTile = null; //reset second tile
    };
    /**
     * Method to fill empty spaces with new tiles after existing tiles have been dropped
     * @param none
     * @return {boolean} if tile space was refilled
     */
    this.refillEmptySpace = function(){
        var refilled = false;
        for(var i = 0; i < data.boardHeight; ++i){
            for(var j = 0; j < data.boardHeight; ++j){
                if(!data.allTiles[i][j]){ //if there isn't a tile in currently highlighted space
                    this.createTile(new Position(j,i)); //make a new tile
                    refilled = true;
                }
            }
        }
        return refilled;
    };
    /**
     * Method to handle deleting a tile
     * @param none
     */
    this.deleteTile = function(position){
        $(data.allTiles[position.y][position.x].dom).remove(); //remove tile from dom
        data.allTiles[position.y][position.x]=null; //reset tile in tiles array to null
    }   
}
/**
 * Creates an instance of tile Position object
 *
 * @constructor
 * @this {Position}
 */
function Position(x,y){
    this.x = x;
    this.y = y;
}