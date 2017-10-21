/**
 * Creates an instance of Game Manager, to handle functions related to game creation, timing, and match checking
 *
 * @constructor
 * @this {GameManager}
 */
function GameManager(){
    /**
     * @private {number} Numeric ID of game timer
     */
    this.timerID = null;
    /**
     * Method to start a new game
     * @param none
     */
    this.startGame = function(){
        $("#gameArea").show();
        $(".position").off(); //remove click handlers from all tile containers
        data.reset(); //clear all time, score, and tile data
        clearInterval(gm.timerID); //stop timer if still running
        tileHandler.createGameBoard(data.boardWidth,data.boardHeight); //build new board
        this.checkAllMatch(); //check for initial matches
        this.Timer(); //start timer
        $(".position").on("click", function(){ //on click of tile container
            data.allTiles[$(this).attr("yValue")][$(this).attr("xValue")].onClick(); //handle click on tile
        });
        view.updateTime(); //update timer display
    };
    /**
     * Method to check all tiles for matches
     * @param none
     * @return {boolean} if match was found
     */
    this.checkAllMatch = function(){
        var hasMatch = false; //set initial match flag to false
        //TODO: Check if switching incrementor to _++ instead of ++_ broke game. If so, reverse.
        for(var y = 0; y < data.boardHeight; y++){
            for(var x = 0; x < data.boardWidth; x++){
                if(data.allTiles[x][y] !== null){ //if tile currently exists
                    //TODO: Check if conditional breaks game. If so, remove conditional
                    if(data.allTiles[x][y].checkMatch()){
                        hasMatch = true; //if there's a match, set flag to true
                    }
                }
            }
        }
        return hasMatch;
    };
    /**
     * Method to delete matched tiles
     * @param none
     * @return {boolean} if pieces were deleted
     */
    this.deleteAllMatch = function() {
        var deleted = data.shouldDeletePosition.length > 0; //flag if there are pieces to delete
        data.score+=(data.shouldDeletePosition.length*5); //add five points to score for each matched piece
        $(".score").text(data.score); //update score display
        for (var i = 0; i < data.shouldDeletePosition.length; i++) {
            tileHandler.deleteTile(data.shouldDeletePosition[i]); //delete tiles to be deleted
        }
        data.shouldDeletePosition = []; //reset array of tiles to be deleted
        tileHandler.dropTile(); //drop all tiles above matches to fill empty spaces
        if(deleted){
            if(tileHandler.refillEmptySpace()){ //if empty spaces were filled
                $(".tile").one('webkitAnimationEnd animationend', function() {
                    tileHandler.checkTile();
                })
            }
        }
        return deleted; //return flag to show if pieces were deleted
    };
    /**
     * Method to handle game timer functions
     * @param none
     */
    this.Timer = function(){
        gm.timerID = setInterval(function(){
            data.timeLeft -= 1;
            view.updateTime();
            if(data.timeLeft <=0){
                gm.onTimeOut();
            }
        },1000);
    };
    /**
     * Method to handle timer running out
     * @param none
     */
    this.onTimeOut = function(){
        clearInterval(gm.timerID);
        if (data.score > 600) { //if score is greater than win threshhold of 600
            this.onWin();
        } else {
            this.onLose();
        }
    };
    /**
     * Method to handle game win
     * @param none
     */
    this.onWin = function(){
        view.displayGameEndModal("./images/win_window.png"); //display modal image for win condition
        if (data.score > localStorage.highScore) {
            localStorage.highScore = data.score; //update high score if higher than current high score
        }
        $(".localHighScore").text(localStorage.highScore); //reset high score display to reflect current high score
        $(".position").off(); //remove click handlers from tile containers
    };
    /**
     * Method to handle game loss
     * @param none
     */
    this.onLose = function(){
        view.displayGameEndModal("./images/loss_window.png");
        if (data.score > localStorage.highScore) {
            localStorage.highScore = data.score;
        }
        $(".localHighScore").text(localStorage.highScore);
        $(".position").off();
    };
}