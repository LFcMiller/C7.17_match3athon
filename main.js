$(document).ready(init);
var tileTypes = ["icons/Css.png","icons/html5.png","icons/js.png","icons/php.png","icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var gm = null;

function init(){
    gm = new GameManager();
    gm.init();
    $(".startButton").on("click", gm.startGame.bind(gm));
}

//tile not finished, each tile store it's button
function setTileOnClick(tileArray){
    for(var t in tileArray){
        var tile = tileArray[t];
        
    }
}

function test(){
    console.log("test success");
}




