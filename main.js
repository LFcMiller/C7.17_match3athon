$(document).ready(init);
var tileTypes = ["Icons/Css.png","Icons/html5.png","Icons/js.png","Icons/php.png","Icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var gm = new GameManager();
var data = new GameData();
var tileHandler = new TileHandler();
var view = new View();

function init(){
    $(".startButton").on("click", gm.startGame.bind(gm));
    $(".modalWin").on("click", view.displayModalWin);
    $(".modalLose").on("click", view.displayModalLose);
    if(localStorage.highScore === undefined) {
        localStorage.highScore = 0;
    }
    $(".localHighScore").text(localStorage.highScore);
}




