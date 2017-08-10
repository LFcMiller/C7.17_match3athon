$(document).ready(init);
var tileTypes = ["icons/Css.png","icons/html5.png","icons/js.png","icons/php.png","icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var gm = new GameManager();
var data = new GameData();
var tileHandler = new TileHandler();
var view = new View();

function init(){
    $(".startButton").on("click", gm.startGame.bind(gm));
}


function test(){
    console.log("test success");
}




