/**
 * Creates an instance of Game Data (stats, tiles, size, etc.)
 *
 * @constructor
 * @this {GameData}
 */
function GameData(){
    /**
     * @private {number} Number of columns in game board
     */
    this.boardWidth = 9;
    /**
     * @private {number} Number of rows in game board
     */
    this.boardHeight = 9;
    /**
     * @private {array} All current tiles on game board
     */
    this.allTiles = [];
    /**
     * @private {array} All containing divs for actual tiles
     */
    this.allTileContainers = [];
    /**
     * @private {array} All tiles currently matched that should be deleted
     */
    this.shouldDeletePosition = [];
    /**
     * @private {number} Current game score
     */
    this.score = null;
    /**
     * @private {number} Current time left in game (seconds)
     */
    this.timeLeft = 60;
    /**
     * @private {object} First tile clicked by user
     */
    this.firstTile = null;
    /**
     * @private {element} Containing div for first tile
     */
    this.firstTileContainer = null;
    /**
     * @private {object} Second tile clicked by user
     */
    this.secondTile = null;
    /**
     * Method to add tile to list of tiles to be deleted as matches
     * @param {object} pos - object containing x and y coordinate of tile
     */
    this.addShouldDeletePosition = function(pos){
        var repeat = false;
        for(var p in this.shouldDeletePosition){
            if(this.shouldDeletePosition[p].x === pos.x && this.shouldDeletePosition[p].y === pos.y){
                repeat = true; //if tile already exists in array of tiles to delete, markas repeat
            }
        }
        if(!repeat) { //if not repeat tile, add to list of tiles to delete
            this.shouldDeletePosition.push(pos);
        }
    };
    /**
     * Method to reset game prior to new game
     * @param none
     */
    this.reset = function(){
        this.timeLeft = 60; //reset timer
        this.score = 0; //reset score
        $("#gameWindow").empty(); //clear out all existing tiles
        data.allTiles = []; //clear out tiles from tile array
        data.allTileContainers = []; //clear out existing tile containers
    };
}