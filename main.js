$(document).ready(init); //call init function on document ready
/**
 * Global Variable to store types of tiles
 * @global {array}
 */
var tileTypes = ["images/Css.png","images/html5.png","images/js.png","images/php.png","images/react.png"];
/**
 * Global Variable to store special tile types
 * @global {array}
 */
var specialTileTypes = ["images/IE.png","images/chrome.png"];
/**
 * Global Variable to store new instance of Game Manager object
 * @global {object}
 */
var gm = new GameManager();
/**
 * Global Variable to store new instance of Game Data object
 * @global {object}
 */
var data = new GameData();
/**
 * Global Variable to store new instance of Tile Handler object 
 * @global {object}
 */
var tileHandler = new TileHandler();
/**
 * Global Variable to store new instance of View object
 * @global {object}
 */
var view = new View();
/**
 * Function to apply click handlers and update high score display on load
 * @param {string} response
 * @return {undefined}
 */
function init(){
    $(".startButton").on("click", gm.startGame.bind(gm));
    $(".gameEndModal").on("click", view.displayGameEndModal);
    if(localStorage.highScore === undefined) { //if high score doesn't exist yet, set to 0
        localStorage.highScore = 0;
    }
    $(".localHighScore").text(localStorage.highScore);
}




